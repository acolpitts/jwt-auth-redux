"use strict"
var express = require('express');
var app = express();
var path = require('path')

// set the port of our application
var port = process.env.PORT || 8080;

// MIDDLEWARE TO DEFINE STATIC FOLDER
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
  console.log('Magic happens on port ', port)
})