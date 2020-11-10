const mongoose = require('mongoose');
const wholeNumBetween05 = require('./utils/wholeNumBetween05');


const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  cleanliness: {
    type: Number,
    validate: wholeNumBetween05
  },
  accuracy: {
    type: Number,
    validate: wholeNumBetween05
  },
  communication: {
    type: Number,
    validate: wholeNumBetween05
  },
  location: {
    type: Number,
    validate: wholeNumBetween05
  },
  'check-in': {
    type: Number,
    validate: wholeNumBetween05
  },
  value: {
    type: Number,
    validate: wholeNumBetween05
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