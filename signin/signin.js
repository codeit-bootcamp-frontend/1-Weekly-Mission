import { displayError, togglePasswordVisibility } from "/utils/common.js";
import { isValidEmail } from "/utils/validation.js";
import {
  EMAIL_EMPTY,
  EMAIL_INVALID,
  PASSWORD_EMPTY,
  EMAIL_VERIFY,
  PASSWORD_VERIFY,
} from "/constants/errorMessages.js";

const emailInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const loginBtn = document.querySelector("#loginBtn");

const emailErrorText = document.querySelector("#email-error");
const passwordErrorText = document.querySelector("#password-error");

const toggleVisibility = document.querySelector(".toggleVisibility");

function checkEmailValidity() {
  const email = emailInput.value;
  if (!email) {
    displayError(emailInput, emailErrorText, EMAIL_EMPTY);
  } else if (!isValidEmail(email)) {
    displayError(emailInput, emailErrorText, EMAIL_INVALID);
  } else {
    displayError(emailInput, emailErrorText, "");
  }
}

function checkPasswordInput() {
  const password = passwordInput.value;
  if (!password) {
    displayError(passwordInput, passwordErrorText, PASSWORD_EMPTY);
  } else {
    displayError(passwordInput, passwordErrorText, "");
  }
}

emailInput.addEventListener("blur", checkEmailValidity);
passwordInput.addEventListener("blur", checkPasswordInput);

loginBtn.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "/folder";
  } else {
    displayError(emailInput, emailErrorText, EMAIL_VERIFY);
    displayError(passwordInput, passwordErrorText, PASSWORD_VERIFY);
  }
});

toggleVisibility.addEventListener("click", function () {
  togglePasswordVisibility(passwordInput, toggleVisibility);
});
