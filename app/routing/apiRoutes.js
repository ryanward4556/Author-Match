// Your apiRoutes.js file should contain two routes:
var express = require("express");
var app = module.exports = express();
var path = require("path");
var friendsList = require("../data/friends.js");

app.get("/api/friends", function (req, res) {
    return res.json(friendsList);
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    console.log(newFriend);

    friendsList.push(newFriend);
    res.json(newFriend);
});

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.