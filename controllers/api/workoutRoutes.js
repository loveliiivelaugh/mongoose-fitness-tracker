const router = require('express').Router();

// const databaseUrl = "<your-database-name>";
// const collections = [];

// const db = mongojs(databseUrl, coollections);

router.get('/', (req, res) => {
  db.workouts.find({}, (error, data) => {
    error ? console.error(error) : res.status(200).json(data);
  });
});

router.put('/:id', (req, res) => {
  console.log(req.body);
  // db.workouts.update({ _id: mongojs.ObjectId(req.params.id) }, req.body, (error, data) => {
  //   error ? console.error(error) : res.status(200).json(data);
  // });
});

router.post('/', ({ body }, res) => {

  console.log(body);
  // db.workouts.insert(body, (error, data) => {
  //   error ? console.error(error) : res.status(200).json(data);
  // });
});

router.get('/range', (req, res) => {
  db.workouts.find({}, (req, res) => {
    error ? console.error(error) : res.status(200).json(data);
  });
});

module.exports = router;