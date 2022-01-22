const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

app.use(express.json());
app.use("/books", require("./controllers/books"));

app.get("/", (req, res) => {
  res.send("GET /books");
});

app.get("*", (req, res) => {
  res.send("404, PAGE NOT FOUND");
});

app.listen(PORT);
