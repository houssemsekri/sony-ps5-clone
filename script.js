const body = document.querySelector("body");
var sLeft = body.scrollLeft;
sLeft = 0;
console.log(body.scrollLeft);
let togglemenu = document.querySelector(".navigation__open-close");

let open = false;
togglemenu.addEventListener("click", () => {
  open = !open;
  if (open) {
    document.querySelector(".fa-bars").classList.remove("block");
    document.querySelector(".fa-bars").classList.add("none");
    document.querySelector(".fa-times").classList.remove("none");
    document.querySelector(".fa-times").classList.add("block");
  } else {
    document.querySelector(".fa-times").classList.remove("block");
    document.querySelector(".fa-times").classList.add("none");
    document.querySelector(".fa-bars").classList.remove("none");
    document.querySelector(".fa-bars").classList.add("block");
  }
  document.querySelector(".navigation__down").classList.remove("open");
  document.querySelectorAll(".sub-1__link").forEach((element) => {
    element.classList.toggle("show");
  });
  setTimeout(() => {
    document.querySelector(".navigation__list").classList.toggle("open_nav");
  }, 350);
});
document.querySelector(".down__control").addEventListener("click", () => {
  document.querySelectorAll(".sub-1__link").forEach((element) => {
    element.classList.toggle("show");
  });
  document.querySelector(".navigation__down").classList.remove("open");
});
let list = document.querySelectorAll(".navigation__link");
list.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    let a = document.querySelector(".navigation__down");
    document.querySelector(".back-drop").classList.toggle("block");
    a.classList.toggle("open");
    document.querySelectorAll(".sub-1__link").forEach((element) => {
      element.classList.toggle("show");
    });
  });
});
let toogle = document.querySelector(".back-drop");

toogle.addEventListener("click", () => {
  document.querySelector(".back-drop").classList.toggle("block");
  document.querySelector(".navigation__down").classList.remove("open");
  document.querySelectorAll(".sub-1__link").forEach((element) => {
    element.classList.remove("show");
  });
});
