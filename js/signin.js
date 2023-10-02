// 요소노드 선택
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');
const passwordInput = document.querySelector('#password-input');
const passwordError = document.querySelector('#password-error');
const loginButton = document.querySelector('#login-button');
const eyeButton = document.querySelector('.form--eye-button');

const borderRed = "border-red";
const eyeOn = "on";

// 유저 정보
const userEmail = "test@codeit.com";
const userePassword = "codeit101";

// 이메일 유효성 검사 함수
function checkEmail(email) {  
  let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
  return regExp.test(email);
};

function valiDateEmail() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailError.textContent = '이메일을 입력해주세요.';
    emailInput.classList.add(borderRed);
  } else if (!checkEmail(emailValue)) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    emailInput.classList.add(borderRed);
  } else {
    emailError.textContent = '';
    emailInput.classList.remove(borderRed);
  }
}

function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordInput.classList.add(borderRed);
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove(borderRed);
  };
};

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);

function getLogin() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === userEmail && passwordValue === userePassword) {
    location.href = '../pages/folder.html';
  } else if (emailValue !== userEmail) {
    emailError.textContent = '이메일을 확인해주세요.';
    passwordError.textContent = '비밀번호를 확인해주세요.';
    emailInput.classList.add(borderRed);
  } else if (passwordValue !== userePassword) {
    passwordError.textContent = '비밀번호를 확인해주세요.';
    passwordInput.classList.add(borderRed);
  };
};

loginButton.addEventListener('click', getLogin);

function showPassword() {
  if (passwordInput.type === "password") {
    eyeButton.classList.toggle(eyeOn);
    passwordInput.type = "text";
  } else {
    eyeButton.classList.toggle(eyeOn);
    passwordInput.type = "password"
  };
};

eyeButton.addEventListener('click', showPassword);
