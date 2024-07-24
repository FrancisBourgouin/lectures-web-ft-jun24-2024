
const pg = require("pg");
const { Client } = pg;

const client = new Client({
  user: "labber",
  password: "labber",
  database: "jun24_jokes",
  host: "localhost",
  port: "5432",
});

const connectToDB = () => {
  return client.connect();
};

const closeDBConnection = () => {
  return client.end()
}

const reportError = (err) => {
  console.log("OH NO!")
  console.log(err)
  console.log("---- END OF ERROR ----")
}

// Very similar to res.render in Express res.render(templateName, templateVars)

const runQuery = (queryStr, queryArgs) => {
  return client.query(queryStr, queryArgs).then((res) => res.rows);
};

module.exports = {connectToDB, closeDBConnection, reportError, runQuery}