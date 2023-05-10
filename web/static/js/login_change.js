function hide() {
  login_main.classList.add("deletelog");
  login_main.classList.toggle("popup");

  setTimeout(() => {
    login.style.display = "none";
  }, 500);
}

function dom() {
  let instead = `
    <div >
    <img class="photo" width="22px" height="22px" src="https://assets.leetcode.cn/aliyun-lc-upload/users/huo-shan-huo-shan-d/avatar_1678930314.png?x-oss-process=image%2Fresize%2Ch_40%2Cw_40" size="20" class="css-13g9qu9-AvatarComponent e1ajzf6f0">
    </div>
    `;
  login_button.innerHTML = instead;
}
