const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  features: Array,
  price: Number,
  createdAt: Date,
});

const model = mongoose.model("equipment", schema);
module.exports = model;
