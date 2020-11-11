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
    const ratings = aggregateReviewStars(reviews);
    const dbReviews = await Review.find();
    const reviewsWithComments = [];
    for (const review of dbReviews) {
      reviewsWithComments.push(await review.populate('comments').execPopulate());
    }
    reviewsWithComments.sort((a, b) => new Date(a.createdAt).valueOf() > new Date(b.createdAt).valueOf() ? -1 : 1);

    res.send({ratings, reviewsWithComments});
  } catch (e) {
    console.log(e, 'errrrr');
  }

});

module.exports = app;