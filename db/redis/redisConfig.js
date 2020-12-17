const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis);

const client = redis.createClient({
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT
});

module.exports = client;