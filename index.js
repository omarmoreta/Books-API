const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const cors = require("cors");

mongoose.connect(MONGO_URI);

app.use(express.json());
app.use("/books", require("./controllers/books"));
app.use(cors());

app.get("/books/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});

app.get("*", (req, res) => {
  res.send("404, PAGE NOT FOUND");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
