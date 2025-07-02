require("dotenv").config();
const express = require("express"); //commonjs
const app = express();
const configViewEngine = require("./config/viewsEngine"); // import config view engine
const webRouter = require("./routes/web"); // import web router

const port = process.env.PORT || 3000; // -> hardcode .uat .production
const path = require("path");
const hostname = process.env.HOST_NAME;

//config template engine and config static file
configViewEngine(app);
// khai báo router
app.use("/", webRouter);

// khai báo route

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
