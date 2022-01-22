const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  quantity: Number,
  imageURL: String,
});

module.exports = mongoose.model("Books", booksSchema);
