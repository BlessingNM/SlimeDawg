//nav bar effects
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
function myNavMonitor() {
  if (window.scrollY >= 20) alert("meratedia");
}
/* 

window.addEventListener("scroll", function () {
  var element = document.getElementById("nimg");
  var menuBtn = document.getElementsById("myNavMenu");
  if (window.scrollY > 170 && menuBtn.className === "nav-menu responsive") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}); */

