const html = document.documentElement;
var btn = document.getElementById("up");

window.onscroll = () => {
  let scrollDis = html.scrollTop;
  if (scrollDis > 500) {
    btn.style.display = "block";

    btn.onclick = function () {
      html.scrollIntoView({ behavior: "smooth" });
      console.log("YES");
    };
  } else {
    btn.style.display = "none";
  }
};
