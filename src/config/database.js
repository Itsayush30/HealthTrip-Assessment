const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/tele_bot_ht");
};

module.exports = connect;