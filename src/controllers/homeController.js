const connection = require("../config/database");

const getHomePage = (req, res) => {
  // process data -> gọi models
  let user = [];
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    if (err) {
      console.error("Query failed:", err); // ← CỰC KỲ QUAN TRỌNG
      return;
    }
    user = results;
    console.log(">>> results =", results);
    res.send(JSON.stringify(user)); // convert sang string mới in ra đc
  });
};

const getABC = (req, res) => {
  res.send("Check link abc");
};

const getQv = (req, res) => {
  res.render("sample.ejs");
};
module.exports = { getHomePage, getABC, getQv };
