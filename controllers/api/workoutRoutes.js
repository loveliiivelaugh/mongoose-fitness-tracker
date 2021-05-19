const router = require('express').Router();
const Workout = require("../../models/Workout");

router.get('/', (req, res) => {
  Workout.find({})
    .then(data => res.status(200).json(data))
    .catch(error => console.error(error));
});

router.put('/:id', (req, res) => {
  console.log(req.body);
  Workout.update({ _id: mongojs.ObjectId(req.params.id)}, req.body, (error, data) => {
    error ? console.error(error) : res.status(200).json(data);
  });
});

router.post('/', ({ body }, res) => {

  console.log(body);
  Workout.create(body)
    .then(data => res.status(200).json(data))
    .catch(error => console.error(error))

});

router.get('/range', (req, res) => {
  Workout.find({}, (req, res) => {
    error ? console.error(error) : res.status(200).json(data);
  });
});

module.exports = router;