// Create web server
// Run: node comments.js
// Verify: http://localhost:3000/comments
// Verify: http://localhost:3000/comments/1

var express = require('express');
var app = express();
var port = 3000;

app.get('/comments', function(req, res) {
  res.send('Comments');
});

app.get('/comments/:id', function(req, res) {
  res.send('Comment ' + req.params.id);
});

app.listen(port, function() {
  console.log('Server running at http://localhost:' + port);
});