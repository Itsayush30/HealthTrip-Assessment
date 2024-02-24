const express = require("express");

const { createUser, DeleteUser } = require("../../controllers/user-controller");
const MsgFrequencyController = require("../../controllers/msg-frequency-controller");
const {
  updateApiKeysController,
} = require("../../controllers/api-key-controller");

const router = express.Router();

router.post("/users", createUser);

router.delete("/user", DeleteUser);

router.post("/apikey", updateApiKeysController);

router.post("/msgfrequency", MsgFrequencyController);

module.exports = router;
