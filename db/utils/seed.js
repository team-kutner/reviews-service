require('../mongoose');
const mongoose = require('mongoose');
const faker = require('faker');
const getChanceRating = require('./getChanceRating');


const Review = require('../review');
const Comment = require('../comment');
const User = require('../user');
const determineIfShouldComment = require('./determineIfShouldComment');

const kal = new User({username: 'Kal', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg'});

const reviews = [];
const users = [];
for (let i = 1; i <= 100; i++) {
  const user = {
    _id: mongoose.Types.ObjectId(),
    username: faker.name.firstName(),
    avatar: faker.image.avatar()
  };


  const review = {
    _id: mongoose.Types.ObjectId(),
    content: faker.lorem.paragraph(),
    cleanliness: getChanceRating(),
    accuracy: getChanceRating(),
    communication: getChanceRating(),
    location: getChanceRating(),
    'check-in': getChanceRating(),
    value: getChanceRating(),
    author: user._id
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
    author: kal._id
  };
  comments.push(comment);
}


(async () => {
  await kal.save();
  const dbReviews = await Review.insertMany(reviews);
  const dbComments = await Comment.insertMany(comments);

  const reviews2 = await Review.find();
  const possibleComments = await reviews2[2].populate('comments').execPopulate();
  console.log(possibleComments);
})();



