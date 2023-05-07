const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const selectSql = `select * from users`;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "user",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("."));

connection.connect();

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let check = Check(username, password);
  if (check === 1) {
    alert("用户名或密码有误");
  } else if (check === 0) {
    alert("用户名不存在");
  } else {
    alert("登录成功");
  }
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  let check = Check(username, password);
  if (check !== 0) {
    alert("该用户已存在");
  } else {
    let addSql =
      "INSERT INTO users (id,username,password) VALUES('1','" +
      username +
      "','" +
      password +
      "')";
    Add(addSql);
  }
});

function Check(username, password) {
  connection.query(selectSql, (error, result) => {
    if (error) {
      console.log("[select error]-", error.message);
    }
    console.log(result);
    // let isExist = result.some(() => {
    //   return result.username === username;
    // });
    // if (!isExist) return 0;
    // let isCorrect = result.some(() => {
    //   return result.username === username && result.password === password;
    // });
    // if (isCorrect) return 2;
    // else return 1;
  });
}

function Add(addSql) {
  connection.query(addSql, function (err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }
  });
}

app.listen(8080);

connection.end();
