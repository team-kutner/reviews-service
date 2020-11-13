const Comment = require('./comment');
const Review = require('./review');
const User = require('./user');
let seedParts = require('./utils/seed');
require('mongoose');

const initSeed = async (deleteMany = true) => {
  const homeOwner = seedParts.generateHomeOwner();
  const {reviews, users} = seedParts.generateUsersAndReviews();
  const comments = seedParts.generateComments(homeOwner, reviews);

  if (deleteMany) {
    await User.deleteMany();
    await Comment.deleteMany();
    await Review.deleteMany();
  }

  await User.insertMany(users.concat(homeOwner));
  await Review.insertMany(reviews);
  await Comment.insertMany(comments);
  return {
    users,
    reviews,
    comments,
    homeOwner
  };
};

if (process.argv.includes('--init_seed')) {
  initSeed();
}

module.exports = initSeed;