const form = document.getElementById('form')
const email = document.getElementById('input1')
const pass = document.getElementById('input2')

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});
const verError = (Element, message) => {
  const errorControl = Element.parentElement;
  const showError = errorControl.querySelector('.error');

  showError.innerText = message;
  errorControl.classList.add('error')
  errorControl.classList.remove('success')
}
const verPass = Element => {
  const errorControl = Element.parentElement;
  const showError = errorControl.querySelector('.error');

  showError.innerText = '';
  errorControl.classList.add('success')
  errorControl.classList.remove('error')
}
const checkEmail = email => {
  const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return sign.test(String(email).toLowerCase());
}
function validateInputs() {
  const inEmail = email.value.trim();
  const firstPass = pass.value.trim();

  if (inEmail === '') {
    verError(email, 'Email field is Required!');
  }
  else if (!checkEmail(inEmail)) {
    verError(email, 'Enter the valid email!');
  }
  else {
    if (firstPass === '') {
      verError(pass, 'Password is required!')
    } else if (firstPass.length < 8) {
      verError(pass, 'Password must be at least 8 character!')
    }
    else {
      const body = {
        email: inEmail,
        password: firstPass
      };

      const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
   e.preventDefault()
  const formData = new FormData(form)
  const userData ={
    email:formData.get('email'),
    password:formData.get('password')
  }
  try {
    const res = await fetch('https://my-brand-be-2-bj1r.onrender.com/api/users/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    if ( !res.ok){
        alert("log is not enabled")
        window.location.reload()
    }
    const resData = await res.json()
    console.log(resData)
  const token = resData.token
    localStorage.setItem('token',token)
    window.location.href ='dashboard.html'
    console.log(resData)
  } catch (error) {
    console.log({error:error.message})
  }
})















    }

  }
}