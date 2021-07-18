var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (dbWorkouts) {

      res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then(function (dbWorkouts) {
      res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
      });
  });

  

  app.get("/api/workouts/:id", function (req, res) {
    db.Workout.findById(req.params.id)
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id }, 
      {$push: {exercises: req.body}})
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
        console.log(req.body);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    db.Workout.create(req)
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
