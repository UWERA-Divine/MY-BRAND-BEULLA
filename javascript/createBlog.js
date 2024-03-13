
let title = document.querySelector("#itle");
let content = document.querySelector("#editors");
//let titleError = document.getElementById("title-error");
//let contentError = document.querySelector(".content-error");
//let blogTitle = document.querySelector(".blogTitle");
//let blogSummary = document.querySelector(".blogSummary");
let formCreateBlog = document.querySelector("#add_blog");
//let date = document.querySelector("#Date");
// let author = document.querySelector("#authorName");
// let authorError = document.querySelector("#author-error");
//let dateError = document.querySelector("#date-error");

//const imageInput = document.querySelector(".update-image");
const fileInput = document.querySelector("#file");
//let imageUrl = "";

// imageInput.addEventListener("click", () => {
//   fileInput.click();
// });

// fileInput.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   const reader = new FileReader();

//   reader.onloadend = () => {
//     imageInput.style.backgroundImage = `url(${reader.result})`;
//     imageUrl = reader.result;
//   };

//   reader.readAsDataURL(file);
// });
//const loadingMessage = document.getElementById("loadingContent");
formCreateBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  //let isValid = true;

//   if (title.value === "") {
//     isValid = false;
//     titleError.innerText = "Title is required.";
//   } else {
//     titleError.innerText = "";
//   }

//   if (content.value === "") {
//     isValid = false;
//     contentError.innerText = "Content is required.";
//   } else {
//     contentError.innerText = "";
//   }
  // if (author.value === "") {
  //   isValid = false;
  //   authorError.innerText = "author is required.";
  // } else {
  //   authorError.innerText = "";
  // }
  // if (date.value === "") {
  //   isValid = false;
  //   dateError.innerText = "data is required.";
  // } else {
  //   dateError.innerText = "";
  // }

//   if (isValid) {
//     loadingMessage.style.display = "block";
    createBlog();
  //}
});
async function createBlog() {
  //console.log(content.value);
  //const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
  //const contents = contentTags;
  //console.log(contents);
  //const titles = title.value;
  console.log(title.value);
  console.log(content.value);
  const token = localStorage.getItem("token");
  if (!fileInput.files || !fileInput.files[0]) {
    console.error("Please select image");
    return;
  }
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("image", fileInput.files[0]);
  //formCreateBlog.disabled = true;
  const url = "https://my-brand-be-2-bj1r.onrender.com";

  const response = await fetch(url + "/api/blogs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  //swal("Hello world!");
  console.log(data);
  if (data.status === 201) {
    loadingMessage.style.display = "none";
    swal("Blog created successfully")
      //alert("sent");
      .then(() => {
        location.reload(); // Reload the page after the user clicks OK
        //window.location.href = "./dashboard.html";
      });
  }
  //alert("Blog created successfully!!");
}
function checkAuthentication() {
  const token = localStorage.getItem("token");
  if (!token) {
    // Redirect to login page if token is not present
    window.location.href = "./logIn.html";
  }
}

// Call checkAuthentication when the dashboard page loads
window.addEventListener("DOMContentLoaded", () => {
  checkAuthentication();
});
