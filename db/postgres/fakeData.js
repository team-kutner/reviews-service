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
  let i = 3;
  let reviews = [];
  while (i > 0) {
    let review = {
      "content": faker.lorem.sentences(),
      "cleanliness": getChanceRating(),
      "accuracy": getChanceRating(),
      "location": getChanceRating(),
      "check-in": getChanceRating(),
      "value": getChanceRating(),
      "createdAt": new Date(2020, randomInclusive(0, 11)),
      "__v": 0,
      "author": {
        "username": faker.internet.userName(),
        "avatar": faker.image.avatar()
      },
      "comments": generateComments()
    }
    reviews.push(JSON.stringify(review))
    i -= 1;
  }
  let fakeData = [];
  reviews.forEach((review) => {
    fakeData.push(JSON.stringify(review));
  })
  return fakeData;
}

let commentArray = generateComments();
console.log(commentArray);

module.exports = {
  generateReviews
}