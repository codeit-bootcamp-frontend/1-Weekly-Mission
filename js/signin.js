import {
  emailInput, emailError, 
  passwordInput, passwordError, 
  checkPasswordInput, checkPasswordError, 
  loginButton, eyeButton1
} from './tags.js';

//import { showPassword1 } from './showPW.js';

// 유저 정보
const user = {
  email: "test@codeit.com",
  password: "codeit101"
};

// 추가 스타일 클래스 변수
const borderRed = 'border-red';
const eyeOn = 'on';

// 유효성 검사 함수
function checkEmail(email) {  
  let emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
  return emailRegExp.test(email);
}

function checkPassword(password) {
  let passwordRegExp = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/;

  return passwordRegExp.test(password);
}

// 에러메시지 표시 함수
function showErrorMessage(label, message) { 
  if (label === 'email') {
    emailError.textContent = message;
    emailInput.classList.add(borderRed);
  } else if (label === 'password') {
    passwordError.textContent = message;
    passwordInput.classList.add(borderRed);
  } else if (label === 'checkPassword') {
    checkPasswordError.textContent = message;
    checkPasswordInput.classList.add(borderRed);
  }
}

// 표시된 에러메시지 삭제 함수
function removeErrorMessage(label) {
  if (label === 'email') {
    emailError.textContent = '';
    emailInput.classList.remove(borderRed);
  } else if (label === 'password') {
    passwordError.textContent = '';
    passwordInput.classList.remove(borderRed);
  } else if (label === 'checkPassword') {
    checkPasswordError.textContent = '';
    checkPasswordInput.classList.remove(borderRed);
  }
}

// 이메일 에러메시지 
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

// 비밀번호 에러메시지
function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    showErrorMessage('password', '비밀번호를 입력해주세요.');
  } else {
    removeErrorMessage('password');
  }
}

// 로그인 버튼 클릭 시
function getLogin() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === user.email && passwordValue === user.password) {
    location.href = '../pages/folder.html';
  } else if (emailValue !== user.email) {
    showErrorMessage('email', '이메일을 확인해주세요.');
    showErrorMessage('password', '비밀번호를 확인해주세요.');
  } else if (passwordValue !== user.password) {
    showErrorMessage('password', '비밀번호를 확인해주세요.');
  }
}

// eye-button 클릭시 스타일 적용
function changeTypeEyeButton1(type) {
  eyeButton1.classList.toggle(eyeOn);
  passwordInput.type = type;
}

// eye-button 클릭시 표현 함수
function showPassword1() {
  if (passwordInput.type === "password") {
    changeTypeEyeButton1('text');
  } else {
    changeTypeEyeButton1('password');
  }
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);
passwordInput.addEventListener('keypress', (e) => e.code === 'Enter' && getLogin());
loginButton.addEventListener('click', getLogin);
eyeButton1.addEventListener('click', showPassword1);
