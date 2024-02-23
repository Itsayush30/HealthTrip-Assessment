const { Telegraf } = require("telegraf");
const axios = require("axios");
require('dotenv').config()

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const weatherAPIKey = process.env.WEATHER_API_KEY;

// Function to fetch weather data

bot.start((ctx) => ctx.reply('Welcome'))


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

module.exports = bot;
