const { runQuery } = require("./dbHelpers");

// const fakeFetchAllJokes = () => {
//   return Promise.resolve([...])
// }

const fetchAllJokes = () => {
  const query = `
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes
  LEFT JOIN authors
    ON authors.id = jokes.author_id
  `;

  return runQuery(query);
};

const fetchJokeById = (jokeId) => {
  const query = `
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes
  LEFT JOIN authors
    ON authors.id = jokes.author_id
  WHERE jokes.id = $1
  AND authors.funny = $2
  `;

  // $1 means the first value in the queryArgs array
  const queryArgs = [jokeId, true];

  return runQuery(query, queryArgs).then((rows) => rows[0]);
};

const insertJoke = (question, answer, rating, author_id) => {
  const query = `
  INSERT INTO
    jokes (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;

  // $1 means the first value in the queryArgs array
  const queryArgs = [question, answer, rating, author_id];

  return runQuery(query, queryArgs).then((rows) => rows[0]);
};

module.exports = { fetchAllJokes, fetchJokeById, insertJoke };
