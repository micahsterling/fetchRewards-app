const express = require('express');
const app = express();
const EventEmitter = require('events');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/users', (rep,res) => {
  res.send([1,2,3]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));

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