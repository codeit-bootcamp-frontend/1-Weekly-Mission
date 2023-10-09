import {
  displayError,
  resetErrorMessage,
  togglePasswordVisibility,
} from "/utils/common.js";
import { isValidEmail, isValidPassword } from "/utils/validation.js";
import {
  USERNAME_SELECTOR,
  PASSWORD_SELECTOR,
  PASSWORD_CHECK_SELECTOR,
  LOGIN_BTN_SELECTOR,
  EMAIL_ERROR_TEXT_SELECTOR,
  PASSWORD_ERROR_TEXT_SELECTOR,
  PASSWORD_CHECK_ERROR_TEXT_SELECTOR,
  TOGGLE_VISIBILITY_SELECTOR,
} from "/constants/selector.js";
import ERROR_MESSAGES from "/constants/errorMessages.js";

const {
  EMAIL_EMPTY,
  EMAIL_INVALID,
  EMAIL_TAKEN,
  PASSWORD_EMPTY,
  PASSWORD_MISMATCH,
  PASSWORD_REQUIREMENTS,
} = ERROR_MESSAGES;

const emailInput = document.querySelector(USERNAME_SELECTOR);
const passwordInput = document.querySelector(PASSWORD_SELECTOR);
const passwordCheckInput = document.querySelector(PASSWORD_CHECK_SELECTOR);
const loginBtn = document.querySelector(LOGIN_BTN_SELECTOR);
const emailErrorText = document.querySelector(EMAIL_ERROR_TEXT_SELECTOR);
const passwordErrorText = document.querySelector(PASSWORD_ERROR_TEXT_SELECTOR);
const passwordCheckErrorText = document.querySelector(
  PASSWORD_CHECK_ERROR_TEXT_SELECTOR
);
const toggleVisibility = document.querySelectorAll(TOGGLE_VISIBILITY_SELECTOR);

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
    resetErrorMessage(emailInput, emailErrorText);
    return true;
  }
}

function checkPasswordValidity() {
  const password = passwordInput.value;
  if (!password) {
    displayError(passwordInput, passwordErrorText, PASSWORD_EMPTY);
    return false;
  } else if (password.length < 8 || !isValidPassword(password)) {
    displayError(passwordInput, passwordErrorText, PASSWORD_REQUIREMENTS);
    return false;
  } else {
    resetErrorMessage(passwordInput, passwordErrorText);
    return true;
  }
}

function checkPasswordMatch() {
  if (passwordInput.value !== passwordCheckInput.value) {
    displayError(passwordCheckInput, passwordCheckErrorText, PASSWORD_MISMATCH);
    return false;
  } else {
    resetErrorMessage(passwordCheckInput, passwordCheckErrorText);
    return true;
  }
}

emailInput.addEventListener("blur", checkEmailValidity);
passwordInput.addEventListener("blur", checkPasswordValidity);
passwordCheckInput.addEventListener("blur", checkPasswordMatch);

loginBtn.addEventListener("click", submitForm);
passwordCheckInput.addEventListener("keydown", function (event) {
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
