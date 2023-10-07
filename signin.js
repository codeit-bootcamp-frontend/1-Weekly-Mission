import {
  showMessage,
  isNotEmpty,
  showEmptyErrorMessage,
  isEmailValid,
  isPasswordValid,
  showValidPasswordErrorMessage,
  showValidEmailErrorMessage,
  isCodeItLogin,
  passwordVisibility,
} from "./common.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const loginButton = document.getElementById("login-button");
const eyeIcon = document.querySelector(".eye-on-image");

email.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(email, emailLabel);
  if (isNotEmpty(email)) {
    showValidEmailErrorMessage(email, emailLabel);
  }
});

password.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(password, passwordLabel);
});

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (isCodeItLogin(email, password)) {
    window.location = "http://127.0.0.1:5500/folder.html";
  }
  if (
    isEmailValid(email) &&
    isPasswordValid(password) &&
    !isCodeItLogin(email, password)
  ) {
    console.log("어라?");
  }
});

eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(eyeIcon, password);
});
