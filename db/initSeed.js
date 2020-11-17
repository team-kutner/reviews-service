const Comment = require('./comment');
const Review = require('./review');
const User = require('./user');
let seedParts = require('./utils/seed');
require('mongoose');

const initSeed = async (home='5', deleteMany = true) => {
  const homeOwner = seedParts.generateHomeOwner();
  const {reviews, users} = seedParts.generateUsersAndReviews(home);
  const comments = seedParts.generateComments(homeOwner, reviews);

  if (deleteMany) {
    await User.deleteMany();
    await Comment.deleteMany();
    await Review.deleteMany();
  }

  const dbUsers = await User.insertMany(users.concat(homeOwner));
  const dbReviews = await Review.insertMany(reviews);
  const dbComments = await Comment.insertMany(comments);
  return {
    users:dbUsers,
    reviews:dbReviews,
    comments:dbComments,
    homeOwner
  };
};

if (process.argv.includes('--init_seed')) {
  initSeed();
}

module.exports = initSeed;