const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
console.log(blogId);
const title = document.querySelector("#titleUpdate"); // title input
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
const content = document.querySelector("#summernote"); //text editor
let formUpdateBlog = document.querySelector("#updateBlogForm"); // update form id
const fileInput = document.querySelector("#image-file");