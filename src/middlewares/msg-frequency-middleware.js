const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function newMsgFrequencyvalidateAuthRequest(req, res, next) {
  //console.log("middleware1")
  if (!req.body.newMsgFrequency) {
    //console.log("middleware2",ErrorResponse)
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      ["newMsgFrequency not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = newMsgFrequencyvalidateAuthRequest;
