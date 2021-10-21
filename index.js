const users = require('./user');
const path = require('path');
// const User = require('./user');
const {payerTotals, pointDeduction, transaction } = require('./payer');
const express = require('express');
const app = express();
// const EventEmitter = require('events');
express.static("public");

console.log("PAYER!!!!!",payerTotals);
// app.get('/', (req, res) => {
//   res.send('<p>hello world!!!</p>');
// });

app.get('/user.js', (req,res) => {
  res.sendFile(path.join(__dirname, 'user.js'));
});

app.get('/', (req, res,next)=>{
  // res.send('<form action="/test/post-username" method="POST"> <input type="text" name="username">    <button type="submit"> Send </button> </form>'); res.sendFile(path.join(__dirname, 'views', 'add-   user.html'));
  res.sendFile(path.join(__dirname, 'user.html'));
  console.log('Request Type:', req.method);
  next();
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