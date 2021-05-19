const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const workoutRoutes = require('./workoutRoutes')

router.use('/', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;