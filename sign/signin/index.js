import { isValidEmail } from '../../utils/validation.js';


// const emailInput = document.querySelector('#email');
const pwdInput = document.querySelector('#password');
const loginBtn = document.querySelector('.btn-login');
const pwdToggleIcon = document.querySelector('#toggle-eye');


const emailField = document.querySelector('.email-field');
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-message');

function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailField, '이메일을 입력해주세요.');
  } else if (!isValidEmail(email)) {
    addErrorMessage(emailField, '올바른 이메일을 입력해주세요.');
  } else {
    removeErrorMessage(emailField, emailErrorMessage);
  }
}

function addErrorMessage(inputField, errorMessage) {
  inputField.classList.add('error');
  emailErrorMessage.textContent = errorMessage;
}

function removeErrorMessage(inputField, errorMessage) {
  inputField.classList.remove('error');
  errorMessage.textContent = '';
}


const submit = (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = pwdInput.value.trim();
  const testEmail = 'test@codeit.com';
  const testPassword = 'codeit101';
  
  if (email == testEmail && password == testPassword) {
    location.href = "/folder/index.html";
  } 
}

const toggleEyeIcon = () => {
  if(password.type === "password") {
    password.type = "text";
    pwdToggleIcon.src = '/images/eye-on.svg';
  } else {
    password.type = "password";
    pwdToggleIcon.src = '/images/eye-off.svg';
  }
}

emailInput.addEventListener("focusout", checkEmailValidation);
pwdInput.addEventListener("focusout", checkPwdValidation);
pwdToggleIcon.addEventListener("click", toggleEyeIcon);
loginBtn.addEventListener('click', submit);