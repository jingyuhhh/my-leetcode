var login_main = document.querySelector('.login-main');
var login_button = document.getElementById('login-btn');
var login = document.querySelector('.login');
var del = document.getElementById('delete');
var tel = document.getElementById('tel');
var pwd = document.getElementById('pwd');
var in_button = document.getElementById('in-button');
var re_button = document.getElementById('re-button');

login_button.onclick = function () {
    login.style.display = "flex";
    login_main.classList.add('pop');
    login.classList.add('active');
}

del.onclick = function () {
    login.style.display = "none";
}


tel.value = localStorage.getItem("tel");

var a0 = localStorage.getItem("tel");
var b0 = localStorage.getItem("pwd");

var a = tel.value;
var b = pwd.value;

in_button.onclick = function () {
    console.log(a), console.log(a0), console.log(b), console.log(b0);
    if (a == a0 && b == b0 && a0 != '' && b0 != '') {
        alert("登录成功！");
        login.style.display = "none";
        login_button.style.display = "none";

    }
    else {
        alert("账号或密码错误");
    }

}

re_button.onclick = () => {
    localStorage.setItem('tel', tel.value);
    localStorage.setItem('pwd', pwd.value);
    alert("注册成功");
}

