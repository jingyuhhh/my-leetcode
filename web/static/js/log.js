var login = document.getElementById('login');
var login_button = document.getElementById('login-btn');
var del = document.getElementById('delete');
var tel = document.getElementById('tel');

login_button.onclick = function () {
    login.style.display = "block";
    login.style.display = "flex";
}

del.onclick = function () {
    login.style.display = "none";
}

tel.value = localStorage.getItem("value");


tel.addEventListener("keyup", function () {
    localStorage.setItem('value', tel.value);

})


