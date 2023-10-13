import {
  emailInput, 
  passwordInput, 
  passwordCheckInput, 
  joinButton, 
  eyeButtonInPassword, 
  eyeButtonInPasswordCheck
} from './tags.js';

import {
  checkEmail, 
  checkPassword, 
  showErrorMessage, 
  removeErrorMessage
} from './validation.js';

import { togglePasswordInPassword, togglePasswordInPasswordCheck } from './togglePassword.js';
import { user } from './userInfo.js';

const errorMessageClass = 'border-red';

function valiDateEmail() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    showErrorMessage('email', '이메일을 입력해주세요.');
  } else if (!checkEmail(emailValue)) {
    showErrorMessage('email', '올바른 이메일 주소가 아닙니다.');
  } else if (emailValue === user.email) {
    showErrorMessage('email', '이미 사용 중인 이메일입니다.');
  } else {
    removeErrorMessage('email');
  }
}

function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue || !checkPassword(passwordValue)) {
    showErrorMessage('password', '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else {
    removeErrorMessage('password');
  }
}

function valiDatePasswordCheck() {
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;

  if (passwordValue !== passwordCheckValue) {
    showErrorMessage('passwordCheck', '비밀번호가 일치하지 않아요.');
  } else {
    removeErrorMessage('passwordCheck');
  }
}

function hasErrorMessageClass(input) {
  return input.className.includes(errorMessageClass);
}

function join(e) {
  const emailValue = emailInput.value;

  e.preventDefault();

  if (!emailValue || hasErrorMessageClass(emailInput)) {
    showErrorMessage('email', '이메일을 확인해주세요.');
  } else if (hasErrorMessageClass(passwordInput)) {
    showErrorMessage('password', '비밀번호를 확인해주세요.');
  } else if (hasErrorMessageClass(passwordCheckInput)) {
    showErrorMessage('passwordCheck', '비밀번호가 일치하지 않아요.')
  } else {
    location.href = '../pages/folder.html';;
  }
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);
passwordCheckInput.addEventListener('focusout', valiDatePasswordCheck);
passwordCheckInput.addEventListener('keypress', (e) => e.code === 'Enter' && join());
joinButton.addEventListener('click', join);
eyeButtonInPassword.addEventListener('click', togglePasswordInPassword);
eyeButtonInPasswordCheck.addEventListener('click', togglePasswordInPasswordCheck);
