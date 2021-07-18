var db = require('../models');

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
      db.Workout.find({}).then(function(dbWorkouts) {
        res.json(dbWorkouts);
      });
    });
  
    app.get("/api/workouts/:id", function(req, res) {
      db.Workout.findById(req.params.id).then(function(dbWorkouts) {
        res.json(dbWorkouts);
      });
    });
  
  
    app.put("/api/images/:id", function(req, res) {
      db.Workout.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkouts) {
        res.json(dbWorkouts);
      });
    });
  };
