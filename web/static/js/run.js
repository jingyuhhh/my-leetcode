const imglist = document.getElementById("imglist");
let ico = document.getElementById("icolist").getElementsByTagName("li");
let eicolist = document.getElementById("icolist");
let circle = document.getElementsByClassName("circle");
let allli = imglist.children;
let img = Array.from(allli);

let lef = 0;
let timer;
run();

function run() {
  if (lef <= -1000) lef = 0;
  let m = Math.floor(-lef / 250);
  imglist.style.marginLeft = lef + "px";
  let n = lef % 250 == 0 ? 1700 : 0;
  lef -= 10;
  icochange(m);
  change();
  timer = setTimeout(run, n);
}
function change() {
  for (let i = 0; i < circle.length; i++) {
    circle[i].onclick = function () {
      while (lef != -i * 250) {
        if (lef > -i * 250) lef -= 10;
        else lef += 10;
        imglist.style.marginLeft = lef + "px";
      }
    };
  }
  imglist.style.transition = "all 0.5s ease";
}

function icochange(m) {
  for (let index = 0; index < ico.length; index++) {
    ico[index].style.backgroundColor = "";
  }
  if (m < ico.length) {
    ico[m].style.backgroundColor = "rgba(140, 140, 140, 1.3)";
  }
}

imglist.onmouseover = function (event) {
  let imgnow = event.target;
  let index = img.indexOf(imgnow.parentNode);
  if (index === 4) {
    lef = 0;
  }
  lef = index * -1 * 250;
  imglist.style.marginLeft = lef + "px";
  clearTimeout(timer);
};
imglist.onmouseout = function () {
  run();
};
