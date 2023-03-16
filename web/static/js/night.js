const echange = document.getElementById('change');
var di = document.querySelector('div');
let word = [document.getElementsByClassName('lc-head-nav-right-learn'), document.getElementsByClassName('lc-head-nav-right-register'),
document.getElementsByClassName('lc-content-left-top-left-header-title'), document.getElementsByClassName('lc-content-left-top-left-middle'),
document.getElementsByClassName('lc-content-left-top-main-top-top-more'), document.getElementsByClassName('lc-content-left-top-main-top-top-title'),
document.getElementsByClassName('lc-content-left-top-main-top-top-jiantou'), document.getElementsByClassName('lc-content-left-top-main-top-company1-name'),
document.getElementsByClassName('lc-content-left-top-main-discuss-content'), document.getElementsByClassName('lc-content-left-top-main-discuss-sth'),
document.getElementsByClassName('lc-content-left-top-left-bottom-num')];
let grey = [document.getElementsByClassName('lc-head'), document.getElementsByClassName('lc-content-left-top-left'), document.getElementsByTagName('input'),
document.getElementsByClassName('lc-content-left-top-main'), document.getElementsByClassName('search'), document.getElementsByClassName('lc-head-nav-left-qiye')];
var cnt = 0;
var run_circle = document.getElementById('run-circle');


echange.onclick = () => {
    cnt++;
    if (cnt % 2) {
        di.style.backgroundColor = "rgb(26,26,26)";
        for (let i = 0; i < grey.length; i++) {
            for (let j = 0; j < grey[i].length; j++) {
                grey[i][j].style.backgroundColor = "rgb(40,40,40)";
            }
        }

        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < word[i].length; j++)
                word[i][j].style.color = "white";
        }
        console.log(run_circle.style.marginLeft);
        run_circle.style.marginLeft = 25 + "px";
        echange.style.backgroundColor = "lightblue";
    }
    else {
        di.style.backgroundColor = "rgb(247,248,250)";
        for (let i = 0; i < grey.length; i++) {
            for (let j = 0; j < grey[i].length; j++) {
                grey[i][j].style.backgroundColor = "white";
            }
        }
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < word[i].length; j++)
                word[i][j].style.color = "rgba(38, 38, 38, 0.75)";
        }
        run_circle.style.marginLeft = 0 + "px";
        echange.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
}
