// app.js
const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./src/routes/itemRoutes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/items", itemRouter);

app.listen(port, function() {
  console.log("Server is running on port:", port);
});

app.get("/", function(req, res) {
  res.render("index");
});
