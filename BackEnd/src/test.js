// get the client
const mysql = require('mysql');

// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "getflixdb",
    port: 3306,
});
connection.connect()
// simple query
connection.query(
  'SELECT * FROM user',
  function(err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    return
  }
);