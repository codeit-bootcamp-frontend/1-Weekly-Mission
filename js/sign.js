const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector(".signin-button");

const emailError = document.querySelector(".email-message");
const passwordError = document.querySelector(".password-message");

signinBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value == "test@codeit.com" && password.value == "codeit101") {
    location.href = "./folder.html";
    emailError.classList.remove("error-appear");
    passwordError.classList.remove("error-appear");
  } else if (
    email.value !== "test@codeit.com" &&
    password.value == "codeit101"
  ) {
    emailError.classList.add("error-appear");
    passwordError.classList.remove("error-appear");
  } else if (
    email.value == "test@codeit.com" &&
    password.value !== "codeit101"
  ) {
    emailError.classList.remove("error-appear");
    passwordError.classList.add("error-appear");
  } else {
    emailError.classList.add("error-appear");
    passwordError.classList.add("error-appear");
  }
});
