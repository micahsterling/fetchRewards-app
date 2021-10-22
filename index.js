const users = require('./user');
const path = require('path');
// const User = require('./user');
const {payerTotals, pointDeduction, transaction, } = require('./payer');
const express = require('express');
const app = express();

express.static("public");


app.get('/user.js', (req,res) => {
  res.sendFile(path.join(__dirname, 'user.js'));
});

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'user.html'));
});

app.get('/api/users', (req,res) => {
  res.send(users);
});

app.get('/api/transaction', (req,res) => {
  res.send(transaction);
});
app.get('/api/payer', (req,res) => {
  res.send(payerTotals);
});

app.get('/api/deduction', (req,res) => {
  res.send(pointDeduction);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Users Id was not found');
  res.send(user);
});

app.use(express.urlencoded({extended: false}));

app.post('/api/transaction',(req, res) => {
  transaction.push(req.body);
  console.log(req.body);
  res.send(transaction);
});

app.put('/api/users/:id', (req,res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Users Id was not found');

  user.points = req.body.points;
  res.send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// var target = 0;
// function computer(rep,res, next) {
//   target = 6000;
//   console.log("new target",target);
//   next();
// }

// const user = new User();
// // Register a listener
// user.on('pointsRecieved', (arg) => {
//   console.log('points updated',arg);
// });
// user.on('pointsSubtracted', (arg) => {
//   console.log('points updated',arg);
// });