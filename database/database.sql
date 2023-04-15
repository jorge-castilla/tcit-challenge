create database tcit-challenge;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT
);