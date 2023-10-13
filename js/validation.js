import {
  emailInput, 
  emailError, 
  passwordInput, 
  passwordError, 
  passwordCheckInput, 
  passwordCheckError
} from './tags.js'

const errorMessageClass = 'border-red';

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
    emailInput.classList.add(errorMessageClass);
  } else if (label === 'password') {
    passwordError.textContent = message;
    passwordInput.classList.add(errorMessageClass);
  } else if (label === 'passwordCheck') {
    passwordCheckError.textContent = message;
    passwordCheckInput.classList.add(errorMessageClass);
  }
}

function removeErrorMessage(label) {
  if (label === 'email') {
    emailError.textContent = '';
    emailInput.classList.remove(errorMessageClass);
  } else if (label === 'password') {
    passwordError.textContent = '';
    passwordInput.classList.remove(errorMessageClass);
  } else if (label === 'passwordCheck') {
    passwordCheckError.textContent = '';
    passwordCheckInput.classList.remove(errorMessageClass);
  }
}

export { 
  checkEmail, 
  checkPassword, 
  showErrorMessage, 
  removeErrorMessage 
};
