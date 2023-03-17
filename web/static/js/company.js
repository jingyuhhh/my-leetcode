const runcompany = document.getElementById("companylist");
const ne = document.querySelector("#next");
const be = document.querySelector("#before")
var left = 0;

ne.onclick = function () {
    if (left >= -510) {
        left -= 300;
        runcompany.style.marginLeft = left + "px";
    }
}


be.onclick = function () {
    if (left < 0) {
        left += 300;
        runcompany.style.marginLeft = left + "px";
    }

}

runcompany.style.transition = "all 0.5s ease";
