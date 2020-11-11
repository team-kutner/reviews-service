const mongoose = require('mongoose');

//creates new database if notexisting
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

