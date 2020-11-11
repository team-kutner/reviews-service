const roundOnFirstDecimal = require("./roundOnFirstDecimal");

module.exports = (reviews) => {
  let reviewStats = reviews.reduce((acc, curr) => {
    acc.cleanliness += curr.cleanliness;
    acc.accuracy += curr.accuracy;
    acc.communication += curr.communication;
    acc.location += curr.location;
    acc['check-in'] += curr['check-in'];
    acc.value += curr.value;
    return acc;
  }, {
    cleanliness: 0,
    accuracy: 0,
    communication: 0,
    location: 0,
    'check-in': 0,
    value: 0,
  });

  reviewStats.cleanliness = roundOnFirstDecimal(reviewStats.cleanliness / 100);
  reviewStats.accuracy = roundOnFirstDecimal(reviewStats.accuracy / 100);
  reviewStats.communication = roundOnFirstDecimal(reviewStats.communication / 100);
  reviewStats['check-in'] = roundOnFirstDecimal(reviewStats['check-in'] / 100);
  reviewStats.value = roundOnFirstDecimal(reviewStats.value / 100);
  reviewStats.location = roundOnFirstDecimal(reviewStats.location / 100);

  return reviewStats;
};