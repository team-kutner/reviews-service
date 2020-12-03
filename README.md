# Project Name

> Project description



## Related Projects

- https://github.com/teamTarly/aquabnb-booking
- https://github.com/teamTarly/Aquabnb-photos
- https://github.com/teamTarly/aquabnb-more-places-to-stay



## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)
3. [Usage](#usage)
4. [Installion](#installation)



## Requirements

This project relies on a MongoDB database and Node.js.



## Development



## Usage

CRUD API
The below URL's should be prefixed with /api/homes/:id
|              Action               |Method|          URL          |
| --------------------------------- | ---- | --------------------- |
|Add a user to the database         |POST  |/api/homes/users       |
|Add a review to the database       |POST  |/api/homes/reviews     |
|Add a comment to the database      |POST  |/api/homes/comments    |
|Pulls reviews for a given home     |GET   |/api/homes/:id/reviews |
|Alters a user in database          |PUT   |/api/homes/:id/users   |
|Alters a review in database        |PUT   |/api/homes/:id/reviews |
|Alters a comment in the database   |PUT   |/api/homes/:id/comments|
|Deletes a user from the database   |DELETE|/api/homes/:id/users   |
|Deletes a review from the database |DELETE|/api/homes/:id/reviews |
|Deletes a comment from the database|DELETE|/api/homes/:id/comments|

1. __CREATE (POST)__
  Creating a review requires a user ID
  Creating a comment requires a user ID and a review ID
  __Users__
    Endpoint: /api/homes/users
      Reqest Body Properties:
        {
          username: String,
          avatar: String
        }
  __Reviews__
    Endpoint: /api/homes/reviews
      Reqest Body Properties:
        {
          content: String,
          cleanliness: String,
          accuracy: Number,
          communication: Number,
          location: Number,
          check-in: Number,
          value: Number,
          author: ID (User),
          createdAt: Date,
          home: String
        }
  __Comments__
    Endpoint: /api/homes/comments
      Reqest Body Properties:
        {
          content: String,
          author: ID (User),
          review: ID (Review),
          createdAt: Date
        }

2. __READ (GET)__
  Grabs reviews for a given home ID
  __Reviews__
    Endpoint: /api/homes/:id/reviews

3. __UPDATE (PUT)__
  All properties are optional
  Data will update based on which properties you pass in
  __Users__
    Endpoint: /api/homes/:id/users
      Reqest Body Properties:
        {
          username: String,
          avatar: String
        }
  __Reviews__
    Endpoint: /api/homes/:id/reviews
      Reqest Body Properties:
        {
          content: String,
          cleanliness: String,
          accuracy: Number,
          communication: Number,
          location: Number,
          check-in: Number,
          value: Number,
          home: String
        }
  __Comments__
    Endpoint: /api/homes/:id/comments
      Reqest Body Properties:
        {
          content: String
        }

4. __DELETE (DELETE)__
  Deleting a User deletes all reviews and comments related to the User
  Deleting a Review deletes all comments related to that review
  Deleting a Comment deletes only the comment
  __Users__
    Endpoint: /api/homes/:id/users
  __Reviews__
    Endpoint: /api/homes/:id/reviews
  __Comments__
    Endpoint: /api/homes/:id/comments



## Installation

From within the root directory:
Creates files `dev.env` and `test.env` under `/config`. An example is provided.
Fill in the env variable `MONGODB_URL` in each, making sure to supply an appropriate MongoDB uri.

```sh
npm install

sudo service mongodb start

npm run dev:server
npm run dev:client
```
