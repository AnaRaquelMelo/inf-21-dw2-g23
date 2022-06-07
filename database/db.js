const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dw2",
});

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database connected");
});

module.exports = db;
