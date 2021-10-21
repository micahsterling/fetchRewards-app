

const Award = new Date('September 19, 2020 23:15:30 UTC').toJSON();
const date = new Date('November 19, 2020 23:15:30 UTC').toJSON();


const payers = [
  { "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" },
  { "payer": "DANNON", "points": 1000, "timestamp": date},
  { "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" },
  { "payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z" },
  { "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" },
  { "payer": "DANNON", "points": 500, "timestamp": "2020-12-31T15:00:00Z" },
];


function sortPayerName(a,b) { 
  if (a.payer < b.payer) {
    return -1; 
  }
  if (a.payer > b.payer) {
    return 1; 
  }
  if (a.timestamp < b.timestamp) {
    return -1;
  }
  if (a.timestamp > b.timestamp) {
    return 1;
  }
  return 0;
}
payers.sort(sortPayerName);
console.log("name", payers);

let first = "";
for (let i = 0; i < payers.length ;i++) {
  if (!first) {
    first = payers[i];
  } 
  if ( first.payer !== payers[i].payer || first.points === 0) {
    first = payers[i];
  }
  if (payers[i].points < 0) {
    first.points += payers[i].points;
    payers.splice(i, 1);
  }
}
console.log("settling", payers);

function sortPayerDate(a,b) { 
  if (a.timestamp < b.timestamp) {
    return -1; 
  }
  if (a.timestamp > b.timestamp) {
    return 1; 
  }
  return 0;
}
payers.sort(sortPayerDate);
console.log("before",payers);
let counter = 0;
const target = 5000;
let pointDeduction = [];

for (let i = 0; counter < target; i++) {
  if (counter + payers[i].points > target) {
    let diff = target - counter;
    counter += diff;
    pointDeduction.push({"payer": payers[i].payer, "points":-diff}); 
    payers[i].points -= diff;
  } else {
    counter += payers[i].points;
    pointDeduction.push({"payer": payers[i].payer, "points":-payers[i].points});
    payers[i].points -= payers[i].points;
  } 
  
}
console.log("deduct",pointDeduction);
console.log("after purchase", payers);



module.exports.payer = payers;