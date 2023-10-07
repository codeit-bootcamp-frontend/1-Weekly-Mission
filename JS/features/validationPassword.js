import { errorStyle } from "./errorStyle.js";
import {$inputPassword, $errorPassword } from "./tags.js";

function passwordValidation(password){
  if (!isNotPasswordEmpty(password)){
  return  errorStyle($inputPassword, $errorPassword, "비밀번호를 입력해주세요.")
  }
  return true
}

function isNotPasswordEmpty (password){
  const isNotEmpty = !(password.length === 0);
  return isNotEmpty ? true : false
}

// function validPassword_signUp(e, password){
//   const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/ 
//   const isNotValid = !EMAIL_REGEX.test(email.trim());
//   const isEmpty = e.target.value.length === 0;

//   if (isEmpty) {
//     return errorStyle(e, "비밀번호를 입력해주세요.")
//   } else if (isNotValid) {
//     return errorStyle(e, "올바른 이메일 주소를 입력해주세요.")
//   } else {
//     return removeErrorStyle(e);
//   }
// }

export {passwordValidation}