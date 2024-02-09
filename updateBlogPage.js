const updateBtns = document.querySelectorAll(".update");
updateBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targetIndex =
      +e.target.parentElement.parentElement.children[0].textContent - 1;
    let blog = JSON.parse(localStorage.getItem("blogs"))[targetIndex];
    console.log(blog);
    const { id } = blog;
    let currentUrl = window.location.href;
    window.location.href = currentUrl.replace(
      /dashboard.html/,
      `update_blog.html?${id}`
    );
  });
});
