
const EventEmitter = require('events');

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