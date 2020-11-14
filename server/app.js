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

//refactor this later so the seed script doesn't always delete what's in there
//have it check to make sure the home being searched for has reviews;
//  if it does have reviews, return and format those.
//  if it doesn't, then go ahead and generate new ones and format and return those.
app.get('/api/reviews', async (req, res) => {
  try {
    const {homeOwner, users, reviews, comments} = await initSeed();

    const ratings = aggregateReviewStars(reviews);

    for (const review of reviews) {
      await review.populate('comments').execPopulate()
      // reviewsWithComments.push(await review.populate('comments').execPopulate());
      await review.populate('author').execPopulate()
      if (!review.comments.length) continue
      review.comments[0].populate('author').execPopulate()
    }


    // for (const review of reviewsWithComments) {

    // }
    // console.log(reviews)
    reviews.sort((a, b) => new Date(a.createdAt).valueOf() > new Date(b.createdAt).valueOf() ? -1 : 1);

    res.send({ratings, reviewsWithComments:reviews});
  } catch (e) {
    console.log(e, 'errrrr');
  }

});

app.get('/hello', (req, res) => res.send('hello world'));

module.exports = app;