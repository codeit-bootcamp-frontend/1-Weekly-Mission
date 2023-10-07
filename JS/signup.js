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
  const $email = tags.$inputEmail.value;
  emailValidation($email)});
tags.$inputEmail.addEventListener('focusin', () => {removeErrorStyle(tags.$inputEmail, tags.$errorEmail)});

//eyeToggle 이벤트
import eyeToggle from "./features/eyeToggle.js";

const $eyes = document.querySelectorAll('#eye')

$eyes.forEach((eye) => {
  eye.addEventListener('click', (e) => eyeToggle(e));
});