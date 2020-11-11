const { internet } = require('faker');
const Comment = require('../../db/comment');
const Review = require('../../db/review');
const User = require('../../db/user');
const seedParts = require('../../db/utils/seed');
const clearDB = require('../utils/clearDB');

beforeEach(clearDB);

it('DB should have a clear state', async () => {
  const users = await User.find();
  const reviews = await Review.find();
  const comments = await Comment.find();

  expect(users.length).toBe(0);
  expect(reviews.length).toBe(0);
  expect(comments.length).toBe(0);

});

it('should create 100 reviews and 51 comments', async () => {
  const reviews = await Review.insertMany(seedParts.reviews);
  const comments = await Comment.insertMany(seedParts.comments);

  expect(reviews.length).toBe(100);
  expect(comments.length).toBe(51);
});

it('author of all comments should be Kaladin', async () => {
  const kalId = seedParts.homeOwnerKal._id;
  const reviews = await Review.insertMany(seedParts.reviews);
  const comments = await Comment.insertMany(seedParts.comments);

  expect(comments.every((comment) => comment.author === kalId)).toBe(true);
  const kalWithComments = await seedParts.homeOwnerKal.populate('comments').execPopulate();
  expect(kalWithComments.comments.length).toBe(51);
});
