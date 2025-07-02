const express = require("express"); //commonjs
// import express from 'express'; //es modules
const app = express(); //
const port = 3000;
const path = require("path");

//config template engine
app.set("views", path.join(__dirname, "./views/"));
app.set("view engine", "ejs");
// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! with Hoi dan IT");
});

app.get("/abc", (req, res) => {
  res.send("Check link abc");
});

app.get("/quangviet", (req, res) => {
  // res.send("<h1>quang viet ne<h1>");
  // view động -> render()
  res.render("sample.ejs");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
