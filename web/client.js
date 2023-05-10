const loginbtn = document.getElementById("in-button"),
  register = document.getElementById("re-button"),
  input1 = document.getElementById("tel"),
  input2 = document.getElementById("pwd");

let username = null,
  password = null;

input1.oninput = debounce(function () {
  username = this.value;
}, 500);
input2.oninput = debounce(function () {
  password = this.value;
}, 500);

function debounce(fn, delay) {
  let t = null;
  return function () {
    if (t !== null) {
      clearTimeout(t);
    }
    t = setTimeout(() => {
      fn.call(this);
    }, delay);
  };
}

loginbtn.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/login");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`username=${username}&password=${password}`);
  xhr.onreadystatechange = debounce(function () {
    if (xhr.status === 200) {
      let res = xhr.responseText;
      if (res !== "") {
        alert(res);
      }
      if (res === "登录成功") {
        hide();
        dom();
      }
    }
  }, 500);
});
register.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/register");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`username=${username}&password=${password}`);
  xhr.onreadystatechange = debounce(function () {
    if (xhr.status === 200) {
      let res = xhr.responseText;
      alert(res);
      if (res === "注册成功") {
        input2.value = "";
      }
    }
  }, 500);
});

// export { login };
