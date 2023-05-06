const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "user",
});

app.use(bodyParser.urlencoded({ extended: true }));

connection.connect();

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let addSql =
    "INSERT INTO users (id,username,password) VALUES('1','" +
    username +
    "','" +
    password +
    "')";
  Add(addSql);
});

app.get("/", (req, res) => {
  res.send("hello");
});

function Add(addSql) {
  connection.query(addSql, function (err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }

    console.log("--------------------------INSERT----------------------------");
    //console.log('INSERT ID:',result.insertId);
    console.log("INSERT ID:", result);
    console.log(
      "-----------------------------------------------------------------\n\n"
    );
  });
}

app.listen(8888);

connection.end();
