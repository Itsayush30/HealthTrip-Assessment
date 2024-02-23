const express = require("express");
const connect = require("./config/database");
const bot = require("./bot"); 
const User = require("./models/user");

const app = express();
const PORT = process.env.PORT;

// Start Express server
app.listen(PORT, async () => {
  console.log(`Express server started at ${PORT}`);
  try {
    await connect();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
});

// Start Telegraf bot
bot.launch()
