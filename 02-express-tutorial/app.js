console.clear();
const express = require('express');
const data = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');
const path = require('path');

const app = express();

app.use(logger);
app.use('/api', authorize);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/api/items', (req, res) => {
  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
