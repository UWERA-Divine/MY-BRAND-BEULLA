const form = document.getElementById('form')
var firstname = document.getElementById('n1')
var lastname = document.getElementById('n2')
// const locate = document.getElementById('name_3')
const email = document.getElementById('input1')
const password = document.getElementById('input2')
const confirm = document.getElementById('submit')

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});
    const verError = (Element,message) => {
        const errorControl = Element.parentElement;
        const showError = errorControl.querySelector('.error');

        showError.innerText = message;
        errorControl.classList.add('error')
        errorControl.classList.remove('success')
    }
    const verPass = Element =>{
        const errorControl = Element.parentElement;
        const showError = errorControl.querySelector('.error');

        showError.innerText = '';
        errorControl.classList.add('success')
        errorControl.classList.remove('error')
    }
    const checkEmail = email =>{
        const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return sign.test(String(email).toLowerCase());
    }

function validateInputs(){
    const surName = firstname.value.trim();
    const secondname = lastname.value.trim();
    const inEmail = email.value.trim();
    // const oneLocate = locate.value.trim();
    const firstPass = password.value.trim();
    const secPass = confirm.value.trim();

    if(surName === ''){
        verError(firstname, 'Name field is required!');
    } else if(surName < 4){
        verError(firstname, 'username must not be less than 4 character')
    }
    else{
        // verPass(userNam);

        if(inEmail ===''){
            verError(email, 'Email field is Required!');
        }
        else if(!checkEmail(inEmail)){
            verError(email, 'Enter the valid email!');
        }
        // else{
        //     // verPass(email)
        //     if(oneLocate === ''){
        //         verError(locate, 'Location field is required!');
        //     }
            else{
                // verPass(locate);
                if(firstPass === ''){
                    verError(password, 'Password is required!')
                }else if(firstPass.length < 8){
                    verError(password, 'Password must be at least 8 character!')
                }
                else{
                    // verPass(password)
                    if(secPass === ''){
                        verError(confirm, 'Please confirm the password!');
                    }else if(secPass !== firstPass){
                        verError(confirm, 'Password does not match');
                    }
                    else{
                        // verPass(confirm);
                        // console.log('validated!');

                        const body = {
                            username: fullName,
                            email: inEmail,
                            password: firstPass
                        }

                        
        // Function to perform login
function loginUser(body) {
    // Assuming you're using fetch for API calls
    fetch('https://my-brand-be-2-bj1r.onrender.com/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response => {
      if (response.ok) {
        // User created successfully
        console.log("User create successfully");
        showToast("Account created successfully");
        window.location.href = "/LogIn/Login.html";
      } else {
        // creating account failed
        console.error("creating account failed");
        showToast("Creating account failed");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      showToast("Error occurred");
    });
  }
  
  // Function to show toast notification
  function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
    }).showToast();
  }
  
  loginUser(body);
                    }

                }

            }

        }

    }










    

