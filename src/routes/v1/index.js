const express = require("express");

const signin = require("../../controllers/admin-controller");

const MsgFrequencyController = require("../../controllers/msg-frequency-controller");
const newMsgFrequencyvalidateAuthRequest = require("../../middlewares/msg-frequency-middleware");
const updateWeatherApiKeysController = require("../../controllers/weather-api-key-controller");
const WeatherApivalidateAuthRequest = require("../../middlewares/weather-middleware");
const updateBotApiKeysController = require("../../controllers/bot-api-key-controller");
const BotApivalidateAuthRequest = require("../../middlewares/bot-api-key-middleware");
const { createUser, DeleteUser } = require("../../controllers/user-controller");

const {
  DeleteUserValidateAuthRequest,
  CreateUserValidateAuthRequest,
} = require("../../middlewares/user-middleware");

const {
  validateAuthRequest,
  checkAuth,
} = require("../../middlewares/auth-request-middleware");

const router = express.Router();

// /api/v1/users POST
router.post("/users", CreateUserValidateAuthRequest, checkAuth, createUser);

// /api/v1/weatherapikey POST
router.post("/weatherapikey",WeatherApivalidateAuthRequest,checkAuth,updateWeatherApiKeysController);

// /api/v1/botapikey POST
router.post("/botapikey",BotApivalidateAuthRequest,checkAuth,updateBotApiKeysController);

// /api/v1/msgfrequency POST
router.post(
  "/msgfrequency",
  newMsgFrequencyvalidateAuthRequest,
  checkAuth,
  MsgFrequencyController
);

// /api/v1//signin POST
router.post("/signin", validateAuthRequest, signin);

// /api/v1/user DELETE
router.delete("/user", DeleteUserValidateAuthRequest, checkAuth, DeleteUser);

module.exports = router;
