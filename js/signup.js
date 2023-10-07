import {
  emailInput, emailError, 
  passwordInput, passwordError, 
  checkPasswordInput, checkPasswordError, 
  joinButton, 
  eyeButton1, eyeButton2
} from './tags.js';

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
  } else if (emailValue === user.email) {
    showErrorMessage('email', '이미 사용 중인 이메일입니다.');
  } else {
    removeErrorMessage('email');
  }
}

// 비밀번호 에러메시지
function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue || !checkPassword(passwordValue)) {
    showErrorMessage('password', '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else {
    removeErrorMessage('password');
  }
}

// 비밀번호 확인 함수
function valiDateCheckPassword() {
  const passwordValue = passwordInput.value;
  const checkPasswordValue = checkPasswordInput.value;

  if (passwordValue !== checkPasswordValue) {
    showErrorMessage('checkPassword', '비밀번호가 일치하지 않아요.');
  } else {
    removeErrorMessage('checkPassword');
  }
}

// 회원가입 버튼 함수
function includeBorderRed(el) {
  return el.className.includes(borderRed);
}

function getJoin() {
  const emailValue = emailInput.value;

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

function changeTypeEyeButton2(type) {
  eyeButton2.classList.toggle(eyeOn);
  checkPasswordInput.type = type;
}

function showPassword2() {
  if (checkPasswordInput.type === "password") {
    changeTypeEyeButton2('text');
  } else {
    changeTypeEyeButton2('password');
  }
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);
checkPasswordInput.addEventListener('focusout', valiDateCheckPassword);
checkPasswordInput.addEventListener('keypress', (e) => e.code === 'Enter' && getJoin());
joinButton.addEventListener('click', getJoin);
eyeButton1.addEventListener('click', showPassword1);
eyeButton2.addEventListener('click', showPassword2);
