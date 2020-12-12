const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const seedTools = require('../db/utils/seed.js');
require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');
const User = require('../db/user');
const postgres = require('../db/postgres/connection.js')
const initSeed = require('../db/initSeed');
const aggregateReviewStars = require('./utils/aggregateReviewStars');
const path = require('path')


const app = express();
app.use(cors());
app.use(bodyParser());
app.use(express.static(path.resolve('public')));

//refactor this later so the seed script doesn't always delete what's in there
//have it check to make sure the home being searched for has reviews;
//  if it does have reviews, return and format those.
//  if it doesn't, then go ahead and generate new ones and format and return those.

app.get('/homes/:id', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'))
})

app.get('/api/homes/:id/reviews', async (req, res) => {
  const { id } = req.params
  console.log('homeId ', id)
  try {
    let home = await postgres.getHomes(id);
    res.send(home).status(200);
  } catch {
    res.sendStatus(404);
    console.log('oof');
  }
  // try {
  //   let reviews;

  //   reviews = await Review.find({ home: id })

  //   const ratings = aggregateReviewStars(reviews);

  //   for (const review of reviews) {
  //     await review.populate('comments').execPopulate()
  //     // reviewsWithComments.push(await review.populate('comments').execPopulate());
  //     await review.populate('author').execPopulate()
  //     if (!review.comments.length) continue
  //     review.comments[0].populate('author').execPopulate()
  //   }

  //   reviews.sort((a, b) => new Date(a.createdAt).valueOf() > new Date(b.createdAt).valueOf() ? -1 : 1);

  //   res.send({ ratings, reviewsWithComments: reviews });
  // } catch (e) {
  //   console.log(e, 'errrrr');
  // }

});

// add a review and comments to the database
app.post('/api/homes/reviews', (req, res) => {
  try {
    let post = postgres.addReview(req.body, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success');
      }
    });
    console.log(post);
  } catch(err) {
    console.log(err)
  }
})

// add a home to the database
app.post('/api/homes', (req, res) => {
  console.log(req.body);
  try {
    let post = postgres.addHome(req.body, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success');
      }
    });
    console.log(post);
  } catch {
    console.log('ugh');
  }
})

// updates content of review in the database
app.put('/api/homes/:homeid/reviews/:id', (req, res) => {
  const { id } = req.params;
  const { homeid } = req.params;
  try {
    let post = postgres.updateReview(id, req.body, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success');
      }
    });
    console.log(post);
  } catch {
    console.log('ugh');
  }
});

// deletes a review and comments from the database
app.delete('/api/homes/:homeid/reviews/:id', async (req, res) => {
  const { id } = req.params;
  const { homeid } = req.params;
  try {
    let post = postgres.deleteReview(id, req.body, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success');
      }
    });
    console.log(post);
  } catch {
    console.log('ugh');
  }
});

// deletes a home and reviews/comments from the database
app.delete('/api/homes/:homeid', async (req, res) => {
  const { homeid } = req.params;
  try {
    let post = postgres.deleteHome(homeid, req.body, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success');
      }
    });
    console.log(post);
  } catch {
    console.log('ugh');
  }
});

app.get('/hello', (req, res) => res.send('hello world'));

module.exports = app;