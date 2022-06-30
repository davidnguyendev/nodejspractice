import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM users");
  console.log(rows);
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  const [user] = await pool.execute("SELECT * FROM users WHERE id=?", [userId]);
  return res.send(`information user: ${JSON.stringify(user)}`);
};

module.exports = {
  getHomePage,
  getDetailPage,
};
