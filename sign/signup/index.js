import { isEmail, isPassword } from '/utils/validation.js';
import { addErrorMessage, removeErrorMessage } from '/utils/error.js';


// const emailInput = document.querySelector('#email');
// const pwdInput = document.querySelector('#password');
// const pwdConfirmInput = document.querySelector('#password-confirm');
// const loginBtn = document.querySelector('.btn-login');
// const pwdToggleIcon = document.querySelector('#toggle-eye');


const emailField = document.querySelector('.email-field');
const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('.email-error-message');

function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailField, emailErrorMessage, '이메일을 입력해주세요.');
    return false;
  } else if (!isEmail(email)) {
    addErrorMessage(emailField, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
    return false;
  } else if (email === 'test@codeit.com') {
    addErrorMessage(emailField, emailErrorMessage, '이미 사용 중인 이메일입니다.'); 
    return false;
  } else {
    removeErrorMessage(emailField, emailErrorMessage);
    return true;
  }
}

emailInput.addEventListener("focusout", checkEmailValidation);



const passwordField = document.querySelector('.password-field');
const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('.password-error-message');

function checkPwdValidation() {
  const password = passwordInput.value.trim();

  // 값이 8자 미만 or only 문자열 or only 숫자
  if (!isPassword(password)) { 
    addErrorMessage(passwordField, passwordErrorMessage, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  } else {
    removeErrorMessage(passwordField, passwordErrorMessage);
    return true;
  }
}

passwordInput.addEventListener("focusout", checkPwdValidation);



const pwdConfirmInput = document.querySelector('#pwd-confirm');

function confirmPwd() {
  const password = passwordInput.value;
  const pwdConfirmField = document.querySelector('.pwd-confirm-field');
  const pwdConfirm = pwdConfirmInput.value;
  const pwdConfirmErrorMessage = document.querySelector('.pwd-confirm-error-message');

  if(password !== pwdConfirm) {
    addErrorMessage(pwdConfirmField, pwdConfirmErrorMessage, '비밀번호가 일치하지 않아요.');
    return false;
  } else {
    removeErrorMessage(pwdConfirmField, pwdConfirmErrorMessage);
    return true;
  }
}


pwdConfirmInput.addEventListener("focusout", confirmPwd);


// const submitForm = (e) => {
//   e.preventDefault();

//   if (emailInput.value && 
//       pwdInput.value && 
//       pwdConfirmInput.value
//   ) {
//     location.href = "../../folder/index.html";
//   } else {
//     checkEmailValidation(e);
//     checkPwdValidation(e);
//     confirmPwd(e);
//   }
// }; 

function submitForm() { // 동작 X
  e.preventDefault();

  if (checkEmailValidation() && checkPwdValidation() && confirmPwd()) {
    window.location.href = "/folder/index.html";
  }
}

loginBtn.addEventListener("click", submitForm);




function submitOnEnter(e) {
  if(e.key === "Enter") {
    submitForm(e);
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


// emailInput.addEventListener("focusout", checkEmailValidation);
// pwdInput.addEventListener("focusout", checkPwdValidation);
// pwdConfirmInput.addEventListener("focusout", confirmPwd);
emailInput.addEventListener("keyup", submitOnEnter);
pwdInput.addEventListener("keyup", submitOnEnter);
pwdConfirmInput.addEventListener("keyup", submitOnEnter);
pwdToggleIcon.addEventListener("click", toggleEyeIcon);
// loginBtn.addEventListener("click", submitForm);