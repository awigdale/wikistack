const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db } = require('./models');
const app = express();

app.get('/', (req, res) => {
  res.send(layout(' '));
})

db.authenticate().
then(() => {
  console.log('connected to database');
})

app.listen(3000, () => {
  console.log('App listening on port 3000');
})
