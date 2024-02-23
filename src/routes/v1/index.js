const express = require("express");

const createUser = require("../../controllers/user-controller");

const router = express.Router();

router.post("/users", createUser);

module.exports = router;
