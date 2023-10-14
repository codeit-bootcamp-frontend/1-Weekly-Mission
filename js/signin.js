import {
  emailInput,
  passwordInput,
  loginButton,
  eyeButtonInPassword
} from './tags.js';

import {
  checkEmail,
  showErrorMessage,
  removeErrorMessage
} from './validation.js';

import { togglePasswordInPassword } from './togglePassword.js';

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

async function login(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue
      })
    });
    const result = await response.json();

    if (response.status === 200) {
      localStorage.setItem('login-token', result.data.accessToken);
      //setTimeout(() => { localStorage.removeItem('login-token')}, 1000 * 60 * 60);
      return location.href = '../pages/folder.html';
    } else if (response.status === 400) {
      showErrorMessage('email', '이메일을 확인해주세요.');
      showErrorMessage('password', '비밀번호를 확인해주세요.');
    }
  } catch (error) {
    console.log(error);
  }
}

if (localStorage.getItem('login-token')) {
  location.href = '../pages/folder.html';
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);
passwordInput.addEventListener('keypress', (e) => e.code === 'Enter' && login());
loginButton.addEventListener('click', login);
eyeButtonInPassword.addEventListener('click', togglePasswordInPassword);
