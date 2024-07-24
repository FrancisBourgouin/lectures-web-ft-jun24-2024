const { connectToDB, closeDBConnection, reportError, runQuery } = require("./dbHelpers");

const jokeId = process.argv[2]

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
const queryArgs = [jokeId, true]

const fetchAllJokes = () => runQuery(query, queryArgs).then(rows => rows[0]);

connectToDB()
  .then(fetchAllJokes)
  .then(row => console.log("Result", row))
  .catch(reportError)
  .finally(closeDBConnection);