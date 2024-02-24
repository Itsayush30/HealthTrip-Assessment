const express = require("express");

const createUser = require("../../controllers/user-controller");
const {
  updateApiKeysController,
} = require("../../controllers/api-key-controller");

const router = express.Router();

router.post("/users", createUser);

router.post("/apikey", updateApiKeysController);

module.exports = router;
