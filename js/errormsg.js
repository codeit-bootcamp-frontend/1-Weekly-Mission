import { email, password, passwordCheck } from './tags.js';

const INPUT_EMAIL = '이메일을 입력하세요.';
const INPUT_PASSWORD = '비밀번호를 입력하세요.';
const NOT_CORRECT_EMAIL = '올바른 이메일 주소가 아닙니다.';
const NOT_MATCH_PASSWORD = '비밀번호가 일치하지 않아요.';
const COMBINATION_PASSWORD = '비밀번호는 영문, 숫자, 조합 8자 이상 입력해주세요.';

function addErrorMessageClass(context, errorMessage) {
  if (context.classList.value !== 'error') {
    const errorElement = document.createElement('div');
    context.classList.add('error');
    errorElement.classList.add('error-msg');
    errorElement.textContent = errorMessage;
    context.parentElement.append(errorElement);
  }
}

function validateEmail(email) {
  const PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return PATTERN.test(email);
}

function checkEmail() {
  if (!email.value) {
    addErrorMessageClass(email, INPUT_EMAIL);
  } else if (!validateEmail(email.value)) {
    addErrorMessageClass(email, NOT_CORRECT_EMAIL);
  } else {
    return true;
  }
}

function deleteEmailErrorMsg() {
  if (email.classList.value === 'error') {
    email.classList.remove('error');
    email.nextElementSibling.remove();
  }
}

function checkPassword() {
  if (!password.value) {
    addErrorMessageClass(password, INPUT_PASSWORD);
  }
}

function checkSignupPassword() {
  const INPUT_CEHCK = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  if (INPUT_CEHCK.test(password.value)) {
    return true;
  } else {
    addErrorMessageClass(password, COMBINATION_PASSWORD);
    return false;
  }
}

function deletePasswordErrorMsg() {
  if (password.classList.value === 'error') {
    password.classList.remove('error');
    password.nextElementSibling.nextElementSibling.remove();
  }
}

function checkPasswordMatch() {
  if (password.value === passwordCheck.value) {
    return true;
  } else {
    addErrorMessageClass(passwordCheck, NOT_MATCH_PASSWORD);
    return false;
  }
}

function deletePasswordCheckErrorMsg() {
  if (passwordCheck.classList.value === 'error') {
    passwordCheck.classList.remove('error');
    passwordCheck.nextElementSibling.nextElementSibling.remove();
  }
}

export {
  checkEmail,
  deleteEmailErrorMsg,
  checkPassword,
  checkSignupPassword,
  deletePasswordErrorMsg,
  checkPasswordMatch,
  deletePasswordCheckErrorMsg,
  addErrorMessageClass,
};
