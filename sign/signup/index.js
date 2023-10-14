import { isEmail, isPassword } from '/utils/validation.js';
import { addErrorMessage, removeErrorMessage } from '/utils/error.js';
import { toggleEyeIcon } from '/utils/toggle-icon.js';
import { 
  EMAIL_EMPTY, 
  EMAIL_INVALID, 
  EMAIL_USED,
  PASSWORD_INVALID,
  PASSWORD_NOT_MATCH
} from '/constants/error-message.js';


// Email
const emailField = document.querySelector('.email-field');
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-message');

// Password
const passwordField = document.querySelector('.password-field');
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-message');
const pwdConfirmInput = document.querySelector('#pwd-confirm');

// Toggle
const eyeIcon = document.querySelector('#eye-icon');
const eyeIcon_Re = document.querySelector('#eye-icon-re');

// LoginButton
const loginBtn = document.querySelector('.btn-login');


// 이메일 유효성 검사 
function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailField, emailErrorMessage, EMAIL_EMPTY);
    return false;
  } else if (!isEmail(email)) {
    addErrorMessage(emailField, emailErrorMessage, EMAIL_INVALID);
    return false;
  } else if (email === 'test@codeit.com') {
    addErrorMessage(emailField, emailErrorMessage, EMAIL_USED); 
    return false;
  } else {
    removeErrorMessage(emailField, emailErrorMessage);
    return true;
  }
}

// 비밀번호 유효성 검사 
function checkPwdValidation() {
  const password = passwordInput.value.trim();

  if (!isPassword(password)) { // 값이 8자 미만 or only 문자열 or only 숫자
    addErrorMessage(passwordField, passwordErrorMessage, PASSWORD_INVALID);
    return false;
  } else {
    removeErrorMessage(passwordField, passwordErrorMessage);
    return true;
  }
}

// 비밀번호 일치 확인 
function confirmPwd() {
  const password = passwordInput.value;
  const pwdConfirmField = document.querySelector('.pwd-confirm-field');
  const pwdConfirm = pwdConfirmInput.value;
  const pwdConfirmErrorMessage = document.querySelector('.pwd-confirm-error-message');

  if(password !== pwdConfirm) {
    addErrorMessage(pwdConfirmField, pwdConfirmErrorMessage, PASSWORD_NOT_MATCH);
    return false;
  } else {
    removeErrorMessage(pwdConfirmField, pwdConfirmErrorMessage);
    return true;
  }
}

// 회원가입 시도 
function submitForm() { 

  if (checkEmailValidation() && checkPwdValidation() && confirmPwd()) {
    window.location.href = "/folder/index.html";
  }
}

// Enter키 입력 시 회원가입 시도
function submitOnEnter(e) {
  if(e.key === "Enter") {
    submitForm();
  }
}

emailInput.addEventListener("focusout", checkEmailValidation);
passwordInput.addEventListener("focusout", checkPwdValidation);
pwdConfirmInput.addEventListener("focusout", confirmPwd);
loginBtn.addEventListener("click", submitForm);
pwdConfirmInput.addEventListener("keydown", submitOnEnter);


// 비밀번호 문자열 노출 
eyeIcon.addEventListener("click", () => {
  toggleEyeIcon(passwordInput, eyeIcon)
});
eyeIcon_Re.addEventListener("click", () => {
  toggleEyeIcon(pwdConfirmInput, eyeIcon_Re)
});