const express = require('express');
const cors = require('cors');
require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');
const User = require('../db/user');
const initSeed = require('../db/initSeed');
const aggregateReviewStars = require('./utils/aggregateReviewStars');
const path = require('path')


const app = express();
app.use(cors());
app.use(express.static(path.resolve('public')))

//refactor this later so the seed script doesn't always delete what's in there
//have it check to make sure the home being searched for has reviews;
//  if it does have reviews, return and format those.
//  if it doesn't, then go ahead and generate new ones and format and return those.
app.get('/homes/:id', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'))
})
app.get('/api/homes/:id/reviews', async (req, res) => {
  const {id} = req.params
  console.log('homeId ', id)

  try {
    let reviews;

    reviews = await Review.find({home: id})
    if (!reviews.length) {
      const {homeOwner, users, reviews:seedReviews, comments} = await initSeed(id, false);
      reviews = seedReviews
    }

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