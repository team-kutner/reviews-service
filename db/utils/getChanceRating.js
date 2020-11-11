const randomInclusive = require('./randomInclusive');


module.exports = () => {
  const rand = randomInclusive(1, 100);
  let rating;

  if (rand >= 70) {
    if (rand < 90) {
      rating = 3;
    } else {
      rating = 2;
    }
  } else {
    if (rand <= 35) {
      rating = 4;
    } else {
      rating = 5;
    }
  }

  return rating;
};