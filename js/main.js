window.onload = function () {
  var btn = document.getElementById("btn");
  btn.onmouseover = function () {
    this.style.backgroundColor = "#9933ff";
  };
  btn.onmouseout = function () {
    this.style.backgroundColor = "#9999ff";
  };
};