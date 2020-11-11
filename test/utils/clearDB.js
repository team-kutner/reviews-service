const Comment = require('../../db/comment');
const Review = require('../../db/review');
const User = require('../../db/user');

require('../../db/mongoose');


module.exports = async () => {
  await Comment.deleteMany();
  await User.deleteMany();
  await Review.deleteMany();
};