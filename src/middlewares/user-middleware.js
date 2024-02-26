const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function CreateUserValidateAuthRequest(req, res, next) {
    //console.log("middleware1")
    if (!req.body.name) {
      //console.log("middleware2",ErrorResponse)
      ErrorResponse.message = "Something went wrong";
      ErrorResponse.error = new AppError(
        ["name not found in the incoming request in the correct form"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.city) {
        //console.log("middleware2",ErrorResponse)
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
          ["city not found in the incoming request in the correct form"],
          StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
      }
      if (!req.body.country) {
        //console.log("middleware2",ErrorResponse)
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
          ["country not found in the incoming request in the correct form"],
          StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
      }
      if (!req.body.telegramId) {
        //console.log("middleware2",ErrorResponse)
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError(
          ["telegramId not found in the incoming request in the correct form"],
          StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
      }
    next();
  }

function DeleteUserValidateAuthRequest(req, res, next) {
  //console.log("middleware1")
  if (!req.body.id) {
    //console.log("middleware2",ErrorResponse)
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      ["id not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}


module.exports = {
    DeleteUserValidateAuthRequest,
    CreateUserValidateAuthRequest
};
