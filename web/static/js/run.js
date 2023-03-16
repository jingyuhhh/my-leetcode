const imglist = document.getElementById("imglist")
var ico = document.getElementById("icolist").getElementsByTagName("li");
var eicolist = document.getElementById("icolist");
var circle = document.getElementsByClassName('circle');

var lef = 0;
var timer;
run();

function run() {
    if (lef <= -1000) lef = 0;
    var m = Math.floor(- lef / 250);
    imglist.style.marginLeft = lef + "px";
    var n = (lef % 250 == 0) ? 1700 : 0;
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

        }
    }
}


function icochange(m) {
    for (let index = 0; index < ico.length; index++) {
        ico[index].style.backgroundColor = "";

    }
    if (m < ico.length) {
        ico[m].style.backgroundColor = "rgba(140, 140, 140, 1.3)";
    }
}

imglist.onmouseover = function () {
    clearTimeout(timer);
}
imglist.onmouseout = function () {
    run();
}



