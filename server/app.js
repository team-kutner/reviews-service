const express = require('express');
const cors = require('cors');
require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');
const User = require('../db/user');
const initSeed = require('../db/initSeed');
const aggregateReviewStars = require('./utils/aggregateReviewStars');



const app = express();
app.use(cors());

app.get('/api/reviews', async (req, res) => {
  console.log('/api/reviews attempted');
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

app.get('/hello', (req, res) => res.send('hello world'));

module.exports = app;