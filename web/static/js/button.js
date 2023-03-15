const html = document.documentElement;
var btn = document.getElementById("up");

window.onscroll = () => {
    let scrollDis = document.documentElement.scrollTop;
    if (scrollDis > 500) {
        btn.style.display = "block";
        console.log("Yes");
    }
    else {
        btn.style.display = "none";
        console.log("No");
    }
}