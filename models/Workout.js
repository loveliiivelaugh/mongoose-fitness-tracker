const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day:{
    type: Date,
    default: new Date()
  },
  exercises: [
    {
      name: {
        type: String
      },
      type: {
        type: String,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      weight: {
        type: Number
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
