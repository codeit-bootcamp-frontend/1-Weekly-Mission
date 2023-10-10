import {
  emailInput, emailError, 
  passwordInput, passwordError, 
  checkPasswordInput, checkPasswordError, 
  loginButton, joinButton, 
  eyeButton1, eyeButton2
} from './tags.js'

const borderRed = 'border-red';

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

export { checkEmail, checkPassword, showErrorMessage, removeErrorMessage };
