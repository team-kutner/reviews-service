const express = require('express');

require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');
const User = require('../db/user');

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

const main3 = async () => {
  try {
    const user = new User({username: 'bob', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg'});
    //5fab5fcf70c8044bd3eb2df6 - userId
    const review = new Review({
      content: 'wasd',
      cleanliness: 5,
      accuracy: 5,
      communication: 5,
      location: 5,
      'check-in': 4,
      value: 5,
      author: user._id
    });

    const comment = new Comment({
      content: 'this is some content',
      review: review._id,
      author: user._id
    });

    console.log(user._id, review._id, comment._id);

    await user.save();
    await review.save();
    await comment.save();

  } catch (e) {
    console.log(e);
  }
};

// main3();

const main4 = async () => {
  try {
    const users = await User.find();
    const theirComments = await users[1].populate('comments').execPopulate();
    const theirReviews = await users[1].populate('reviews').execPopulate();
    console.log(theirComments);

  } catch (e) {
  }
};
main4();
module.exports = app;