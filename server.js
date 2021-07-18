const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;

const Workout = require('./models/WorkoutModel');
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutTrackerDB", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});