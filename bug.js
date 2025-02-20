const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found'); // This is where the error is likely to occur
  }
  res.send(userData);
});