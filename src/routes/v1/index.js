const express = require("express");

const createUser = require("../../controllers/user-controller");
const MsgFrequencyController = require("../../controllers/msg-frequency-controller");
const {
  updateApiKeysController,
} = require("../../controllers/api-key-controller");

const router = express.Router();

router.post("/users", createUser);

router.post("/apikey", updateApiKeysController);

router.post("/msgfrequency", MsgFrequencyController);

module.exports = router;
