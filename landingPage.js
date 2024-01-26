const svg = document.querySelectorAll(".main-bg"),
  upperBg = document.querySelector(".upper-bg");
body = document.querySelector("body");

const thresholdWidth = 620;

// Navbar variables and handler functions

const navBars = document.querySelector(".fa-bars");
const navList = document.querySelector("nav ul");
const closeMenuBtn = document.querySelector(".fa-xmark");
// handlebg-color
const changeBg = document.querySelector(".fa-moon");
const bodyWidth = document.body.clientWidth;

const openMenu = () => {
  navList.style.right = 0;
};
const closeMenu = () => {
  navList.style.right = "-100%";
};
document.addEventListener("DOMContentLoaded", function () {
  // svg.setAttribute()
  // svg.forEach((el) => {
  //   // if(el.width.base)
  //   console.log(el.width.baseVal.value);
  //   if (el.width.baseVal.value >= bodyWidth)
  //     el.setAttribute("width", bodyWidth);
  // });
  // if (bodyWidth <= thresholdWidth) {
  //   // upperBg.removeChild(svg);
  //   svg.forEach((el) => {
  //     const parentEl = el.parentElement;
  //     console.log(parentEl);
  //     parentEl.removeChild(el);
  //   });
  //   console.log("small size");
  // } else {
  //   svg.setAttribute("width", bodyWidth);
  // }
  //   navBars.onclick = () => {
  //     navList.style.right = "0";
  //     closeMenu.onclick = function () {
  //       //   this.style.color = "#f44336";

  //       navList.style.right = "-100%";
  //     };
  //   };
  console.log("DOMContentLoaded");
});
