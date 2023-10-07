import * as tags from "./features/tags.js"
// [form input box 유효성 검사]


// 이메일 유효성 검사
import {removeErrorStyle, errorStyle } from "./features/errorStyle.js";
import {isNotEmailEmpty, isValidEmail} from "./features/utilsEmail.js";

function emailValidation(){
  const email = tags.$inputEmail.value;
  if (!isNotEmailEmpty(email))
    return errorStyle(tags.$inputEmail, tags.$errorEmail, "아이디를 입력해주세요.")
  else if (!isValidEmail(email)) {
    return errorStyle(tags.$inputEmail, tags.$errorEmail, "올바른 이메일 주소가 아닙니다.")
  } else {
    return true
  }
}

tags.$emailWrapper.addEventListener('focusout', emailValidation);
tags.$inputEmail.addEventListener('focusin', () => {removeErrorStyle(tags.$inputEmail, tags.$errorEmail)});

// // 비밀번호 유효성 검사
import { isNotPasswordEmpty } from "./features/utilsPassword.js";

function passwordValidation(password){
  if (!isNotPasswordEmpty(password)){
  return errorStyle(tags.$inputPassword, tags.$errorPassword, "비밀번호를 입력해주세요.")
  }
  return true
}

tags.$psdWrapper.addEventListener('focusout', () => {
  const $password = tags.$inputPassword.value;
  passwordValidation($password) 
});
tags.$inputPassword.addEventListener('focusin', () => {removeErrorStyle(tags.$inputPassword, tags.$errorPassword)});

// // 이메일 비밀번호 데이터 유무 확인

import isValidAccount from "./features/validationAccount.js";

tags.$submitBtn.addEventListener('click', () => {
  const isAllValid = emailValidation(tags.$inputEmail.value) && passwordValidation(tags.$inputPassword.value)
  if (isAllValid){
    isValidAccount()
  }
})

// [eyeToggle 이벤트]

import eyeToggle from "./features/eyeToggle.js";

tags.$eye.addEventListener('click', (e) => eyeToggle(e));


