const getHomePage = (req, res) => {
  // process data -> gọi models
  res.send("Hello World with Hoi dan IT");
};
const getABC = (req, res) => {
  res.send("Check link abc");
};
const getQv = (req, res) => {
  res.render("sample.ejs");
};
module.exports = { getHomePage, getABC, getQv };
