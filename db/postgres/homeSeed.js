const faker = require('faker');
const fs = require('fs');
const fakeReviews = require('./fakeData.js');

const writeReviews = fs.createWriteStream('db/postgres/homes.csv');
writeReviews.write('homeid\n', 'utf8');

function writeTenMillionHomes(writer, encoding, callback) {
  let i = 10000000;
  let homeID = 0;
  let start = new Date();
  console.log('started at: ', start);
  function write() {
    let ok = true;
    do {
      i -= 1;
      homeID += 1;
      let data = `${homeID}\n`;
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

writeTenMillionHomes(writeReviews, 'utf-8', () => {
  writeReviews.end();
});