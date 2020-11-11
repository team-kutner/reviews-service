require('../mongoose');
const faker = require('faker');
const getChanceRating = require('./getChanceRating');

const Review = require('../review');
const Comment = require('../comment');

const reviews = [];
for (let i = 1; i <= 100; i++) {

  let review = {
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
console.log(reviews);



