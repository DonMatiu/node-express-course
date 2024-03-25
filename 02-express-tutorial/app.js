const express = require('express');
let { people } = require('./data');

const app = express();

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(400).json({ success: false, mes: 'Please provide correct username' });
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send('Please provide credentials...');
  }
  res.status(200).send(`Welcome ${name}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
