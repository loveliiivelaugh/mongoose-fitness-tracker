const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const Workout = require("./models/Workout");


const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout ", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// app.use(require('./controllers'));

app.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/stats', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/stats.html')));

app.get('/exercise', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/exercise.html')));

app.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then(data => res.status(200).json(data))
    .catch(error => console.error(error));
});

app.put('/api/workouts/:id', async ({ body, params }, res) => {
  
  const workout = await Workout.find({ _id: params.id });
  let total = 0;
  workout[0].exercises.forEach(({ duration }) => total += duration);

  Workout.findByIdAndUpdate(params.id, { 
    $push: { exercises: body }, 
    $set: { 
      totalDuration: body.duration > total ? body.duration : total 
    }})
    .then(workout => res.status(200).json(workout))
    .catch(error => console.error(error));
});

app.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then(data => res.status(200).json(data))
    .catch(error => console.error(error))
});

app.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .then(data => res.status(200).json(data))
    .catch(error => console.error(error));
});

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));