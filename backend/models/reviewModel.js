const mongoose = require("../connection");

const schema = new mongoose.Schema({
  rating: Number,
  text: String,
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  product: { type: mongoose.Types.ObjectId, ref: "equipment" },
  createdAt: Date,
});

const model = mongoose.model("reviews", schema);

module.exports = model;
