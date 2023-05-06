const echange = document.getElementById("change");
let cnt = 0;
let run_circle = document.getElementById("run-circle");
let root = document.querySelector(":root");

echange.onclick = () => {
  cnt++;
  if (cnt % 2) {
    root.style.setProperty("--text", "white");
    root.style.setProperty("--textsmall", "white");
    root.style.setProperty("--bg", "rgb(40,40,40)");
    root.style.setProperty("--bgg", "rgb(26,26,26)");
    run_circle.style.marginLeft = 25 + "px";
    echange.style.backgroundColor = "lightblue";
    run_circle.style.transition = "all 0.5s ease";
  } else {
    root.style.setProperty("--text", "#000000");
    root.style.setProperty("--textsmall", "#00002489");
    root.style.setProperty("--bg", "#ffffff");
    root.style.setProperty("--bgg", "rgb(247, 248, 250)");

    run_circle.style.marginLeft = 0 + "px";
    echange.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }
};
