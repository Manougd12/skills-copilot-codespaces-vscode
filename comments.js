// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments.getAll());
});

// Get comment by ID
app.get('/comments/:id', function(req, res) {
  res.json(comments.get(req.params.id));
});

// Create comment
app.post('/comments', function(req, res) {
  const comment = comments.create(req.body.comment);
  res.json(comment);
});

// Update comment
app.put('/comments/:id', function(req, res) {
  const comment = comments.update(req.params.id, req.body.comment);
  res.json(comment);
});

// Delete comment
app.delete('/comments/:id', function(req, res) {
  const comment = comments.delete(req.params.id);
  res.json(comment);
});

// Start web server
app.listen(port, function() {
  console.log(`Comments server listening on port ${port}!`);
});