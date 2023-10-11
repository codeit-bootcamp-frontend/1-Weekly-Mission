import {
  emailInput, passwordInput, loginButton, eyeButton1
} from './tags.js';

import {
  checkEmail, showErrorMessage, removeErrorMessage
} from './validation.js';

import { showPassword1 } from './showPW.js';
import { user } from './userInfo.js';

function valiDateEmail() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    showErrorMessage('email', '이메일을 입력해주세요.');
  } else if (!checkEmail(emailValue)) {
    showErrorMessage('email', '올바른 이메일 주소가 아닙니다.');
  } else {
    removeErrorMessage('email');
  }
}

function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    showErrorMessage('password', '비밀번호를 입력해주세요.');
  } else {
    removeErrorMessage('password');
  }
}

function getLogin(e) {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  e.preventDefault();

  if (emailValue === user.email && passwordValue === user.password) {
    location.href = '../pages/folder.html';
  } else if (emailValue !== user.email) {
    showErrorMessage('email', '이메일을 확인해주세요.');
    showErrorMessage('password', '비밀번호를 확인해주세요.');
  } else if (passwordValue !== user.password) {
    showErrorMessage('password', '비밀번호를 확인해주세요.');
  }
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);
passwordInput.addEventListener('keypress', (e) => e.code === 'Enter' && getLogin());
loginButton.addEventListener('click', getLogin);
eyeButton1.addEventListener('click', showPassword1);
