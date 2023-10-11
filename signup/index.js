import { 
  emailInput,
  pwdInput,
  pwdConfirmInput,
  signUpBtn,
  toggleEye
} from '../data.js';
import { isValidEmail, isValidPwd } from '../validation.js';


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
  } else if (email === 'test@codeit.com') {
    errorMessage.textContent = '이미 사용 중인 이메일입니다.';
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

  if (!isValidPwd(pwd)) { // 값이 8자 미만 or only 문자열 or only 숫자
    errorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    inputField.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputField.classList.remove('error');
  }
};


const confirmPwd = (e) => {
  const inputField = document.querySelector('.pwd-confirm-field');
  const pwd = pwdInput.value.trim();
  const pwd2 = document.querySelector('#password-confirm').value.trim();
  const errorMessage = inputField.querySelector('.error');

  if(pwd !="" && pwd2 != "") {
        if(pwd !== pwd2){
          errorMessage.textContent = '비밀번호가 일치하지 않습니다.'
          inputField.classList.add('error');
      }
  }
};

const submitForm = (e) => {
  e.preventDefault();

  if (emailInput.value && 
      pwdInput.value && 
      pwdConfirmInput.value
  ) {
    location.href = "/folder/folder.html";
  } else {
    checkEmailValidation(e);
    checkPwdValidation(e);
    confirmPwd(e);
  }
}; 

function enter(e) {
  if(e.key === "Enter") {
    submitForm(e);
  }
}

// const eyeOnOff = () => {
//   if(pwdInput.type === "password") {
//     pwdInput.type = "text";
//     toggleEye.src = '/images/eye-on.svg';
//   } else {
//     pwdInput.type = "password";
//     toggleEye.src = '/images/eye-off.svg';
//   }
// };


emailInput.addEventListener("focusout", checkEmailValidation);
pwdInput.addEventListener("focusout", checkPwdValidation);
pwdConfirmInput.addEventListener("focusout", confirmPwd);
emailInput.addEventListener("keyup", enter);
pwdInput.addEventListener("keyup", enter);
pwdConfirmInput.addEventListener("keyup", enter);
toggleEye.addEventListener("click", eyeOnOff);
signUpBtn.addEventListener("click", submitForm);