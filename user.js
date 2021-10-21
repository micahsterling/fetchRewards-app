
const EventEmitter = require('events');

var points = this.points;

const users = [
  {id:1, name: 'Jack', points: 1000},
  {id:2, name: 'James',points: 2000},
  {id:3, name: 'Jim', points: 3000},
];

class UpdateUserPoints extends EventEmitter {
  points(pointsRecieved) {
    console.log(pointsRecieved);
    // raised an event 
    this.emit('pointsRecieved', {id: 1, points: 100});
  }
}




module.exports = users;
// module.exports = UpdateUserPoints;

