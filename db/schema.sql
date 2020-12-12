CREATE DATABASE reviewsandcomments;
\c reviewsandcomments;

CREATE TABLE homes (
  id SERIAL PRIMARY KEY,
  homeid INT NOT NULL
);

CREATE TABLE reviews (
	id SERIAL PRIMARY KEY,
  homeid INT NOT NULL,
	content VARCHAR(5000) NOT NULL,
	cleanliness INT NOT NULL,
  accuracy INT NOT NULL,
  communication INT NOT NULL,
  location INT NOT NULL,
  checkIn INT NOT NULL,
  value INT NOT NULL,
	author TEXT NOT NULL,
  comments TEXT NOT NULL,
  createdAt DATE NOT NULL,
  CONSTRAINT fk_home
  FOREIGN KEY(homeid)
  REFERENCES homes(id)
);

-- CREATE TABLE comments (
-- 	id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
-- 	content VARCHAR(100) NOT NULL,
--   review INT NOT NULL REFERENCES reviews (id),
--   author INT NOT NULL REFERENCES users (id)
-- );

-- CREATE TABLE users (
-- 	id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
-- 	username VARCHAR(50) NOT NULL,
-- 	avatar VARCHAR(200) NOT NULL
-- );

