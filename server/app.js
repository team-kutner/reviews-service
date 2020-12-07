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

app.post('/api/homes/reviews', (req, res) => {
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

// posts a user to the database
app.post('/api/homes/users', async (req, res) => {
  // let user = await seedTools.generateHomeOwner(req.body.username, req.body.avatar);
  // // console.log(user);
  // user.save((err, data) => {
  //   if (err) { return next(err) };
  //   console.log('success');
  //   res.status(201);
  //   res.end();
  // })
});

// posts a review to the database
app.post('/api/homes/reviews', async (req, res) => {
  let review = await seedTools.generateReview(req.body);
  review.save((err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(201);
    res.end();
  })
});

// posts a comment to the database
app.post('/api/homes/comments', async (req, res) => {
  console.log(req.body);
  let comment = await seedTools.generateComment(req.body);
  comment.save((err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(201);
    res.end();
  })
});

// updates a user in the database
app.put('/api/homes/:id/users', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  User.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(201);
    res.end();
  });
});

// updates a review in the database
app.put('/api/homes/:id/reviews', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  Review.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(201);
    res.end();
  });
});

// updates a comment in the database
app.put('/api/homes/:id/comments', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  Comment.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(201);
    res.end();
  });
});

// deletes a comment from the database
app.delete('/api/homes/:id/comments', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  Comment.remove({_id: id}, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(200);
    res.end();
  });
});

// deletes a review and all comments
app.delete('/api/homes/:id/reviews', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  Comment.remove({review: id}, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(200);
    res.end();
  });
  Review.remove({_id: id}, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(200);
    res.end();
  });
});

// deletes a user, all reviews, and all comments
app.delete('/api/homes/:id/users', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  Comment.remove({author: id}, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(200);
    res.end();
  });
  Review.remove({author: id}, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(200);
    res.end();
  });
  User.remove({_id: id}, (err, data) => {
    if (err) { return next(err); };
    console.log('success');
    res.status(200);
    res.end();
  });
});

app.get('/hello', (req, res) => res.send('hello world'));

module.exports = app;