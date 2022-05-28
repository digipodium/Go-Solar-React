const mongoose = require("../connection");

const schema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    features: Array,
    price: String,
    createdAt: String,
});

const model = mongoose.model("equipment", schema);
module.exports = model;