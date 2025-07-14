const connection = require("../config/database");
const {
  getAllUser,
  getUserById,
  upDateUserById,
  deleteUserById,
} = require("../services/CRUDServices");
const getHomePage = async (req, res) => {
  // process data -> gọi models
  let results = await getAllUser();
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

  let [results, fields] = await connection.query(
    `INSERT INTO
  Users (email , name , city)
  VALUES( ?, ?, ?)`,
    [email, name, city]
  );
  // const [results, fields] = await connection.query("select * from Users");
  // console.log(">>check results : ", results);
  res.send("Create user secceed");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  // console.log(">>> req.params : ", req.params);
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.mycity;
  let userId = req.body.userId;
  await upDateUserById(email, name, city, userId);
  // res.send("Create update user");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getABC,
  getQv,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
