const { internet } = require('faker');
const setupSeed = require('./utils/setupSeed');
const Comment = require('../../db/comment');
const Review = require('../../db/review');
const User = require('../../db/user');
const seedParts = require('../../db/utils/seed');

beforeEach(setupSeed);



it('should create 100 reviews and 51 comments', async () => {
  const reviews = await Review.find();
  const comments = await Comment.find();

  expect(reviews.length).toBe(100);
  expect(comments.length).toBe(51);
});

it('author of all comments should be Kaladin', async () => {
  const homeOwnerId = seedParts.homeOwner._id;

  const comments = await Comment.find();
  const homeOwnerWithComments = await seedParts.homeOwner.populate('comments').execPopulate();

  expect(homeOwnerWithComments.comments.length).toBe(comments.length);
});

it('comments should be in the same month and year as their reviews', async () => {
  const comments = await Comment.find();
  for (const comment of comments) {
    const withReview = await comments[0].populate('review').execPopulate();
    expect(new Date(withReview.createdAt).valueOf()).toBe(new Date(withReview.review.createdAt).valueOf());
  }
});
