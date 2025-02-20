const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user data using userId ...
  if (!userData) {
    const error = { 
      status: 404, 
      message: `User with ID ${userId} not found`, 
    };
    return res.status(404).json(error); // Send a JSON error response
  }
  res.json(userData);
});