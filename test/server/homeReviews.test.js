const initSeed = require("../../db/initSeed")
const request = require('supertest')
const app = require('../../server/app')

beforeEach(initSeed)

it('should return 100 reviews upon visiting /api/homes/5/reviews', async () => {
  const {body: {ratings, reviewsWithComments}} = await request(app)
    .get('/api/homes/5/reviews')
    .expect(200)

  expect(reviewsWithComments.length).toBe(100)
})


it('should return same data when visiting same house consecutively', async () => {
  const homeId = '10'


  const response1 = await request(app)
    .get(`/api/homes/${homeId}/reviews`)
    .expect(200);
  const response2 = await request(app)
      .get(`/api/homes/${homeId}/reviews`)
      .expect(200);
  expect(response1.body).toEqual(response2.body)

})


it('should return different data for visting two different houses', async () => {
  const home1Id = '10'
  const home2Id='5'

  const response1 = await request(app)
    .get(`/api/homes/${home1Id}/reviews`)
    .expect(200);
  const response2 = await request(app)
    .get(`/api/homes/${home2Id}/reviews`)
    .expect(200);

  expect(response1.body).not.toEqual(response2.body)

})