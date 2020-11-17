const mongoose = require('mongoose');
const wholeNumBetween05 = require('./utils/wholeNumBetween05');


const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    required: true
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

userSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'author',
  localField: '_id'
});
userSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'author',
  localField: '_id'
});

const User = mongoose.model('User', userSchema);
module.exports = User;