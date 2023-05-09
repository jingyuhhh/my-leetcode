const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const selectSql = `select * from users`;
let addSql = "INSERT INTO users (username,password) VALUES(?,?)";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "user",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("."));
app.use(bodyParser.json());

connection.connect();

let checkHandler = function Check(username, password) {
  return new Promise((resolve, reject) => {
    connection.query(selectSql, (error, result) => {
      if (error) {
        console.log("[select error]-", error.message);
      }
      let isExist = false;
      result.forEach((element) => {
        if (element.username.toString() === username) {
          isExist = true;
        }
      });

      if (!isExist) resolve(0);
      let isCorrect = result.some((item) => {
        return (
          item.username.toString() === username &&
          item.password.toString() === password
        );
      });
      if (isCorrect) resolve(2);
      else resolve(1);
    });
  });
};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let check = await checkHandler(username, password);

  if (check === 1) {
    res.send("用户名或密码有误");
  } else if (check === 0) {
    res.send("用户不存在");
  } else {
    res.send("登录成功");
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  let check = await checkHandler(username, password);
  if (check !== 0) {
    res.send("该用户已存在");
  } else {
    Add(addSql, [username, password]);
    res.send("注册成功");
  }
});

let Add = function Add(addSql, params) {
  connection.query(addSql, params, function (err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }
  });
};

app.listen(8080);
