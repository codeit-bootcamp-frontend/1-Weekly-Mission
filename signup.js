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
const rePassword = document.getElementById("re-password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const rePasswordLabel = document.querySelector(".re-password-label");
const eyeIcon = document.querySelector(".eye-on-image");
const reEyeIcon = document.querySelector(".re-eye-on-image");
const registerButton = document.querySelector(".register-button");
function isPasswordMatch(password, rePassword) {
  if (password.value.trim() === rePassword.value.trim()) {
    return true;
  }
  return false;
}
function showPasswordMatchErrorMessage(password, rePassword, repasswordLabel) {
  if (!isPasswordMatch(password, rePassword) && !isEmpty(rePassword)) {
    const errorMsgs = repasswordLabel.querySelector(".error-message");
    errorMsgs.innerText = "비밀번호가맞지않습니다";
    errorMsgs.style.color = "red";
    rePassword.style.border = "3px solid red";
  }
}

function alreadyUsedEmail(email, emailLabel) {
  if (email.value.trim() === "test@codeit.com") {
    const errorMsgs = emailLabel.querySelector(".error-message");
    errorMsgs.innerText = "이미 사용 중인 이메일입니다";
    errorMsgs.style.color = "red";
    email.style.border = "3px solid red";
  }
}

email.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(email, emailLabel);
  showValidEmailErrorMessage(email, emailLabel);
  alreadyUsedEmail(email, emailLabel);
});

password.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(password, passwordLabel);
  showValidPasswordErrorMessage(password, passwordLabel);
});

rePassword.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(rePassword, rePasswordLabel);
  showPasswordMatchErrorMessage(password, rePassword, rePasswordLabel);
});

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
