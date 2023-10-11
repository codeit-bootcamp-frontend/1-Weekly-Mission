import { 
  emailInput,
  pwdInput,
  signUpBtn,
  toggleEye
} from '../data.js';

import { isValidEmail } from '../validation.js';


const checkEmailValidation = (e) => {
  const inputField = document.querySelector('.email-field');
  const email = emailInput.value.trim();
  const errorMessage = inputField.querySelector('.error');

  if (email === '') {
    errorMessage.textContent = '이메일을 입력해주세요.';
    inputField.classList.add('error');
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    inputField.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputField.classList.remove('error');
  }
};

const checkPwdValidation = (e) => {
  const inputField = document.querySelector('.pwd-field');
  const pwd = pwdInput.value;
  const errorMessage = inputField.querySelector('.error');

  if (pwd === '') {
    errorMessage.textContent = '비밀번호를 입력하세요.';
    inputField.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputField.classList.remove('error');
  }
};



const submit = (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = pwdInput.value.trim();
  const testEmail = 'test@codeit.com';
  const testPassword = 'codeit101';
  
  if (email == testEmail && password == testPassword) {
    location.href = "/folder/folder.html";
  } 
}

// const eyeOnOff = () => {
//   if(password.type === "password") {
//     password.type = "text";
//     toggleEye.src = '/images/eye-on.svg';
//   } else {
//     password.type = "password";
//     toggleEye.src = '/images/eye-off.svg';
//   }
// }


emailInput.addEventListener("focusout", checkEmailValidation);
pwdInput.addEventListener("focusout", checkPwdValidation);
// toggleEye.addEventListener("click", eyeOnOff);
signUpBtn.addEventListener('click', submit);