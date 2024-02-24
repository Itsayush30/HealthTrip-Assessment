const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const dotenv = require("dotenv");
const fs = require("fs");

const updateApiKey = async (newApiKey) => {
  try {
    console.log("inApiService", newApiKey);
    dotenv.config();

    console.log("Here", newApiKey);
    process.env.WEATHER_API = newApiKey;
    // Generate the content for the .env file
    let envContent = "";
    for (const key in process.env) {
      envContent += `${key}=${process.env[key]}\n`;
    }

    // Write the updated content back to the .env file
    fs.writeFileSync(".env", envContent);
    console.log(process.env.WEATHER_API);
    return true;
  } catch (error) {
    console.error("Error updating API key:", error);
    throw new AppError(
      "Failed to update API key",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = updateApiKey;
