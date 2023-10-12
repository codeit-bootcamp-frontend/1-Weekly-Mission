import * as $tags from "../module/signIn&signUp/tags.js"
import {removeErrorStyle, errorStyle } from "../module/signIn&signUp/errorMessage.js";
// [form input box 유효성 검사]

// 이메일 유효성 검사
import {checkFormEmpty, checkEmailValid, checkEmailAvailable, checkErrorMessagesExist, checkPasswordValid , checkStringSame} from "../module/signIn&signUp/validation.js";

function emailValidation(){
  const email = $tags.inputEmail.value;
  if (!checkFormEmpty(email)){
    return errorStyle($tags.inputEmail, $tags.errorEmail, "아이디를 입력해주세요.")
  } else if (!checkEmailValid(email)) {
    return errorStyle($tags.inputEmail, $tags.errorEmail, "올바른 이메일 주소가 아닙니다.")
  } else if(!checkEmailAvailable(email)) {
    return errorStyle($tags.inputEmail, $tags.errorEmail, "이미 사용중인 이메일입니다.")
  } else {
    removeErrorStyle($tags.inputEmail, $tags.errorEmail)
    return true
  }
}

$tags.emailWrapper.addEventListener('focusout', emailValidation);

// 비밀번호 유효성 검사

function passwordValidation(){
  const password = $tags.inputPassword.value;
  if(!checkFormEmpty(password)){
    return errorStyle($tags.inputPassword, $tags.errorPassword, "비밀번호를 입력해주세요.")}
  if(!checkPasswordValid(password)){
    return errorStyle($tags.inputPassword, $tags.errorPassword, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
  }
  removeErrorStyle($tags.inputPassword, $tags.errorPassword) 
  return true
}

function password2Validation(){
  const password = $tags.inputPassword.value;
  const password2 = $tags.inputPassword2.value;
  if(!checkFormEmpty(password2)){
    return errorStyle($tags.inputPassword2, $tags.errorPassword2, "비밀번호를 입력해주세요.")
  } else if(!checkStringSame(password, password2)){
    return errorStyle($tags.inputPassword2, $tags.errorPassword2, "비밀번호가 일치하지 않아요.")
  }
  removeErrorStyle($tags.inputPassword2, $tags.errorPassword2)
  return true
}

$tags.inputPassword.addEventListener('focusout', passwordValidation)
$tags.inputPassword2.addEventListener('focusout', password2Validation)

//focusin일 때 입력창 에러 스타일 제거
$tags.inputEmail.addEventListener('focusin', () => removeErrorStyle($tags.inputEmail, $tags.errorEmail));
$tags.inputPassword.addEventListener('focusin', () => removeErrorStyle($tags.inputPassword, $tags.errorPassword));
$tags.inputPassword2.addEventListener('focusin', () => removeErrorStyle($tags.inputPassword2, $tags.errorPassword2));

// submit 클릭시 이벤트

function submitAccepted (){
  emailValidation()
  passwordValidation()
  password2Validation() 
  const isAllValid = checkErrorMessagesExist()
  if (isAllValid) {
    removeErrorStyle($tags.inputEmail, $tags.errorEmail)
    removeErrorStyle($tags.inputPassword, $tags.errorPassword)
    removeErrorStyle($tags.inputPassword2, $tags.errorPassword2)
    window.location.href = '../folder.html';
  } 
}

$tags.submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitAccepted();
})

//엔터키 눌러도 submit 기능 수행
function submitByEnter (e) {
  if(e.key === 'Enter'){
    e.preventDefault()
    submitAccepted();
  }
}

window.addEventListener('keypress', submitByEnter);

// [eyeToggle 모듈]
import handleEyeClick from "../module/signIn&signUp/handleEye.js";

$tags.eyes.forEach((eye) => {
  eye.addEventListener('click', (e) => handleEyeClick(e));
});