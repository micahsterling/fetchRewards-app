
const EventEmitter = require('events');

var points = this.points;

class User extends EventEmitter {
  points(pointsRecieved) {
    console.log(pointsRecieved);
    // raised an event 
    this.emit('pointsRecieved', {id: 1, points: 100});
  }
}

module.exports = User;
