// app.js
var express = require('express');
var app = express();
var db = require('./db');


var UserController = require('./UserController');
app.use('/users', UserController);

// test
// app.get('/', function (req, res) {
//         res.send('Hello World');
// });

// app.listen(3000, function () {
//         console.log('Example app listening on port 3000!');
// });

module.exports = app;
