const faker = require('faker');
const fs = require('fs');
const fakeReviews = require('./fakeData.js');

const writeReviews = fs.createWriteStream('db/postgres/reviews.csv');
writeReviews.write('homeid|content|cleanliness|accuracy|communication|location|checkIn|value|author|comments|createdAt\n', 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
  let i = 30000000;
  let homeid = 1;
  let reviewCount = 0;
  let start = new Date();
  console.log('started at: ', start);
  function write() {
    let ok = true;
    do {
      if (reviewCount > 2) {
        reviewCount = 0;
        homeid += 1;
      }
      reviewCount += 1;
      i -= 1;
      let review = fakeReviews.generateReviews();
      let data = `${homeid}|${review.content}|${review.cleanliness}|${review.accuracy}|${review.communication}|${review.location}|${review.checkIn}|${review.value}|${review.author}|${review.comments}|${review.createdAt}\n`;
      // let data = JSON.stringify(reviews);
      if (i === 0) {
        let time = new Date();
        var diffMs = (time - start);
        var diffDays = Math.floor(diffMs / 86400000);
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
        console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes and " + (diffMs / 1000) + " seconds to create CSV")
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
});