import {
  displayError,
  resetErrorMessage,
  togglePasswordVisibility,
} from "/utils/common.js";
import { isValidEmail } from "/utils/validation.js";
import {
  USERNAME_SELECTOR,
  PASSWORD_SELECTOR,
  LOGIN_BTN_SELECTOR,
  EMAIL_ERROR_TEXT_SELECTOR,
  PASSWORD_ERROR_TEXT_SELECTOR,
  TOGGLE_VISIBILITY_SELECTOR,
} from "/constants/selector.js";
import ERROR_MESSAGES from "/constants/errorMessages.js";
const {
  EMAIL_EMPTY,
  EMAIL_INVALID,
  PASSWORD_EMPTY,
  EMAIL_VERIFY,
  PASSWORD_VERIFY,
} = ERROR_MESSAGES;

if (localStorage.getItem("accessToken")) {
  location.href = "/folder";
}

const emailInput = document.querySelector(USERNAME_SELECTOR);
const passwordInput = document.querySelector(PASSWORD_SELECTOR);
const loginBtn = document.querySelector(LOGIN_BTN_SELECTOR);
const emailErrorText = document.querySelector(EMAIL_ERROR_TEXT_SELECTOR);
const passwordErrorText = document.querySelector(PASSWORD_ERROR_TEXT_SELECTOR);
const toggleVisibility = document.querySelector(TOGGLE_VISIBILITY_SELECTOR);

function checkEmailValidity() {
  const email = emailInput.value;
  if (!email) {
    displayError(emailInput, emailErrorText, EMAIL_EMPTY);
  } else if (!isValidEmail(email)) {
    displayError(emailInput, emailErrorText, EMAIL_INVALID);
  } else {
    resetErrorMessage(emailInput, emailErrorText);
  }
}

function checkPasswordInput() {
  const password = passwordInput.value;
  if (!password) {
    displayError(passwordInput, passwordErrorText, PASSWORD_EMPTY);
  } else {
    resetErrorMessage(passwordInput, passwordErrorText);
  }
}

emailInput.addEventListener("blur", checkEmailValidity);
passwordInput.addEventListener("blur", checkPasswordInput);

loginBtn.addEventListener("click", async function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.status === 200) {
    // 로그인 성공
    localStorage.setItem("accessToken", responseData.accessToken); // accessToken 저장
    location.href = "/folder";
  } else if (response.status === 400) {
    // 로그인 오류
    displayError(emailInput, emailErrorText, EMAIL_VERIFY);
    displayError(passwordInput, passwordErrorText, PASSWORD_VERIFY);
  }
});

toggleVisibility.addEventListener("click", function () {
  togglePasswordVisibility(passwordInput, toggleVisibility);
});
