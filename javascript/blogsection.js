const url= "https://my-brand-be-fe1g.onrender.com";
fetch(url + "/api/blogs")
  .then((res) => res.json())
  .then((output) =>{
    console.log(output);
      });