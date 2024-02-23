const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { data } = require("../utils/common/error-response");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      console.log(data);
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
