import { email, password, passwordVisible, passwordCheckVisible } from './tags.js';
import { checkEmail, checkSignupPassword, checkPasswordMatch, addErrorMessageClass } from './errorMsg.js';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const CHECK_EMAIL = '이메일을 확인해주세요.';
const CHECK_PASSWORD = '비밀번호를 확인해주세요.';
const ALREADY_USE_EMAIL = '이미 사용중인 이메일입니다.';

const goToFolderPage = () => (location.href = '../pages/folder.html');

async function fetchClient(url, method, body) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function getToken(response, tokenType) {
  const result = response.data.accessToken;
  localStorage.setItem(tokenType, result);
  goToFolderPage();
}

function toggleEye(event) {
  event.preventDefault();
  const inputId = event.target.previousElementSibling;
  if (event.pointerType === 'mouse') {
    if (inputId.type === 'text') {
      inputId.type = 'password';
    } else {
      inputId.type = 'text';
    }
  }
}

async function login() {
  try {
    const loginContext = {
      email: email.value,
      password: password.value,
    };
    const response = await fetchClient('sign-in', 'POST', loginContext);
    getToken(response, 'access-token');
  } catch {
    addErrorMessageClass(email, CHECK_EMAIL);
    addErrorMessageClass(password, CHECK_PASSWORD);
  }
}

function handleLogin(event) {
  event.preventDefault();
  login();
}

async function checkDuplicationEmail() {
  try {
    const emailContext = {
      email: email.value,
    };
    await fetchClient('check-email', 'POST', emailContext);
  } catch {
    addErrorMessageClass(email, ALREADY_USE_EMAIL);
  }
}

async function signUp(event) {
  try {
    event.preventDefault();
    if (checkEmail() && checkSignupPassword() && checkPasswordMatch()) {
      checkDuplicationEmail(email.value);
    }
    const singUpContext = {
      email: email.value,
      password: password.value,
    };
    const response = await fetchClient('sign-up', 'POST', singUpContext);
    getToken(response, 'access-token');
  } catch {
    addErrorMessageClass(email, CHECK_EMAIL);
  }
}

async function enterSignup(event) {
  if (event.code === 'Enter') {
    signUp(event);
  }
}

async function togglePasswordVisible(event) {
  toggleEye(event);
  passwordVisible.classList.toggle('on');
}

async function togglePasswordCheckVisible(event) {
  toggleEye(event);
  passwordCheckVisible.classList.toggle('on');
}

export { handleLogin, signUp, enterSignup, togglePasswordCheckVisible, togglePasswordVisible, goToFolderPage };
