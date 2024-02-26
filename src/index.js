const express = require("express");
const connect = require("./config/database");
const bot = require("./bot");
const PORT = process.env.PORT;
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

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
bot.launch();
