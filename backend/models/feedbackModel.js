const mongoose = require("../connection");

const schema = new mongoose.Schema({
  rating: Number,
  text: String,
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  createdAt: Date,
});

const model = mongoose.model("feedback", schema);

module.exports = model;
