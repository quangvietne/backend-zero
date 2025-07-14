const express = require("express");
const router = express.Router(); // khai báo router
const {
  getHomePage,
  getABC,
  getQv,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");

//route.Method("/route" , handler);

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/quangviet", getQv);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user/", postHandleRemoveUser);

module.exports = router; // export default router
