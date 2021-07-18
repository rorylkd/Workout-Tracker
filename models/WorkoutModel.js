var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: Date, required: true },
  exercises: [
    {
      type: { 
          type: String, 
          required: true },
      name: { 
          type: String, 
          required: true },
      duration: { 
          type: Number, 
          required: true, 
          minProperties: 0 },
      weight: { 
          type: Number, 
          required: true, 
          minProperties: 0 },
      reps: { 
          type: Number, 
          required: true, 
          minProperties: 0 },
      sets: { 
          type: Number, 
          required: true, 
          minProperties: 0 },
    },
  ],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
