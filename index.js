var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use(express.static(path.join(__dirname + "/build/css")));
app.use(express.static(path.join(__dirname + "/build/assets")));

app.listen(3000);
