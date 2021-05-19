const path = require('path');
const express = require('express');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/<name-goes-here>", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/stats', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/stats.html')));

app.get('/exercise', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/exercise.html')));

app.use(require('./controllers'));

app.listen(PORT, () => console.log('Now listening'));