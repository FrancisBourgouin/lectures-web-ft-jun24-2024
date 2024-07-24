const { connectToDB, closeDBConnection, reportError, runQuery } = require("./dbHelpers");

const question = process.argv[2]
const answer = process.argv[3]
const rating = process.argv[4]
const author_id = process.argv[5]

const query = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;

// $1 means the first value in the queryArgs array
const queryArgs = [question, answer, rating, author_id]

const insertJoke = () => runQuery(query, queryArgs).then(rows => rows[0]);

connectToDB()
  .then(insertJoke)
  .then(row => console.log("Result", row))
  .catch(reportError)
  .finally(closeDBConnection);