const navBars = document.querySelector(".fa-bars");
const navList = document.querySelector("nav ul");
const closeMenuBtn = document.querySelector(".fa-xmark");
// handlebg-color
const changeBg = document.querySelector(".fa-moon");
// const bodyWidth = document.body.clientWidth;

const openMenu = () => {
  navList.style.right = 0;
};
const closeMenu = () => {
  navList.style.right = "-100%";
};
