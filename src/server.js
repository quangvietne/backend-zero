require("dotenv").config();
const path = require("path");
const express = require("express"); //commonjs
const app = express();
const mysql = require("mysql2");
const connection = require("./config/database");
const configViewEngine = require("./config/viewsEngine"); // import config view engine
const webRouter = require("./routes/web"); // import web router

const port = process.env.PORT || 3000; // -> hardcode .uat .production
const hostname = process.env.HOST_NAME;

//config template engine and config static file
configViewEngine(app);
// khai báo router
app.use("/", webRouter);

// // test conection
connection.query("SELECT * FROM Users", function (err, results, fields) {
  if (err) {
    console.error("Query failed:", err); // ← CỰC KỲ QUAN TRỌNG
    return;
  }
  console.log(">>> results =", results);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
