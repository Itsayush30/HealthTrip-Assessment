const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const updateMsgFrequency = require("../services/msg-frequency-service");

const MsgFrequencyController = async (req, res) => {
  try {
    const updated = await updateMsgFrequency(req.body.newMsgFrequency);
    SuccessResponse.data = updated;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.error("Error updating msg frequency:", error);
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
};

module.exports = MsgFrequencyController;
