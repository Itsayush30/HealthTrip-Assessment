const express = require("express");

const { signin } = require("../../controllers/admin-controller");
const { createUser, DeleteUser } = require("../../controllers/user-controller");
const MsgFrequencyController = require("../../controllers/msg-frequency-controller");

const {
  updateApiKeysController,
} = require("../../controllers/api-key-controller");

const {
  validateAuthRequest,
  checkAuth,
} = require("../../middlewares/auth-request-middleware");

const router = express.Router();

router.post("/users", createUser);

router.delete("/user", DeleteUser);

router.post("/apikey", checkAuth,updateApiKeysController);

router.post("/msgfrequency", MsgFrequencyController);

router.post("/signin", signin);

module.exports = router;
