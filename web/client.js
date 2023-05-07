function send(username, password, status) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", status);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`username=${username}&password=${password}`);
}

function log() {
  const login = document.getElementById("in-button"),
    register = document.getElementById("re-button"),
    username = document.getElementById("tel").value,
    password = document.getElementById("pwd").value;
  login.addEventListener("click", send(username, password, "/login"));
  register.addEventListener("click", send(username, password, "/register"));
}

log();

// export { login };
