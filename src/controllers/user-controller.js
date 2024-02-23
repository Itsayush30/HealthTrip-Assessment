const UserService  = require("../services/user-service");
const userService = new UserService();

const createUser = async (req, res) => {
  try {
    console.log("here")
    const response = await userService.create({
      name: req.body.name,
      city: req.body.city,
      country: req.body.country,
    });

    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something wentt wrong",
      data: {},
      err: error,
    });
  }
};

module.exports = createUser;
