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

function validateEmail() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    showErrorMessage('email', '이메일을 입력해주세요.');
  } else if (!checkEmail(emailValue)) {
    showErrorMessage('email', '올바른 이메일 주소가 아닙니다.');
  } else {
    removeErrorMessage('email');
  }
}

function validatePassword() {
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
      localStorage.setItem('accessToken', result.data.accessToken);
      location.href = '../pages/folder.html';
    } else if (response.status === 400) {
      showErrorMessage('email', '이메일을 확인해주세요.');
      showErrorMessage('password', '비밀번호를 확인해주세요.');
    }
  } catch (error) {
    console.log(error);
  }
}

if (localStorage.getItem('accessToken')) {
  location.href = '../pages/folder.html';
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
passwordInput.addEventListener('keypress', (e) => e.code === 'Enter' && login());
loginButton.addEventListener('click', login);
eyeButtonInPassword.addEventListener('click', togglePasswordInPassword);
