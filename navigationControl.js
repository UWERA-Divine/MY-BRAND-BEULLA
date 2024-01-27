const addBlog = document.querySelector("#add__blog");
const editBlog = document.querySelectorAll(".update");

addBlog.onclick = () => {
  window.location.href = "add_blog.html";
};
// editBlog.forEach((btn) => {
//   btn.onclick = () => {
//     window.location.href = "update_blog.html";
//   };
// });

// closing sidebar

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
