import {
  showMessage,
  isEmpty,
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
  showValidEmailErrorMessage(email, emailLabel);
});

password.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(password, passwordLabel);
});

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (isCodeItLogin(email, password)) {
    window.location.href = window.location.origin + "/folder.html";
  }
  //  email과 password형식은 valid하지만, codeIt아이디가 아닐 때를 판단하고, 그에 따른 ui를 보이도록 리팩토링 해보세요.
  if (
    isEmailValid(email) &&
    isPasswordValid(password) &&
    !isCodeItLogin(email, password)
  ) {
    window.location.href = window.location.origin + "/404ErrorPage.html";
  }
});

eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(eyeIcon, password);
});
