const express = require("express");
const router = express.Router(); // khai báo router
const {
  getHomePage,
  getABC,
  getQv,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");

//route.Method("/route" , handler);

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/quangviet", getQv);

router.get("/create", getCreatePage);

router.get("/update", getUpdatePage);

router.post("/create-user", postCreateUser);
module.exports = router; // export default router
