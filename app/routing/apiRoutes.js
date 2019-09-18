// Your apiRoutes.js file should contain two routes:
var express = require("express");
var app = module.exports = express();
var path = require("path");
var friendsList = require("../data/friends.js");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/authormatch", function (req, res) {
    return res.json(friendsList);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. 
app.post("/api/authormatch", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    for (let i = 0; i < 10; i++) {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
    friendsList.push(newFriend);
    res.json(newFriend);
});