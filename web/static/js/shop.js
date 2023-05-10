var list = document.getElementById("hidden");
var shop = document.getElementById("shop");

shop.onmouseover = function () {
  list.style.display = "block";
};
shop.onmouseout = function () {
  list.style.display = "none";
};
