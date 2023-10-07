import { displayError, togglePasswordVisibility } from "/utils/common.js";
import { isValidEmail, isValidPassword } from "/utils/validation.js";
import {
  EMAIL_EMPTY,
  EMAIL_INVALID,
  EMAIL_TAKEN,
  PASSWORD_EMPTY,
  PASSWORD_MISMATCH,
} from "/constants/errorMessages.js";

const emailInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");

const loginBtn = document.querySelector("#loginBtn");

const emailErrorText = document.querySelector("#email-error");
const passwordErrorText = document.querySelector("#password-error");
const passwordCheckErrorText = document.querySelector("#password-check-error");

const toggleVisibility = document.querySelectorAll(".toggleVisibility");

function checkEmailValidity() {
  const email = emailInput.value;
  if (!email) {
    displayError(emailInput, emailErrorText, EMAIL_EMPTY);
    return false;
  } else if (!isValidEmail(email)) {
    displayError(emailInput, emailErrorText, EMAIL_INVALID);
    return false;
  } else if (email === "test@codeit.com") {
    displayError(emailInput, emailErrorText, EMAIL_TAKEN);
    return false;
  } else {
    displayError(emailInput, emailErrorText, "");
    return true;
  }
}

function checkPasswordValidity() {
  const password = passwordInput.value;
  if (!password) {
    displayError(passwordInput, passwordErrorText, PASSWORD_EMPTY);
    return false;
  } else if (password.length < 8 || !isValidPassword(password)) {
    displayError(
      passwordInput,
      passwordErrorText,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  } else {
    displayError(passwordInput, passwordErrorText, "");
    return true;
  }
}

function checkPasswordMatch() {
  if (passwordInput.value !== passwordCheckInput.value) {
    displayError(passwordCheckErrorText, PASSWORD_MISMATCH);
    return false;
  } else {
    displayError(passwordCheckErrorText, "");
    return true;
  }
}

emailInput.addEventListener("blur", checkEmailValidity);
passwordInput.addEventListener("blur", checkPasswordValidity);
passwordCheckInput.addEventListener("blur", checkPasswordMatch);

loginBtn.addEventListener("click", submitForm);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitForm();
  }
});

function submitForm() {
  if (checkEmailValidity() && checkPasswordValidity() && checkPasswordMatch()) {
    window.location.href = "/folder";
  }
}

toggleVisibility.forEach((icon) => {
  icon.addEventListener("click", function () {
    const inputBox = icon.previousElementSibling;
    togglePasswordVisibility(inputBox, icon);
  });
});
