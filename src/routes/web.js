const express = require("express");
const router = express.Router(); // khai báo router
const { getHomePage, getABC, getQv } = require("../controllers/homeController");

//route.Method("/route" , handler);

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/quangviet", getQv);
module.exports = router; // export default router
