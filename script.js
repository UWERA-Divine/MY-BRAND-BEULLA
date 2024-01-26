const navBars = document.querySelector(".fa-bars");
const navList = document.querySelector("nav ul");
const closeMenuBtn = document.querySelector(".fa-xmark");

const openMenu = () => {
  navList.style.right = 0;
};
const closeMenu = () => {
  navList.style.right = "-100%";
};

// handle progressbar
const portfolioBars = document.querySelectorAll(".portfoliobars div");
// console.log(portfolioBars);

const portfolioContent = [
  {
    title: "Game Development",
    description:
      "lorem ipsum dosta ista drest qui bene amat bene castgati,  verbant vorant scriptant manent, ubi bene ibi patria. des coloribus, de mullieribusques et gustibus sans disptandur. en ver veritas, en eau sanitas",
    imageUrl: "./images/portfolio/01.png",
  },
  {
    title: "Web design ",
    description:
      "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ",
    imageUrl: "./images/portfolio/02.png",
  },
  {
    title: "Cyber security services ",
    description:
      "lorem ipsum dosta ista drest qui bene amat bene castgati,  verbant vorant scriptant manent, ubi bene ibi patria. des coloribus, de mullieribusques et gustibus sans disptandur. en ver veritas, en eau sanitas",
    imageUrl: "./images/portfolio/03.png",
  },
  {
    title: "Data  Analyst ",
    description:
      "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.",
    imageUrl: "./images/portfolio/04.png",
  },
  {
    title: "Problem solving ",
    description:
      "lorem ipsum dosta ista drest qui bene amat bene castgati,  verbant vorant scriptant manent, ubi bene ibi patria. des coloribus, de mullieribusques et gustibus sans disptandur. en ver veritas, en eau sanitas",
    imageUrl: "./images/portfolio/05.png",
  },
];
const portfolio = document.querySelector("#portfolio");
const portImage = document.querySelector("#portfolio__image");
const portHeader = document.querySelector("#portfolio__header");
const portText = document.querySelector("#portfolio__text");
const scrollBtn = document.querySelector("#scroll-icon");
let scrollIndex = 0;
// console.log(
//   portfolio.childNodes[1].classList,
//   portfolio.childNodes[3].classList
// );
// console.log(this);
// const {port}
window.onload = () => {
  portImage.src = portfolioContent[0].imageUrl;
  portHeader.textContent = portfolioContent[0].title;
  portText.textContent = portfolioContent[0].description;
};
portfolioBars.forEach((bar, index) => {
  bar.onclick = function () {
    this.style.backgroundColor = "#000c24";
    this.innerHTML = `<span>0${index + 1}</span>`;
    portImage.src = portfolioContent[index].imageUrl;
    portHeader.textContent = portfolioContent[index].title;
    portText.textContent = portfolioContent[index].description;
  };
});
scrollBtn.onclick = () => {
  if (scrollIndex < 5) {
    portfolioBars[scrollIndex + 1].style.backgroundColor = "#000c24";
    portfolioBars[scrollIndex + 1].innerHTML = `<span>0${
      scrollIndex + 2
    }</span>`;
    portImage.src = portfolioContent[scrollIndex + 1].imageUrl;
    portHeader.textContent = portfolioContent[scrollIndex + 1].title;
    portText.textContent = portfolioContent[scrollIndex + 1].description;
    scrollIndex++;
  } else {
    alert("you reache the end of my portfolio");
  }
};
const sliderID = setInterval(function () {
  scrollBtn.click();
  if (scrollIndex === 4) {
    scrollIndex = 0;
  }
}, 4000);
