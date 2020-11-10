const mongoose = require('mongoose');
const wholeNumBetween05 = require('./utils/wholeNumBetween05');


const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  cleanliness: {
    type: Number,
    validate: wholeNumBetween05,
    required: true
  },
  accuracy: {
    type: Number,
    validate: wholeNumBetween05,
    required: true
  },
  communication: {
    type: Number,
    validate: wholeNumBetween05,
    required: true
  },
  location: {
    type: Number,
    validate: wholeNumBetween05,
    required: true
  },
  'check-in': {
    type: Number,
    validate: wholeNumBetween05,
    required: true
  },
  value: {
    type: Number,
    validate: wholeNumBetween05,
    required: true
  }
}, {
  timestamps: true
});

reviewSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'review',
  localField: '_id'
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;