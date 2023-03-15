const imglist = document.getElementById("imglist")
var ico = document.getElementById("icolist").getElementsByTagName("li");
var eicolist = document.getElementById("icolist");

var left = 0;
var timer;
run();

function run() {
    if (left <= -1000) left = 0;
    var m = Math.floor(- left / 250);
    imglist.style.marginLeft = left + "px";
    var n = (left % 250 == 0) ? 1700 : 0;
    left -= 10;
    timer = setTimeout(run, n);
    icochange(m);
}


function icochange(m) {
    for (let index = 0; index < ico.length; index++) {
        ico[index].style.backgroundColor = "";

    }
    if (m < ico.length) {
        ico[m].style.backgroundColor = "rgba(140, 140, 140, 1.3)";
    }
}
