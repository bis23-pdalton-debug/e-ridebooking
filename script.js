const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
const recoverBtn = document.getElementById('recoverPassword');
const resetPage = document.getElementById('resetPassword');
const backToLogin = document.getElementById('backToLogin');

// 👉 OPEN RESET PAGE
recoverBtn.addEventListener('click', function(e){
  e.preventDefault();

  signInForm.style.display = "none";
  signUpForm.style.display = "none";
  resetPage.style.display = "block";

  // ✅ AUTO-FILL EMAIL
  document.getElementById('resetEmail').value =
    document.getElementById('email').value;
});

// 👉 BACK TO LOGIN
backToLogin.addEventListener('click', function(){
  resetPage.style.display = "none";
  signInForm.style.display = "block";
});
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

  if (password.type === "password") {
    password.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }

});
