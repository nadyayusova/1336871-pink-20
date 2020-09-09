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


// var findButton = document.querySelector("[name=find-hotel]");
// var findWindow = document.querySelector(".modal-search");

// var form = findWindow.querySelector("form");
// var lessAdultsButton = form.querySelector("[name=less-adults-button]");
// var moreAdultsButton = form.querySelector("[name=more-adults-button]");
// var adultsQuantityInput = form.querySelector("[name=adults-quantity]");
// var lessChildrenButton = form.querySelector("[name=less-children-button]");
// var moreChildrenButton = form.querySelector("[name=more-children-button]");
// var childrenQuantityInput = form.querySelector("[name=children-quantity]");

// window.onload = function() {
//   findWindow.classList.remove("modal-show");
// };

// findButton.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   findWindow.classList.toggle("modal-show");
// });

// lessAdultsButton.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   if (adultsQuantityInput.value > 0) {
//     adultsQuantityInput.value--;
//   }
// });

// moreAdultsButton.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   adultsQuantityInput.value++;
// });

// lessChildrenButton.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   if (childrenQuantityInput.value > 0) {
//     childrenQuantityInput.value--;
//   }
// });

// moreChildrenButton.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   childrenQuantityInput.value++;
// });
