const { internet } = require('faker');
const Comment = require('../../db/comment');
const initSeed = require('../../db/initSeed');
const Review = require('../../db/review');
const User = require('../../db/user');
const seedParts = require('../../db/utils/seed');

beforeEach(initSeed);



it('should create 100 reviews and 51 comments', async () => {
  const reviews = await Review.find();
  const comments = await Comment.find();

  expect(reviews.length).toBe(100);
  expect(comments.length).toBe(52);
});

it('author of all comments should be the same user', async () => {

  const comments = await Comment.find();
  const sameAuthor = comments.every((comment) => comment.author.toString() === comments[0].author.toString());
  expect(sameAuthor).toBe(true);
});

it('comments should be in the same month and year as their reviews', async () => {
  const comments = await Comment.find();
  for (const comment of comments) {
    const withReview = await comments[0].populate('review').execPopulate();
    expect(new Date(withReview.createdAt).valueOf()).toBe(new Date(withReview.review.createdAt).valueOf());
  }
});
