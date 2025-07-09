const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDServices");
const getHomePage = async (req, res) => {
  // process data -> gọi models
  let results = await getAllUser();
  console.log(">>> Check rows :", results);
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Check link abc");
};

const getQv = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  // INSERT INTO Users (email , name , city) VALUES( "hoidanit" , "Eric" , "Nam Dinh") ;
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.mycity;
  console.log("email =", email, "name =", name, "city =", city);

  let [results, fields] = await connection.query(
    `INSERT INTO
  Users (email , name , city)
  VALUES( ?, ?, ?)`,
    [email, name, city]
  );
  // const [results, fields] = await connection.query("select * from Users");
  console.log(">>check results : ", results);
  res.send("Create user secceed");
};
module.exports = { getHomePage, getABC, getQv, postCreateUser, getCreatePage };
