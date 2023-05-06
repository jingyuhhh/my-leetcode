function log() {
  const login = document.getElementById("in-button"),
    register = document.getElementById("re-button"),
    username = document.getElementById("tel").value,
    password = document.getElementById("pwd").value;
  login.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("error", (event) => {
      console.log(event.target.reponse);
    });
    xhr.open("POST", "/login");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(`username=${username}&password=${password}`);
  });
}

log();

// export { login };
