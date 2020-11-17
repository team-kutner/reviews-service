const mongoose = require('mongoose');
const wholeNumBetween05 = require('./utils/wholeNumBetween05');


const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  home: {
    type: String,
    required: true
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
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    required: true
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

reviewSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'review'
});
// userSchema.virtual('tasks', {
//   ref: 'Task',
//   foreignField: 'owner',
//   localField: '_id'
// })


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;