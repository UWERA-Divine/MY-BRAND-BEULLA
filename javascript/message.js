// const data = {
//     name: name.value,
//     email: email.value,
//     description: message.value,
//   };
const form = document.querySelector("#contact-form");
const nameInput= document.querySelector("#nameInput")
const emailInput= document.querySelector("#emailInput")
const messageInput= document.querySelector("#messageInput")
const data = {
  name: nameInput.value,
  email: emailInput.value,
  description: messageInput.value,
};
form.addEventListener("submit", (e)=>{
  e.prevenntDefault();
 console.log(data)
 })
  // console.log(data);
  // const url = "https://my-brand-be-2-bj1r.onrender.com";
  // fetch( "https://my-brand-be-2-bj1r.onrender.com/api/messages", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((output) => {
  //     if (output.message === "sent") {
  //       //messageError.innerHTML = "sent";
  //       swal("Success", "Message sent!", "success")
  //         //alert("sent");
  //         .then(() => {
  //           location.reload(); // Reload the page after the user clicks OK
  //         });
  //     }
  //   })
  //   .catch((err) => {
  //     console.err("error", err);
  //   });