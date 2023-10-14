import { inputEmail, errorEmail, inputPassword, errorPassword, emailWrapper, psdWrapper,submitBtn, eye} from "../module/Auth/variables.js";
import { removeErrorStyle} from "../module/Auth/errorStyle.js";
import { emailValidationSignIn, passwordValidationSignIn } from "../module/Auth/validation.js";
import { checkErrorMessagesExist } from "../module/Auth/conditions.js";
import handleLogin from "../module/Auth/logIn.js";


const moveToFolderPage = () => {window.location.href = '../folder.html'}
window.addEventListener('load',() => {
  if (Object.keys(window.localStorage).includes('signInToken')){
    moveToFolderPage()
  }
})

// [form input box 유효성 검사]
// 이메일 유효성 검사

emailWrapper.addEventListener('focusout', emailValidationSignIn);
inputEmail.addEventListener('focusin', () => {removeErrorStyle(inputEmail, errorEmail)});

// // 비밀번호 유효성 검사

psdWrapper.addEventListener('focusout',passwordValidationSignIn);
inputPassword.addEventListener('focusin', () => {removeErrorStyle(inputPassword, errorPassword)});

// // 이메일 비밀번호 데이터 유무 확인

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  removeErrorStyle(inputEmail, errorEmail)
  removeErrorStyle(inputPassword, errorPassword)

  emailValidationSignIn();
  passwordValidationSignIn();
  const isAllValid = checkErrorMessagesExist();
  if (isAllValid){
    handleLogin()
  }
})

// [eyeToggle 이벤트]

import handleEyeClick from "../module/Auth/handleEye.js";

eye.addEventListener('click', (e) => handleEyeClick(e));


