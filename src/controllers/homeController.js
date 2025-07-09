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

const postCreateUser = (req, res) => {
  // INSERT INTO Users (email , name , city) VALUES( "hoidanit" , "Eric" , "Nam Dinh") ;
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.mycity;
  console.log("email =", email, "name =", name, "city =", city);

  connection.query(
    `INSERT INTO 
  Users (email , name , city) 
  VALUES( ?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("create user succeed !");
    }
  );
};
module.exports = { getHomePage, getABC, getQv, postCreateUser };
