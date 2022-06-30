import mysql from "mysql2/promise";

// create the connection pool to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejspractice",
  // password: password
});

export default pool;
