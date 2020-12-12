var pg = require('pg');
var connection = {
  user: 'jeremyengland',
  host: 'localhost',
  port: 5432,
  database: 'reviewsandcomments'
}

const client = new pg.Client(connection);
client.connect();

const pool = new pg.Pool(connection);

// get all reviews from the database
let getReviews = async (id) => {
  let res = await client.query(`SELECT * FROM homes INNER JOIN reviews ON homes.id = reviews.homeid WHERE reviews.homeid = ($1);`, [id]);
  return res.rows;
}

// add review to the database
let addReview = async (req, callback) => {
  let review = req;
  review.author = JSON.stringify(review.author);
  review.comments = JSON.stringify(review.comments);
  review.createdat = JSON.stringify(review.createdat);
  let res = await client.query(`INSERT INTO reviews(homeid, content, cleanliness, accuracy, communication, location, checkin, value, author, comments, createdat) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`, [review.homeid, review.content, review.cleanliness, review.accuracy, review.communication, review.location, review.checkin, review.value, review.author, review.comments, review.createdat], (err, data) => {
    callback(err, data);
  });
}

// add a home to the database
let addHome = async (req, callback) => {
  let res = await client.query(`INSERT INTO homes(homeid) VALUES(5);`, (err, data) => {
    callback(err, data);
  });
}

// updates content of a review in database
let updateReview = async (id, req, callback) => {
  let res = await client.query(`UPDATE reviews SET content = ($1) WHERE id = ($2);`, [req.content, id], (err, data) => {
    callback(err, data);
  });
}

// deletes a review from the database
let deleteReview = async (id, req, callback) => {
  let res = await client.query(`DELETE FROM reviews WHERE id = ($1);`, [id], (err, data) => {
    callback(err, data);
  })
}

// deletes a home from the database
let deleteHome = async (id, req, callback) => {
  let dltReviews = await client.query(`DELETE FROM reviews WHERE homeid = ($1);`, [id], (err, data) => {
    if (err) {
      callback(err, data);
    }
  })
  let dltHome = await client.query(`DELETE FROM homes WHERE id = ($1);`, [id], (err, data) => {
      callback(err, data);
  })
}

module.exports = {
  getReviews,
  addReview,
  addHome,
  updateReview,
  deleteReview,
  deleteHome
}