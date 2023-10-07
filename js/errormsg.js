import { email, emailError, password, passwordCheck, passwordError, passwordCheckError } from "./tags.js";
import { addEmailClass, addPasswordClass, addPasswordCheckClass } from "./addclass.js";

const TEST_EMAIL = "test@codeit.com";

function validateEmail(email) {
  const PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return PATTERN.test(email);
}

function addEmailErrorMsg() {
  if (!email.value) {
    addEmailClass("이메일을 입력하세요.");
    return false;
  } else if (!validateEmail(email.value)) {
    addEmailClass("올바른 이메일 주소가 아닙니다.");
    return false;
  } else if (location.pathname === "/pages/signup.html" && email.value === TEST_EMAIL) {
    addEmailClass("이미 사용중인 이메일입니다.");
    return false;
  }
  return true;
}

function deleteEmailErrorMsg() {
  if (email.parentElement.lastElementChild === emailError) {
    email.classList.remove("error");
    email.nextElementSibling.remove();
  }
}

function addPasswordErrorMsg() {
  if (!password.value) {
    addPasswordClass("비밀번호를 입력하세요.");
  }
}

function addPassWordErrorMsgSignup() {
  const STRING_CEHCK = /[a-zA-Z]/;
  const NUMBER_CHECK = /[0-9]/;
  if (password.value.length >= 8 && STRING_CEHCK.test(password.value) && NUMBER_CHECK.test(password.value)) {
    return true;
  } else {
    addPasswordClass("비밀번호는 영문, 숫자, 조합 8자 이상 입력해주세요.");
    return false;
  }
}

function deletePasswordErrorMsg() {
  if (password.parentElement.nextElementSibling === passwordError) {
    password.classList.remove("error");
    password.parentElement.nextElementSibling.remove();
  }
}

function addPasswordCheckErrorMsg() {
  if (password.value === passwordCheck.value) {
    return true;
  } else {
    addPasswordCheckClass("비밀번호가 일치하지 않아요.");
    return false;
  }
}

function deletePasswordCheckErrorMsg() {
  if (passwordCheck.parentElement.nextElementSibling === passwordCheckError) {
    passwordCheck.classList.remove("error");
    passwordCheck.parentElement.nextElementSibling.remove();
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
};
