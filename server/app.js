const express = require('express');

require('../db/mongoose');
const Review = require('../db/review');
const Comment = require('../db/comment');
const User = require('../db/user');

const app = express();

module.exports = app;