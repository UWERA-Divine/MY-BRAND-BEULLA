const mainBlogContainer = document.querySelector(".blog-cards");
let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// retrieving blogs from the local storage
if (blogs.length > 0) {
  blogs.forEach((blog) => {
    let blogContainer = document.createElement("div");
    blogContainer.classList.add("blog__card");
    blogContainer.innerHTML = `
  <img src="${blog.imageSrc}" alt="#blog1" />
  <div class="text-container">
    <h2>${blog.title}</h2>
    <p>
    ${blog.content}
    </p>
    <div class="like__icons">
      <div><i class="fa-solid fa-heart"></i> &nbsp; <span>4</span></div>

      <a href="blog.html">Read More...</a>
    </div>
  </div>`;
    mainBlogContainer.appendChild(blogContainer);
  });
}

// testing
