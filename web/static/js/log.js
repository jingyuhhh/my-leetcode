var login = document.getElementById('login');
var login_button = document.getElementById('login-btn');
var del = document.getElementById('delete');

login_button.onclick = function () {
    login.style.display = "block";
    login.style.display = "flex";
}

del.onclick = function () {
    login.style.display = "none";
}



