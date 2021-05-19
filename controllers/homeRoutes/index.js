const router = require('express').Router();


//This is the route to render the home page => '/'
router.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, '../../index.html')));

router.get('/stats', async (req, res) => 
  res.sendFile(path.join(__dirname, '../../stats.html')));

router.get('/exercise', async (req, res) => 
  res.sendFile(path.join(__dirname, '../../excercise.html')));


module.exports = router;
