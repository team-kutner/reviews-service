const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Review'
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

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;