var editor = new FroalaEditor("#editors");

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", function () {
  const parentEl = this.parentElement;
  // console.log(parentEl);
  parentEl.style.width = "50%";
  parentEl.style.alignItems = "center";
  parentEl.style.paddingLeft = "0";
  this.style.display = "none";
  if (document.body.clientWidth > 600) {
    document
      .querySelectorAll(".sidebar span")
      .forEach((span) => (span.style.display = "none"));
    // parentEl.style.paddingLeft = '2rem'
    document.querySelectorAll(".sidebar .container div").forEach((div) => {
      div.style.display = "flex";
      div.style.justifyContent = "center";
    });
  }
});
document.querySelector(".logout").onclick = () =>
  (window.location.href = "index.html");
const icons = document.querySelectorAll(".icons");

icons.forEach((icon, index) => {
  icon.classList.remove("active");
  icons[0].classList.add("active");
  icon.onclick = function () {
    !this.classList.contains("active")
      ? icons.forEach((ic) => ic.classList.remove("active")) &
        this.classList.add("active")
      : "";
  };
});
