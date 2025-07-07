const connection = require("../config/database");

const getHomePage = (req, res) => {
  // process data -> gọi models
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("Check link abc");
};

const getQv = (req, res) => {
  res.render("sample.ejs");
};
module.exports = { getHomePage, getABC, getQv };
