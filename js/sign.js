const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector(".signin-button");

const eyeBtn = document.querySelector(".eye-slashed");

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

email.addEventListener("blur", function () {
  if (!email.value) {
    emailError.classList.add("error-appear");
  } else if (!isValidEmail(email.value)) {
    emailError.classList.add("error-appear");
  } else {
    emailError.classList.remove("error-appear");
  }
});

function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
  if (pattern.test(email) === false) {
    return false;
  } else {
    return true;
  }
}
