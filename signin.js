import {
  isEmailValid,
  isPasswordValid,
  showErrorMessageEffect,
  isCodeItLogin,
  passwordVisibility,
  EMAIL_MAP,
  PASSWORD_MAP,
} from "./common.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const loginButton = document.getElementById("login-button");
const eyeIcon = document.querySelector(".eye-on-image");

// email
email.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = emailLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (EMAIL_MAP[state].checker(email)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    } else if (state === "notValid") {
      if (!EMAIL_MAP[state].checker(email)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    }
  }
  showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP.valid);
});

// pasword
password.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = passwordLabel.querySelector(".error-message");
  if (PASSWORD_MAP["empty"].checker(password)) {
    showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP["empty"]);
    return;
  }
  showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP["valid"]);
});

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (isCodeItLogin(email, password)) {
    window.location.href = window.location.origin + "/folder.html";
  }
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
