import {
  emailInput, 
  passwordInput, 
  checkPasswordInput, 
  joinButton, 
  eyeButtonInPassword, 
  eyeButtonInCheckPassword
} from './tags.js';

import {
  checkEmail, 
  checkPassword, 
  showErrorMessage, 
  removeErrorMessage
} from './validation.js';

import { togglePasswordInPassword, togglePasswordInCheckPassword } from './togglePassword.js';
import { user } from './userInfo.js';

const borderRed = 'border-red';

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

function valiDateCheckPassword() {
  const passwordValue = passwordInput.value;
  const checkPasswordValue = checkPasswordInput.value;

  if (passwordValue !== checkPasswordValue) {
    showErrorMessage('checkPassword', '비밀번호가 일치하지 않아요.');
  } else {
    removeErrorMessage('checkPassword');
  }
}

function includeBorderRed(input) {
  return input.className.includes(borderRed);
}

function getJoin(e) {
  const emailValue = emailInput.value;

  e.preventDefault();

  if (!emailValue || includeBorderRed(emailInput)) {
    showErrorMessage('email', '이메일을 확인해주세요.');
  } else if (includeBorderRed(passwordInput)) {
    showErrorMessage('password', '비밀번호를 확인해주세요.');
  } else if (includeBorderRed(checkPasswordInput)) {
    showErrorMessage('checkPassword', '비밀번호가 일치하지 않아요.')
  } else {
    location.href = '../pages/folder.html';;
  }
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);
checkPasswordInput.addEventListener('focusout', valiDateCheckPassword);
checkPasswordInput.addEventListener('keypress', (e) => e.code === 'Enter' && getJoin());
joinButton.addEventListener('click', getJoin);
eyeButtonInPassword.addEventListener('click', togglePasswordInPassword);
eyeButtonInCheckPassword.addEventListener('click', togglePasswordInCheckPassword);
