var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({

});

var Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;