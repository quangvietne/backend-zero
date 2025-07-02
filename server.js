const express = require("express"); //commonjs
// import express from 'express'; //es modules
const app = express(); //
const port = 3000;

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! with Hoi dan IT");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
