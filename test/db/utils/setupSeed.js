const Comment = require('../../../db/comment');
const Review = require('../../../db/review');
const User = require('../../../db/user');
const seedParts = require('../../../db/utils/seed');


require('../../../db/mongoose');


module.exports = async () => {
  await User.deleteMany();
  await Comment.deleteMany();
  await Review.deleteMany();
  await User.insertMany(seedParts.users.concat(seedParts.homeOwner));
  await Review.insertMany(seedParts.reviews);
  await Comment.insertMany(seedParts.comments);
};