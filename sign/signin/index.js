import { isEmail } from '/utils/validation.js';
import { addErrorMessage, removeErrorMessage } from '/utils/error.js';
import { toggleEyeIcon } from '/utils/toggle-icon.js';

// Email
const emailField = document.querySelector('.email-field');
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-message');

// Password
const passwordField = document.querySelector('.password-field');
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-message');

// Toggle
const eyeIcon = document.querySelector('#eye-icon');

// LoginButton
const loginBtn = document.querySelector('.btn-login');


// 이메일 유효성 검사 
function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailField, emailErrorMessage, '이메일을 입력해주세요.');
  } else if (!isEmail(email)) {
    addErrorMessage(emailField, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
  } else {
    removeErrorMessage(emailField, emailErrorMessage);
  }
}

// 비밀번호 유효성 검사 
function checkPwdValidation() {
  const password = passwordInput.value.trim();

  if (password === '') {
    addErrorMessage(passwordField, passwordErrorMessage, '비밀번호를 입력해주세요.');
  } else {
    removeErrorMessage(passwordField, passwordErrorMessage);
  }
};


function submitForm() {
  // e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const testEmail = 'test@codeit.com';
  const testPassword = 'codeit101';

    if (email === testEmail && password === testPassword) {
      location.href = "/folder/index.html";
    } else if (email !== testEmail && password !== testPassword) {
      addErrorMessage(emailField, emailErrorMessage, '이메일을 확인해주세요.');
      addErrorMessage(passwordField, passwordErrorMessage, '비밀번호를 확인해주세요.')
    } else {
      checkEmailValidation();
      checkPwdValidation();
    }
}


emailInput.addEventListener("focusout", checkEmailValidation);
passwordInput.addEventListener("focusout", checkPwdValidation);
loginBtn.addEventListener('click', submitForm);

eyeIcon.addEventListener("click", () => { // 동작 X 
  toggleEyeIcon(passwordInput, eyeIcon)
});