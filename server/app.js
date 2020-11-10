const express = require('express');

require('../db/mongoose');
const Review = require('../db/review');

const app = express();
const review = new Review({
  content: 'wasd',
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  'check-in': 4,
  value: 5
});

console.log(review);
review.save();


module.exports = app;