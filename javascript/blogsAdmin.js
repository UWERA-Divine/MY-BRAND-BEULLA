const blogs =document.querySelector(`.crud__list`);
let list = "";
fetch (`https://my-brand-be-2-bj1r.onrender.com/api/blogs`)
.then(res=>res.json())
.then(result=>{
    console.log(result)
    result.forEach(blog => {
        list +=
        `<div key=${blog._id}>
            <h4>${blog.title}</h4>
            <div class="control__btns">
            <button class="update">
            <a href="#" class="update" key=${blog._id}>Edit</a>
          </button>
              <button class="delete" key=${blog._id}>Delete</button>
            </div>
            <img src="${blog.imageUrl}" alt="#" />
          </div> `
    })
    blogs.innerHTML = list;
})
// .catch(err=>{
//     console.log(err)
// })
blogs.addEventListener('click', (e)=>{
    let target = e.target
    //console.log("target", targeted)
    if(target.classList.contains('update')){
    let id = target.getAttribute('key');
    console.log(id)
    window.location.href = `./update_blog.html?id=${id}`;    
    }
});
blogs.addEventListener('click', (e)=>{
    let target = e.target
    //console.log("target", targeted)
    if(target.classList.contains('delete')){
    let id = target.getAttribute('key');
    //window.location.href = ""
    //console.log(id)
    let url = `https://my-brand-be-2-bj1r.onrender.com/api/blogs/${id}`;
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover the blog!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          fetch(`https://my-brand-be-2-bj1r.onrender.com/api/blogs/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(id),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              swal("Blog deleted successfully").then((response) => {
                location.reload();
              });
              //alert("Blog deleted successfully!");
            })
            .catch((error) => console.error("Error deleting blog:", error));
        } else {
          //console.log("Ok");
        }
      });
    }
});