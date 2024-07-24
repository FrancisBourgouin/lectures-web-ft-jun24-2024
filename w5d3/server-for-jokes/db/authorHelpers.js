const { runQuery } = require("./dbHelpers");

const fetchAllAuthors = () => {
  const query = `
  SELECT 
    *
  FROM
    authors
  `;

  return runQuery(query);
};

module.exports = { fetchAllAuthors };
