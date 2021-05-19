const path = require('path');
const express = require('express');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 8080;

// const databaseUrl = "<your-database-name>";
// const collections = [];

// const db = mongojs(databseUrl, coollections);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

// app.use(routes);
app.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/stats', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/stats.html')));

app.get('/exercise', async (req, res) => 
  res.sendFile(path.join(__dirname, './public/exercise.html')));



app.listen(PORT, () => console.log('Now listening'));
