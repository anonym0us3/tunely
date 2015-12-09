var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var taco = require("./album.js");
var Artist = require("./artist.js");

module.exports = {Album: taco, Artist: Artist}