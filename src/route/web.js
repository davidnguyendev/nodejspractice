import express from "express";
let router = express.Router();
import homeController from "../controller/homeController";

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/about", (req, res) => {
    res.send("Hi! About! I'm David");
  });
  return app.use("/", router);
};

export default initWebRoute;