const express = require('express');

require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');

const app = express();


const _id = '5fab1d041a8db33380de4614';
const main = async () => {
  try {
    const review = new Review({
      content: 'wasd',
      cleanliness: 5,
      accuracy: 5,
      communication: 5,
      location: 5,
      'check-in': 4,
      username: 'bob',
      value: 5,
    });
    const result = await review.save();
    console.log(result);

    const comment = new Comment({
      username: 'comment username',
      content: 'this is some content',
      review: '5fab1d041a8db33380de4614',
    });

    await comment.save();
  } catch (e) {
    console.log(e);
  }

};
// main();
const main2 = async () => {
  try {
    const comments = await Comment.find();
    const data = await comments[0].populate('review').execPopulate();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
main2();
module.exports = app;