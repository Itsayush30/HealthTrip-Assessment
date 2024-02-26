const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const updateApiKey = require("../services/bot-api-key-service");

const updateBotApiKeysController = async (req, res) => {
  //const { newApiKey } = req.body;
  //if (!newApiKey) {
  //return res.status(400).json({ success: false, error: 'New API key is required' });
  //}

  try {
    const updated = await updateApiKey(req.body.newApiKey);
    SuccessResponse.data = updated;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.error("Error updating API key:", error);
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
};

module.exports = { updateBotApiKeysController };
