require('../mongoose');
const mongoose = require('mongoose');
const faker = require('faker');
const getChanceRating = require('./getChanceRating');


const Review = require('../review');
const Comment = require('../comment');
const User = require('../user');
const determineIfShouldComment = require('./determineIfShouldComment');
const randomInclusive = require('./randomInclusive');

const homeOwner = new User({
  _id: mongoose.Types.ObjectId(),
  username: faker.name.firstName(),
  avatar: faker.image.avatar()
});

const reviews = [];
const users = [];
for (let i = 1; i <= 100; i++) {
  const user = {
    _id: mongoose.Types.ObjectId(),
    username: faker.name.firstName(),
    avatar: faker.image.avatar()
  };

  const randomMonth = randomInclusive(0, 11);
  const review = {
    _id: mongoose.Types.ObjectId(),
    content: faker.lorem.paragraph(),
    cleanliness: getChanceRating(),
    accuracy: getChanceRating(),
    communication: getChanceRating(),
    location: getChanceRating(),
    'check-in': getChanceRating(),
    value: getChanceRating(),
    author: user._id,
    createdAt: new Date(2020, randomMonth)
  };
  users.push(user);
  reviews.push(review);
}


const comments = [];
for (let i = 0; i < reviews.length; i++) {
  const review = reviews[i];
  if (!determineIfShouldComment(i)) {
    continue;
  }

  const comment = {
    content: faker.lorem.paragraph(),
    review: review._id,
    author: homeOwner._id,
    createdAt: review.createdAt
  };
  comments.push(comment);
}
module.exports = {
  homeOwner,
  comments,
  reviews,
  users
};

// (async () => {
//   await homeOwner.save();
//   const dbReviews = await Review.insertMany(reviews);
//   const dbComments = await Comment.insertMany(comments);

//   const reviews2 = await Review.find();
//   const possibleComments = await reviews2[2].populate('comments').execPopulate();
//   console.log(possibleComments);
// })();



