import express from "express";
let router = express.Router();
import homeController from "../controller/homeController";

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.updateUser);

  router.get("/about", (req, res) => {
    res.send("Hi! About! I'm David");
  });
  return app.use("/", router);
};

export default initWebRoute;
