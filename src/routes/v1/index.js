const express = require("express");

const { signin } = require("../../controllers/admin-controller");
const { createUser, DeleteUser } = require("../../controllers/user-controller");
const MsgFrequencyController = require("../../controllers/msg-frequency-controller");

const {
    updateWeatherApiKeysController,
} = require("../../controllers/weather-api-key-controller");

const {WeatherApivalidateAuthRequest} = require("../../middlewares/weather-middleware")

const {
  updateBotApiKeysController
} = require("../../controllers/bot-api-key-controller");

const {
  validateAuthRequest,
  checkAuth,
} = require("../../middlewares/auth-request-middleware");

const router = express.Router();

router.post("/users", checkAuth, createUser);

router.delete("/user", checkAuth, DeleteUser);

router.post("/weatherapikey", WeatherApivalidateAuthRequest,checkAuth, updateWeatherApiKeysController);

router.post("/botapikey", checkAuth, updateBotApiKeysController);

router.post("/msgfrequency", checkAuth, MsgFrequencyController);

router.post("/signin", validateAuthRequest, signin);

module.exports = router;
