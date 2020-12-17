var pg = require('pg');
const redis = require('../redis/redisConfig.js');

var connection = {
  user: process.env.PG_USER,
  pasword: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: 5432,
  database: 'reviewsandcomments'
}

const client = new pg.Client(connection);
client.connect();

const pool = new pg.Pool(connection);

// get all reviews from the database
let getReviews = async (id) => {
  return redis.getAsync(`homeID${id}`)
    .then(results => {
      if (results === null) {
        let res = await pool.query(`SELECT * FROM homes INNER JOIN reviews ON homes.id = reviews.homeid WHERE reviews.homeid = ($1);`, [id]);
        redis.setAsync(`homeID${id}`, JSON.stringify(res.rows));
        return res.rows;
      } else {
        console.log(results);
        return JSON.parse(results);
      }
    })
}

// add review to the database
let addReview = async (req, callback) => {
  let review = req;
  review.author = JSON.stringify(review.author);
  review.comments = JSON.stringify(review.comments);
  review.createdat = JSON.stringify(review.createdat);
  let res = await pool.query(`INSERT INTO reviews(homeid, content, cleanliness, accuracy, communication, location, checkin, value, author, comments, createdat) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`, [review.homeid, review.content, review.cleanliness, review.accuracy, review.communication, review.location, review.checkin, review.value, review.author, review.comments, review.createdat], (err, data) => {
    callback(err, data);
  });
}

// add a home to the database
let addHome = async (req, callback) => {
  let res = await pool.query(`INSERT INTO homes(homeid) VALUES(5);`, (err, data) => {
    callback(err, data);
  });
}

// updates content of a review in database
let updateReview = async (id, req, callback) => {
  let res = await pool.query(`UPDATE reviews SET content = ($1) WHERE id = ($2);`, [req.content, id], (err, data) => {
    callback(err, data);
  });
}

// deletes a review from the database
let deleteReview = async (id, req, callback) => {
  let res = await pool.query(`DELETE FROM reviews WHERE id = ($1);`, [id], (err, data) => {
    callback(err, data);
  })
}

// deletes a home from the database
let deleteHome = async (id, req, callback) => {
  let dltReviews = await pool.query(`DELETE FROM reviews WHERE homeid = ($1);`, [id], (err, data) => {
    if (err) {
      callback(err, data);
    }
  })
  let dltHome = await pool.query(`DELETE FROM homes WHERE id = ($1);`, [id], (err, data) => {
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