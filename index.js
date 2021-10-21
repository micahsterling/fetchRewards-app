const users = require('./user');
// const User = require('./user');
const payer = require('./payer');
const express = require('express');
const app = express();
// const EventEmitter = require('events');


app.get('/', (req, res) => {
  res.send('hello world!!!');
});

app.get('/api/users', (rep,res) => {
  res.send(users);
});

app.get('/api/payer', (rep,res) => {
  res.send(payer);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Users Id was not found');
  res.send(user);
});

app.post('/api/courses',(req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(users);
  res.send(user);
});

app.put('/api/users/:id', (req,res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Users Id was not found');

  user.points = req.body.points;
  res.send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



// const user = new User();
// // Register a listener
// user.on('pointsRecieved', (arg) => {
//   console.log('points updated',arg);
// });
// user.on('pointsSubtracted', (arg) => {
//   console.log('points updated',arg);
// });

// user.points('points recieved');