// 요소노드 선택
const emailInput = document.querySelector('#form--input__email');
const emailError = document.querySelector('#form--error-message__email');
const passwordInput = document.querySelector('#form--input__password');
const passwordError = document.querySelector('#form--error-message__password');
const loginButton = document.querySelector('#form--login-button');
const eyeButton = document.querySelector('.form--eye-button');

// 유저 정보
const user = {
  email: "test@codeit.com",
  password: "codeit101"
};

// 추가 스타일 클래스 변수
const borderRed = 'border-red';
const eyeOn = 'on';

function checkEmail(email) {  
  let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
  return regExp.test(email);
};

function showErrorMessage(label, message) { 
  if (label === 'email') {
    emailError.textContent = message;
    emailInput.classList.add(borderRed);
  } else if (label === 'password') {
    passwordError.textContent = message;
    passwordInput.classList.add(borderRed);
  }
};

function removeErrorMessage(label) {
  if (label === 'email') {
    emailError.textContent = '';
    emailInput.classList.remove(borderRed);
  } else if (label === 'password') {
    passwordError.textContent = '';
    passwordInput.classList.remove(borderRed);
  }
};

function valiDateEmail() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    showErrorMessage('email', '이메일을 입력해주세요.');
  } else if (!checkEmail(emailValue)) {
    showErrorMessage('email', '올바른 이메일 주소가 아닙니다.');
    emailInput.classList.add(borderRed);
  } else {
    removeErrorMessage('email');
  }
}

emailInput.addEventListener('focusout', valiDateEmail);

function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    showErrorMessage('password', '비밀번호를 입력해주세요.');
  } else {
    removeErrorMessage('password');
  };
};

passwordInput.addEventListener('focusout', valiDatePassword);

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
  };
};

loginButton.addEventListener('click', getLogin);

function changeTypeEyeButton(type) {
  eyeButton.classList.toggle(eyeOn);
  passwordInput.type = type;
};

function showPassword() {
  if (passwordInput.type === "password") {
    changeTypeEyeButton('text');
  } else {
    changeTypeEyeButton('password');
  };
};

eyeButton.addEventListener('click', showPassword);
