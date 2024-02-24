const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const UserService = require("../services/user-service");
const userService = new UserService();

const createUser = async (req, res) => {
  try {
    const response = await userService.create({
      name: req.body.name,
      city: req.body.city,
      country: req.body.country,
      telegramId: req.body.telegramId,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

module.exports = createUser;
