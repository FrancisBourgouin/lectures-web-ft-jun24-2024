const { connectToDB, closeDBConnection, reportError, runQuery } = require("./dbHelpers");

const fetchAllAuthors = () => runQuery("SELECT * FROM authors");

connectToDB()
  .then(fetchAllAuthors)
  .catch(reportError)
  .finally(closeDBConnection);

