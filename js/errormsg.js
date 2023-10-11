import { email, emailError, password, passwordCheck, passwordError, passwordCheckError } from "./tags.js";

const TEST_EMAIL = "test@codeit.com";
const INPUT_EMAIL = "이메일을 입력하세요.";
const INPUT_PASSWORD = "비밀번호를 입력하세요.";
const NOT_CORRECT_EMAIL = "올바른 이메일 주소가 아닙니다.";
const NOT_MATCH_PASSWORD = "비밀번호가 일치하지 않아요.";
const ALREADY_USE_EMAIL = "이미 사용중인 이메일입니다.";
const COMBINATION_PASSWORD = "비밀번호는 영문, 숫자, 조합 8자 이상 입력해주세요.";

function addErrorMessageClass(context, errorMessage) {
  const errorElement = document.createElement("div");
  context.classList.add("error");
  errorElement.classList.add("error-msg");
  errorElement.textContent = errorMessage;
  context.parentElement.append(errorElement);
}

function validateEmail(email) {
  const PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return PATTERN.test(email);
}

function addEmailErrorMsg() {
  if (!email.value) {
    addErrorMessageClass(email, INPUT_EMAIL);
    return false;
  } else if (!validateEmail(email.value)) {
    addErrorMessageClass(email, NOT_CORRECT_EMAIL);
    return false;
  } else if (location.pathname === "/pages/signup.html" && email.value === TEST_EMAIL) {
    addErrorMessageClass(email, ALREADY_USE_EMAIL);
    return false;
  } else {
    return true;
  }
}

function deleteEmailErrorMsg() {
  if (email.classList.value === "error") {
    email.classList.remove("error");
    email.nextElementSibling.remove();
  }
}

function addPasswordErrorMsg() {
  if (!password.value) {
    addErrorMessageClass(password, INPUT_PASSWORD);
  }
}

function addPassWordErrorMsgSignup() {
  const STRING_CEHCK = /[a-zA-Z]/;
  const NUMBER_CHECK = /[0-9]/;
  if (password.value.length >= 8 && STRING_CEHCK.test(password.value) && NUMBER_CHECK.test(password.value)) {
    return true;
  } else {
    addErrorMessageClass(password, COMBINATION_PASSWORD);
    return false;
  }
}

function deletePasswordErrorMsg() {
  password.classList.remove("error");
  password.nextElementSibling.remove();
}

function addPasswordCheckErrorMsg() {
  if (password.value === passwordCheck.value) {
    return true;
  } else {
    addErrorMessageClass(passwordCheck, NOT_MATCH_PASSWORD);
    return false;
  }
}

function deletePasswordCheckErrorMsg() {
  if (password.classList.value === "error") {
    passwordCheck.classList.remove("error");
    passwordCheck.nextElementSibling.remove();
  }
}

export {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPasswordErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  addPasswordCheckErrorMsg,
  deletePasswordCheckErrorMsg,
  addErrorMessageClass,
};
