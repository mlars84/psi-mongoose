var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');

var app = express();

app.use(bodyParser.json()); // need urlencoded for jquery/json

// connection string: mongodb local, default port, name of our database
mongoose.connect('mongodb://localhost:27017/psiUserDb');

app.post('/user', function (req, res) {
  console.log('in users post ->', req.body);

  var newUser = new User({
    name: req.body.name
  });

  res.sendStatus(200);
});

app.listen(3004, function () {
  console.log('listening on 3004');
});
