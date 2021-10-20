const express = require('express');
const app = express();
const EventEmitter = require('events');

const users = [
  {id:1, name: 'Jack', points: 1000},
  {id:2, name: 'James',points: 2000},
  {id:3, name: 'Jim', points: 3000},
];

app.get('/', (req, res) => {
  res.send('hello world!!!');
});

app.get('/api/users', (rep,res) => {
  res.send(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) res.status(404).send('Users Id was not found');
  res.send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



const User = require('./user');
const user = new User();
// Register a listener
user.on('pointsRecieved', (arg) => {
  console.log('points updated',arg);
});
user.on('pointsSubtracted', (arg) => {
  console.log('points updated',arg);
});

user.points('points recieved');