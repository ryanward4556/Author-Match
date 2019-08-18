var express = require("express");
var app = module.exports = express();
var path = require("path");

// A GET Route to / which should display the home page as a catch all.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// A GET Route to /survey which should display the survey page.
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});





