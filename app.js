// app.js
const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./src/routes/itemRoutes");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/todos")    
.then(() => {
console.log('Connected');
})
.catch(err => {
  console.error('App starting error:', err.stack);
  process.exit(1);
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/items", itemRouter);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log("Server is running on port:", port);
});

app.get("/", function(req, res) {
  res.render("index");
});
