import {
  emailInput, 
  emailError, 
  passwordInput, 
  passwordError, 
  checkPasswordInput, 
  checkPasswordError
} from './tags.js'

const borderRed = 'border-red';

function checkEmail(email) {  
  const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  
  return emailRegExp.test(email);
}

function checkPassword(password) {
  const passwordRegExp = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/;

  return passwordRegExp.test(password);
}

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

export { 
  checkEmail, 
  checkPassword, 
  showErrorMessage, 
  removeErrorMessage 
};
