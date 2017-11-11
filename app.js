// app.js
const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(port, function() {
  console.log("Server is running on port:", port);
});

app.get("/", function(req, res) {
  res.send("Hello Express");
});
