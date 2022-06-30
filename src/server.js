import express from "express";
import path from "path";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.send("Hi! About! I'm David");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
