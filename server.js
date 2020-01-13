"use strict";

var express = require("express");
var app = express();

var cors = require("cors");

const {isFizzBuzz, isInteger} = require('./isFizzBuzz');

app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.route("/").get(function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.route("/test/:number?").get(function(req, res) {
   
  if (req.params.number !== undefined) {
        
    if (isInteger(req.params.number)) {
      res.send(isFizzBuzz(req.params.number));
    }
  }
  res.send('Please, be nice and give a number');
});

// 404 Not Found Middleware
app.use(function(req, res, next) {
  res
    .status(404)
    .type("text")
    .send("Not Found");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});