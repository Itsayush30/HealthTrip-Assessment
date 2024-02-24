const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const dotenv = require("dotenv");
const fs = require("fs");

const updateMsgFrequency = async (newMsgFrequency) => {
  try {
    console.log("inApiService", newMsgFrequency);
    dotenv.config();

    console.log(newMsgFrequency);
    process.env.MESSAGE_FREQUENCY = newMsgFrequency;
    // Generate the content for the .env file
    let envContent = "";
    for (const key in process.env) {
      envContent += `${key}=${process.env[key]}\n`;
    }

    // Write the updated content back to the .env file
    fs.writeFileSync(".env", envContent);
    console.log(process.env.MESSAGE_FREQUENCY);
    return true;
  } catch (error) {
    console.error("Error updating msg frequency:", error);
    throw new AppError(
      "Failed to update msg frequency",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = updateMsgFrequency;
