
const EventEmitter = require('events');


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
// var target = 5000;
// function spendPoints(req, res, next) {
//   console.log("target",target);
//   target = 6000;
//   console.log("new target",target);
//   next();
// }


module.exports = users, totals, deductions, transaction ;
// module.exports.target = target;


