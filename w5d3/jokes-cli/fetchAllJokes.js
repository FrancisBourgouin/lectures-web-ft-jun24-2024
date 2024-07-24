// SELECT *
// FROM jokes
// LEFT JOIN authors
//   ON authors.id = jokes.author_id
// WHERE jokes.id = 1
// ;

// import pg from 'pg'
// const pg = require("pg")
// const { Pool, Client } = pg

// const client = new Client({
//   user:"labber",
//   password:"labber",
//   database:"jun24_jokes",
//   host:"localhost",
//   port:"5432"
// })
// // await client.connect()
// // client.connect() is returning a promise

// client
//   .connect()
//   .then(() => client.query('SELECT * FROM jokes'))
//   .then(res => console.log(res.rows))
//   .catch(err => console.log("OH NO", err))
//   .finally(() => client.end())

// // const res = await client.query('SELECT NOW()')
// // await client.end()

const { connectToDB, closeDBConnection, reportError, runQuery } = require("./dbHelpers");

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

const fetchAllJokes = () => runQuery(query);

connectToDB()
  .then(fetchAllJokes)
  .then(rows => console.log("Result", rows))
  .catch(reportError)
  .finally(closeDBConnection);
