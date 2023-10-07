import * as tags from "./features/tags.js"
// [form input box 유효성 검사]


// 이메일 유효성 검사
import {removeErrorStyle, errorStyle } from "./features/errorStyle.js";
import {isNotEmailEmpty, isValidEmail} from "./features/validationEmail.js";

const $emailWrapper = document.querySelector('.email')

function emailValidation(email){
  if (!isNotEmailEmpty(email))
    return errorStyle(tags.$inputEmail, tags.$errorEmail, "아이디를 입력해주세요.")
  else if (!isValidEmail(email)) {
    return errorStyle(tags.$inputEmail, tags.$errorEmail, "올바른 이메일 주소가 아닙니다.")
  } else {
    return true
  }
}

$emailWrapper.addEventListener('focusout', () => {
  //여기서 변수를 선언하지 않고 validationEmail에서 이메일 변수를 설정해줄 수 있는 법이 있을까요?
  const $email = tags.$inputEmail.value;
  emailValidation($email)});
tags.$inputEmail.addEventListener('focusin', () => {removeErrorStyle(tags.$inputEmail, tags.$errorEmail)});

// // 비밀번호 유효성 검사
import { passwordValidation } from "./features/validationPassword.js";

const $psdWrapper = document.querySelector('.password');

$psdWrapper.addEventListener('focusout', () => {
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

const $eye = document.querySelector('#eye')

$eye.addEventListener('click', (e) => eyeToggle(e));


