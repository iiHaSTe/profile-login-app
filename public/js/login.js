/***********************************************************************************************************************************************************************************************************************************************************************************************/

const email = document.getElementById("email");
const pass = document.getElementById("password");
const emailIcon = document.getElementById("email-icon");
const passIcon = document.getElementById("pass-icon");



const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig
email.addEventListener('input', ()=>{
  if (email.value.match(emailPattern)){
    email.style.borderColor = "rgb(27, 194, 48)";
    emailIcon.style.color = "rgb(27, 194, 48)";
  }else if (email.value.length === 0){
    email.style.borderColor = "rgb(213, 213, 213)";
    emailIcon.style.color = "grey";
  }else{
    email.style.borderColor = "rgb(194, 70, 27)";
    emailIcon.style.color = "rgb(194, 70, 27)";
  }
});
pass.addEventListener('input', ()=>{
  if (pass.value.length >= 8){
    pass.style.borderColor = "rgb(27, 194, 48)";
    passIcon.style.color = "rgb(27, 194, 48)";
  }else if (pass.value.length === 0){
    pass.style.borderColor = "rgb(213, 213, 213)";
    passIcon.style.color = "grey";
  }else{
    pass.style.borderColor = "rgb(194, 70, 27)";
    passIcon.style.color = "rgb(194, 70, 27)";
  }
});

passIcon.addEventListener("click", ()=>{
  if (passIcon.classList.toggle("fa-lock-open"))
    pass.setAttribute("type", "text");
  else
    pass.setAttribute("type", "password");
});
