const faker = require('faker');
const getChanceRating = require('../utils/getChanceRating');
const randomInclusive = require('../utils/randomInclusive.js')

function generateComments() {
  let i = Math.floor(Math.random() * Math.floor(3));
  let comments = [];
  while (i > 0) {
    comments.push({
      "content": faker.lorem.sentences(),
      "author": {
        "username": faker.internet.userName(),
        "avatar": faker.image.avatar()
      }
    })
    i -= 1;
  }
  return comments;
}

function generateReviews() {
  // let i = Math.floor(Math.random() * Math.floor(5));
  let review = {
    "homeid": Math.floor(Math.random() * Math.floor(10000000)),
    "content": faker.lorem.sentences(),
    "cleanliness": getChanceRating(),
    "accuracy": getChanceRating(),
    "communication": getChanceRating(),
    "location": getChanceRating(),
    "checkIn": getChanceRating(),
    "value": getChanceRating(),
    "author": {
      "username": faker.internet.userName(),
      "avatar": faker.image.avatar()
    },
    "comments": generateComments(),
    "createdAt": new Date(2020, randomInclusive(0, 11))
  }
  review.author = JSON.stringify(review.author);
  review.comments = JSON.stringify(review.comments);
  review.createdAt = JSON.stringify(review.createdAt);
  return review;
}

module.exports = {
  generateReviews
}