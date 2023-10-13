import * as tags from "../module/Auth/tags.js"

const moveToFolderPage = () => {window.location.href = '../folder.html'}
window.addEventListener('load',() => {
  if (Object.keys(window.localStorage).includes('signInToken')){
    moveToFolderPage()
  }
})

// [form input box 유효성 검사]


// 이메일 유효성 검사
import {removeErrorStyle, errorStyle } from "../module/Auth/errorMessage.js";
import {checkErrorMessagesExist, checkFormEmpty, checkEmailValid} from "../module/Auth/validation.js";

function emailValidation(){
  const email = tags.inputEmail.value;
  if (!checkFormEmpty(email))
    return errorStyle(tags.inputEmail, tags.errorEmail, "아이디를 입력해주세요.")
  else if (!checkEmailValid(email)) {
    return errorStyle(tags.inputEmail, tags.errorEmail, "올바른 이메일 주소가 아닙니다.")
  } else {
    return true
  }
}

tags.emailWrapper.addEventListener('focusout', emailValidation);
tags.inputEmail.addEventListener('focusin', () => {removeErrorStyle(tags.inputEmail, tags.errorEmail)});

// // 비밀번호 유효성 검사

function passwordValidation(password){
  if (!checkFormEmpty(password)){
  return errorStyle(tags.inputPassword, tags.errorPassword, "비밀번호를 입력해주세요.")
  }
  return true
}

tags.psdWrapper.addEventListener('focusout', () => {
  const $password = tags.inputPassword.value;
  passwordValidation($password) 
});
tags.inputPassword.addEventListener('focusin', () => {removeErrorStyle(tags.inputPassword, tags.errorPassword)});

// // 이메일 비밀번호 데이터 유무 확인

import handleLogin from "../module/Auth/logIn.js";

tags.submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  removeErrorStyle(tags.inputEmail, tags.errorEmail)
  removeErrorStyle(tags.inputPassword, tags.errorPassword)

  emailValidation(tags.inputEmail.value);
  passwordValidation(tags.inputPassword.value);
  const isAllValid = checkErrorMessagesExist();
  if (isAllValid){
    handleLogin()
  }
})

// [eyeToggle 이벤트]

import handleEyeClick from "../module/Auth/handleEye.js";

tags.eye.addEventListener('click', (e) => handleEyeClick(e));


