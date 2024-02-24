const dotenv = require('dotenv');
const fs = require('fs');

const updateApiKey = async (newApiKey) => {
  try {
    dotenv.config();

    process.env.WEATHER_API = newApiKey;

    // Generate the content for the .env file
    let envContent = '';
    for (const key in process.env) {
      envContent += `${key}=${process.env[key]}\n`;
    }

    // Write the updated content back to the .env file
    fs.writeFileSync('.env', envContent);

    return true;
  } catch (error) {
    console.error('Error updating API key:', error);
    throw new Error('Failed to update API key');
  }
};

module.exports = updateApiKey ;
