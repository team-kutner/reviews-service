DROP DATABASE IF EXISTS reviewsandcomments;
CREATE DATABASE reviewsandcomments;
\c reviewsandcomments;

-- CREATE TABLE reviews (
-- 	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
-- 	content VARCHAR(200) NOT NULL,
-- 	home VARCHAR(100) NOT NULL,
-- 	cleanliness INT NOT NULL,
--   accuracy INT NOT NULL,
--   communication INT NOT NULL,
--   'location' INT NOT NULL,
--   'check-in' INT NOT NULL,
--   value INT NOT NULL,
-- 	author INT NOT NULL REFERENCES users (id),
--   comments INT NOT NULL REFERENCES comments (id),
--   createdAt DATE NOT NULL
-- );

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

CREATE TABLE homes (
  id SERIAL NOT NULL,
  homeID INT NOT NULL,
  reviews JSON NOT NULL
);