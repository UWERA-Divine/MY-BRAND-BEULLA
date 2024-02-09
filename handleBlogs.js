let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
const title = document.querySelector("#title");
const content = document.querySelector("#editors");
const imageFile = document.querySelector("#file");
const form = document.querySelector("#add_blog");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let blog = {
    title: title.value,
    content: content.value,
    imageSrc: URL.createObjectURL(imageFile.files[0]),
    id: Date.now().toString(),
  };
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  title.value = "";
  content.value = "";
  console.log(blogs);
});

/*
       <div class="blog__card">
          <img src="./images/blog/myblog.png" alt="#blog1" />
          <div class="text-container">
            <h2>Dummy Text for title</h2>
            <p>
              Descriptioon sskjk sals All are needed Descriptioon sskjk sals All
              are neededDescriptioon sskjk sals All are neededDescriptioon sskjk
              sals All are needed
            </p>
            <div class="like__icons">
              <div><i class="fa-solid fa-heart"></i> &nbsp; <span>4</span></div>

              <a href="blog.html">Read More...</a>
            </div>
          </div>
        </div>

        */
