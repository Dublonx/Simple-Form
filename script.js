// Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  
  let valid = true;
  
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  
  // if statement
  if (name === "") {
    nameError.innerText = "Name is required!";
    valid = false;
  }
  
  if (email === "") {
    emailError.innerText = "Email is required!";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.innerText = "Invalid email format!";
    valid = false;
  }
  
  if (password === "") {
    passwordError.innerText = "Password is required!";
    valid = false;
  } else if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 chars!";
    valid = false;
  }
  
  return valid;
}