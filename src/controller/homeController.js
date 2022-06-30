import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM users");
  console.log(rows);
  return res.render("index.ejs", { userData: rows });
};

module.exports = {
  getHomePage,
};
