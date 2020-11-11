require('../mongoose');
const mongoose = require('mongoose');
const faker = require('faker');
const getChanceRating = require('./getChanceRating');


const JohnPFP = 'https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg';

const Review = require('../review');
const Comment = require('../comment');
const determineIfShouldComment = require('./determineIfShouldComment');

const reviews = [];
for (let i = 1; i <= 100; i++) {

  const review = {
    _id: mongoose.Types.ObjectId(),
    content: faker.lorem.paragraph(),
    cleanliness: getChanceRating(),
    accuracy: getChanceRating(),
    communication: getChanceRating(),
    location: getChanceRating(),
    'check-in': getChanceRating(),
    username: faker.name.firstName(),
    value: getChanceRating(),
  };
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
    username: 'John'
  };
  comments.push(comment);
}


(async () => {
  const dbReviews = await Review.insertMany(reviews);
  const dbComments = await Comment.insertMany(comments);

  const reviews2 = await Review.find();
  const possibleComments = await reviews2[2].populate('comments').execPopulate();
  console.log(possibleComments);
})();



