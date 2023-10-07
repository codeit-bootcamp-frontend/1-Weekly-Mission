import { displayError, togglePasswordVisibility } from "/utils/common.js";

import { isValidEmail } from "/utils/validation.js";

const emailInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const loginBtn = document.querySelector("#loginBtn");

const emailErrorText = document.querySelector("#email-error");
const passwordErrorText = document.querySelector("#password-error");

const toggleVisibility = document.querySelector(".toggleVisibility");

function checkEmailValidity() {
  const email = emailInput.value;
  if (!email) {
    displayError(emailInput, emailErrorText, "이메일을 입력해주세요.");
  } else if (!isValidEmail(email)) {
    displayError(emailInput, emailErrorText, "올바른 이메일 주소가 아닙니다.");
  } else {
    displayError(emailInput, emailErrorText, "");
  }
}

function checkPasswordInput() {
  const password = passwordInput.value;
  if (!password) {
    displayError(passwordInput, passwordErrorText, "비밀번호를 입력해주세요.");
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
    displayError(emailInput, emailErrorText, "이메일을 확인해주세요.");
    displayError(passwordInput, passwordErrorText, "비밀번호를 확인해주세요.");
  }
});

toggleVisibility.addEventListener("click", function () {
  togglePasswordVisibility(passwordInput, toggleVisibility);
});
