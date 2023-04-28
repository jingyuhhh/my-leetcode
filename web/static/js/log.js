let login_main = document.querySelector(".login-main");
let login_button = document.getElementById("login-btn");
let login = document.querySelector(".login");
let del = document.getElementById("delete");
let tel = document.getElementById("tel");
let pwd = document.getElementById("pwd");
let in_button = document.getElementById("in-button");
let re_button = document.getElementById("re-button");

login_button.addEventListener("click", function () {
  login.style.display = "flex";
  login_main.classList.add("pop");
  login.classList.add("active");
  login_main.classList.remove("deletelog");
});

tel.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (tel.validity.valueMissing) {
      tel.classList.add("valuemissing");
    }
    if (tel.validity.patternMismatch) {
      tel.classList.add("valuemissing");
    }
  }
  if (tel.value !== "" && tel.classList.contains("valuemissing")) {
    tel.classList.remove("valuemissing");
  }
});

del.onclick = function () {
  login_main.classList.add("deletelog");
  login_main.classList.toggle("popup");
  console.log(login_main.classList);

  setTimeout(() => {
    login.style.display = "none";
  }, 500);
};

tel.value = localStorage.getItem("tel");

let a0 = localStorage.getItem("tel");
let b0 = localStorage.getItem("pwd");

let a = tel.value;
let b = pwd.value;

in_button.onclick = function () {
  if (a == a0 && b == b0 && a0 != "" && b0 != "") {
    alert("登录成功！");
    login.style.display = "none";
    login_button.style.display = "none";
  } else {
    alert("账号或密码错误");
  }
};

re_button.onclick = () => {
  localStorage.setItem("tel", tel.value);
  localStorage.setItem("pwd", pwd.value);
  alert("注册成功");
};
