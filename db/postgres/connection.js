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

let getHomes = async (id) => {
  let res = await client.query(`SELECT * FROM homes WHERE id = ($1);`, [id]);
  return res.rows[0];
}

let addHome = async (req, callback) => {
  let reviews = [];
  req.reviews.forEach((review) => {
    reviews.push(review);
  })
  reviews = JSON.stringify(reviews);
  // let reviews = JSON.stringify(req.reviews);
  console.log(reviews);
  let res = await client.query(`INSERT INTO homes(reviews) VALUES('${reviews}');`, (err, data) => {
    callback(err, data);
  });
}

module.exports = {
  getHomes,
  addHome
}