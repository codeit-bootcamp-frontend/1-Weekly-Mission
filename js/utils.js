export {
  $,
  addClass,
  createElement,
  isCorrectUser,
  handleEmailError,
  handlePasswordError,
  displayUserInputError,
  clearUserInputError,
}

import {
  REG_EXP,
} from './constants.js'


function $(selector){
  return document.querySelector(selector);
}


// 클래스 추가 함수
function addClass(element, className = 'input-error-msg'){
  element.classList.add(className);
}


// 태그 생성 함수
function createElement (tagName = 'span') {
  return document.createElement(tagName);
}
//const createElement = () => document.createElement(tagName);


// function isValidUserInput(email) {
//   return email.length > 0 && !REG_EXP.EMAIL.test(email);
// }


//이메일, 비밀번호 맞는지 확인하는 함수
function isCorrectUser(email, password) {
  return DB_USERS.findIndex((dbUser) => {
    return dbUser.email === email && dbUser.password === password;
  })
}


// 회원가입 아이디 에러 다루는 함수
function handleEmailError() {
  const emailInput = $('#id-label');
  const {value: emailValue} = emailInput;

  clearUserInputError(emailInput);

  if(!emailValue.trim()){
    displayUserInputError(emailInput, '이메일을 입력해주세요.');
    return;
  }
  
  if(emailValue.length > 0 && !REG_EXP.EMAIL.test(emailValue)){
    displayUserInputError(emailInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }
  
  if(emailValue === 'test@codeit.com'){
    displayUserInputError(emailInput, '이미 사용 중인 이메일입니다.');
    return;
  }
}


// 회원가입 비밀번호 에러 다루는 함수
function handlePasswordError() {
  const passwordInput = $('#password-label');
  const {value: passwordValue} = passwordInput;

  clearUserInputError(passwordInput);

  if(!passwordValue.trim()){
    displayUserInputError(passwordInput, '비밀번호를 입력해주세요.');
    return;
  }
  
  if(passwordValue.length > 0 && !REG_EXP.PASSWORD.test(passwordValue)){
    displayUserInputError(passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return;
  }
}


// 옳으면 에러 메세지 제거하는 함수
function clearUserInputError(input){
  input.style.borderColor = 'var(--gray-40)';
  
  if(input.id === 'password-label') {
    const passwordErrorMessage = input.parentElement.nextSibling;
    passwordErrorMessage.remove();
    return;
  }

  if(input.parentElement.nextSibling.localName === 'span'){
    input.parentElement.nextSibling.remove();
    return;
  }

  input.nextSibling.remove();
}


// 에러 메세지 생성 함수
function displayUserInputError(input, message){
  const element = createElement();

  element.textContent = message;
  input.style.borderColor = 'var(--red)';
  addClass(element);

  if(input.id === 'password-label') {
    const passwordWrapper = $('.input-password-wrapper')
    passwordWrapper.after(element)
    passwordWrapper.style.marginBottom = '10px'
    return;
  }

  if(input.id === 'password-check-label') {
    const passwordWrapper2 = $('.input-password-wrapper2')
    passwordWrapper2.after(element)
    passwordWrapper2.style.marginBottom = '10px'
    return;
  }

  input.after(element);
}