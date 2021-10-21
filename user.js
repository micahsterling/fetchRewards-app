
const EventEmitter = require('events');

var points = this.points;

const users = [
  {id:1, name: 'Jack', points: 1000},
  {id:2, name: 'James',points: 2000},
  {id:3, name: 'Jim', points: 3000},
];
var target = 0;

class UpdateUserPoints extends EventEmitter {
  points(pointsRecieved) {
    console.log(pointsRecieved);
    // raised an event 
    this.emit('pointsRecieved', {id: 1, points: 100});
  }
}

function totals() {
  window.location.href = "/api/payer/";
  console.log("html function");
}
function deductions() {
  window.location.href = "/api/deduction/";
}
function transaction() {
  window.location.href = "/api/transaction/";
}
function computer() {
  target = 6000;
  console.log("new target",target);
}


module.exports = users, totals, deductions, transaction, computer;
module.exports.target = target;
// module.exports.users = users;
// module.exports.totals = totals;
// module.exports.deductions = deductions;
// module.exports.transaction = transaction;

// module.exports = UpdateUserPoints;

