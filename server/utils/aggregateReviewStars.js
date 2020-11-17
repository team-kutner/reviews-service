const roundOnFirstDecimal = require('./roundOnFirstDecimal');

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
  console.log(reviewStats);

  const desiredOutput = {}
  desiredOutput.Cleanliness = roundOnFirstDecimal(reviewStats.cleanliness / 100);
  desiredOutput.Accuracy = roundOnFirstDecimal(reviewStats.accuracy / 100);
  desiredOutput.Communication = roundOnFirstDecimal(reviewStats.communication / 100);
  desiredOutput['Check-in'] = roundOnFirstDecimal(reviewStats['check-in'] / 100);
  desiredOutput.Value = roundOnFirstDecimal(reviewStats.value / 100);
  desiredOutput.Location = roundOnFirstDecimal(reviewStats.location / 100);

  return desiredOutput;
};