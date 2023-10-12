import {
  EMAIL_MAP,
  PASSWORD_MAP,
  showErrorMessageEffect,
  isEmailValid,
  isPasswordValid,
  isCodeItLogin,
  isPasswordMatch,
  passwordVisibility,
  REPASSWORD_MAP,
} from "./common.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const rePasswordLabel = document.querySelector(".re-password-label");
const eyeIcon = document.querySelector(".eye-on-image");
const reEyeIcon = document.querySelector(".re-eye-on-image");
const registerButton = document.querySelector(".register-button");

email.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = emailLabel.querySelector(".error-message");

  for (const state of ["empty", "notValid", "alreadyUsed"]) {
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
    } else if (state === "alreadyUsed") {
      if (EMAIL_MAP[state].checker(email)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    }
  }
  showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP.valid);
});

password.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = passwordLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (PASSWORD_MAP[state].checker(password)) {
        showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP[state]);
        return;
      }
    } else if (state === "notValid") {
      if (!PASSWORD_MAP[state].checker(password)) {
        showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP[state]);
        return;
      }
    }
  }
  showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP.valid);
});

rePassword.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = rePasswordLabel.querySelector(".error-message");
  for (const state of ["empty", "notMatch"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      console.log(REPASSWORD_MAP[state].checker);
      if (REPASSWORD_MAP[state].checker(rePassword)) {
        showErrorMessageEffect(
          rePassword,
          errorMsgsLabel,
          REPASSWORD_MAP[state]
        );
        return;
      }
    } else if (state === "notMatch") {
      if (!REPASSWORD_MAP[state].checker(password, rePassword)) {
        showErrorMessageEffect(
          rePassword,
          errorMsgsLabel,
          REPASSWORD_MAP[state]
        );
        return;
      }
    }
  }
  showErrorMessageEffect(rePassword, errorMsgsLabel, REPASSWORD_MAP.valid);
});

// 눈아이콘
eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(eyeIcon, password);
});

reEyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(reEyeIcon, rePassword);
});

registerButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    isEmailValid(email) &&
    isPasswordValid(password) &&
    isPasswordMatch(password, rePassword)
  ) {
    window.location.href = window.location.origin + "/folder.html";
  }
});
