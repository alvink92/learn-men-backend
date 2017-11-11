// app.js
const express = require("express");

const app = express();
app.use(express.static("public"));

const port = 3000;

app.listen(port, function() {
  console.log("Server is running on port:", port);
});

app.get("/", function(req, res) {
  res.send("Hello Express");
});
