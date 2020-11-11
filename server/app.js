const express = require('express');

require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');
const User = require('../db/user');
const initSeed = require('../db/initSeed');
const aggregateReviewStars = require('./utils/aggregateReviewStars');



const app = express();

app.get('/api/reviews', async (req, res) => {
  try {
    const {homeOwner, users, reviews, comments} = await initSeed();
    const result = aggregateReviewStars(reviews);

    res.send(result);
  } catch (e) {
    console.log(e, 'errrrr');
  }

});

module.exports = app;