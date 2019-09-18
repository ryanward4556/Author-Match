var express = require("express");

// Sets up the Express App
// =============================================================
var app = module.exports = express();
var PORT = process.env.PORT || 3000;

var friends = require("./data/friends");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});


