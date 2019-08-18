// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = module.exports = express();
var PORT = 3000;

var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");
var friends = require("./app/data/friends");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// module.exports = app;
app.use(htmlRoutes);
app.use(apiRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});


