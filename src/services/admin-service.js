const { StatusCodes } = require("http-status-codes");
const AdminRepository = require("../repositories/admin-repository");
const AppError = require("../utils/errors/app-error");
const { Auth } = require("../utils/common/auth");
const { checkPassword,createToken } = require("../utils/common/auth");


class AdminService {
  constructor() {
    this.adminRepository = new AdminRepository();
  }

  async signin(data) {
    try {
      const admin = await this.adminRepository.getUserByEmail(data.email);
      if (!admin) {
        throw new AppError(
          "No admin found for the given email",
          StatusCodes.NOT_FOUND
        );
      }
      const passwordMatch = checkPassword(data.password, admin.password);
      console.log("passwordMatch", passwordMatch);
      if (!passwordMatch) {
        throw new AppError("Invalid Password", StatusCodes.BAD_REQUEST);
      }
      const jwt = createToken({ id: admin.id, email: admin.email });
      return jwt;
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.log(error);
      throw new AppError(
        "Something went wrong",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = AdminService;
