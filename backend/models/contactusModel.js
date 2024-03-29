const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  phone : Number,
  message : String,

  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);
module.exports = model;
