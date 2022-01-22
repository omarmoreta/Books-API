const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

module.exports.Books = require("./books");
