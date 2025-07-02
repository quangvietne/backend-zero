const express = require("express");
const router = express.Router(); // khai báo router

router.get("/", (req, res) => {
  res.send("Hello World with Hoi dan IT");
});

router.get("/abc", (req, res) => {
  res.send("Check link abc");
});

router.get("/quangviet", (req, res) => {
  // res.send("<h1>quang viet ne<h1>");
  // view động -> render()
  res.render("sample.ejs");
});
module.exports = router; // export default router
