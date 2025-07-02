const express = require("express"); //commonjs
// import express from 'express'; //es modules
require("dotenv").config();
console.log(">> Check env : ", process.env);

const app = express(); //
const port = process.env.PORT || 3000; // -> hardcode .uat .production
const path = require("path");
const hostname = process.env.HOST_NAME;

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
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
