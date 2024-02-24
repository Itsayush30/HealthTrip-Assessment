const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const  AdminService  = require("../services/admin-service");
const adminService = new AdminService();


async function signin(req, res) {
  try {
    const admin = await adminService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = admin;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  signin,
};
