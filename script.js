let submitButton = document.querySelector("#submit-btn");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let passField = document.querySelector("#pass-field");

confirmPassword.addEventListener("input", (e) => {
  if (password.value != confirmPassword.value) {
    passField.classList.add("input-error");
  } else {
    passField.classList.remove("input-error");
  }
});
