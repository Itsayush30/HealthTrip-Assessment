const { Telegraf } = require("telegraf");
const axios = require("axios");
const connect = require("./config/database");
const User = require("./models/user");
const cron = require("node-cron");
require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const weatherAPIKey = process.env.WEATHER_API_KEY;

bot.start((ctx) => {
  const userId = ctx.message.from.id;
  console.log("User ID:", userId);
  ctx.reply("Welcome!");
}); // /start

// Command to handle registration and adding user to the database
bot.command("register", async (ctx) => {
  const telegramId = ctx.message.from.id;
  console.log("Telegram ID:", telegramId);

  const [name, city, country] = ctx.message.text.split(" ").slice(1);

  if (!name || !city || !country) {
    ctx.reply(
      "Please provide your name, city, and country in the format: /register <name> <city> <country>"
    );
    return;
  }

  await connect();

  try {
    // Create a new user document and save it to the database
    const user = await User.create({ name, city, country, telegramId });
    ctx.reply(`User ${name} registered successfully!`);
  } catch (error) {
    console.error("Error registering user:", error);
    ctx.reply("Failed to register user. Please try again later.");
  }
});

// Function to fetch weather data

const getWeatherReport = async (cityName) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPIKey}&units=metric`
    );
    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error.response.data);
    return null;
  }
};

bot.command("weather", async (ctx) => {
  //const chatId = ctx.chat.id;
  const cityName = ctx.message.text.split(" ")[1];

  if (!cityName) {
    ctx.reply("Please provide a city name. Usage: /weather <city>");
    return;
  }

  const weatherData = await getWeatherReport(cityName);
  if (weatherData) {
    const weatherDescription = weatherData.weather[0].description;
    const temperature = weatherData.main.temp;

    ctx.reply(
      `Weather in ${cityName}: ${weatherDescription}, Temperature: ${temperature}°C`
    );
  } else {
    ctx.reply(`Sorry, couldn't fetch weather data for ${cityName}.`);
  }
});
// Function to send weather updates to all registered users
const sendWeatherUpdates = async () => {
  try {
    // Get all registered users
    const users = await User.find();

    for (const user of users) {
      const cityName = user.city;
      const weatherData = await getWeatherReport(cityName);

      if (weatherData) {
        console.log(user);
        const weatherDescription = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;

        bot.telegram.sendMessage(
          user.telegramId,
          `Weather in ${cityName}: ${weatherDescription}, Temperature: ${temperature}°C`
        );
      } else {
        console.error(`Failed to fetch weather data for ${cityName}.`);
      }
    }
  } catch (error) {
    console.error("Error sending weather updates:", error);
  }
};

// Schedule the task to send weather updates every day
cron.schedule(process.env.MESSAGE_FREQUENCY, sendWeatherUpdates); // 5second for now

module.exports = bot;
