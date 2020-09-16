var header = document.querySelector(".page-header");
var mainMenu = header.querySelector(".main-nav");
var mainMenuButton = mainMenu.querySelector(".main-nav__toggle");

window.addEventListener("load", function () {
  header.classList.remove("page-header--opened");
  mainMenu.classList.remove("main-nav--nojs");
  mainMenu.classList.remove("main-nav--opened");
});

mainMenuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  header.classList.toggle("page-header--opened");
  mainMenu.classList.toggle("main-nav--opened");
});
