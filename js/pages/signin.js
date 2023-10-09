import {
  $,
  addClass,
  createElement,
  isCorrectUser,
} from '../utils.js'

import {
  REG_EXP,
} from '../constants.js'

const emailInput = $('#id-label');
const passwordInput = $('#password-label');
const loginButton = $('.login-btn');
const eyeImage = $('.eye-off');



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

  input.after(element);
}

// 옳으면 에러 메세지 제거하는 함수
function clearUserInputError(input){
  input.style.borderColor = 'var(--gray-40)';

  if(input.id === 'password-label') {
    const passwordErrorMessage = input.parentElement.nextSibling;
    passwordErrorMessage.remove();
    return;
  }
  
  input.nextSibling.remove();
}

// 로그인 에러 다루는 함수
function handleEmailError() {
  const emailInput = $('#id-label');
  const {value: emailValue} = emailInput;
  

  if(!emailValue.trim()){
    displayUserInputError(emailInput, '이메일을 입력해주세요.');
    return;
  }
  
  if(emailValue.length > 0 && !REG_EXP.EMAIL.test(emailValue)){
    displayUserInputError(emailInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }

  clearUserInputError(emailInput);
}

// 비밀번호 오류시 에러 출력, 삭제 함수
function handlePasswordEmptyError() {
  const passwordInput = $('#password-label');
  

  if(!passwordInput.value.trim()){
    displayUserInputError(passwordInput, '비밀번호를 입력해주세요.');
    return;
  }

  clearUserInputError(passwordInput);
}

//로그인 성공했을 때
function loginSuccess(){
  alert('로그인 되었습니다.');
  location.href = "../../folder.html";
}

// 로그인 성공, 실패 다루는 함수
function handleSignIn(event){
  event.preventDefault();

  if(isCorrectUser()){
    return loginSuccess();
  }
}

// 눈모양 아이콘 다루는 함수
function handleToggleEye(){
  const passwordInput = $('#password-label');
  const eyeImage = $('.eye-off');

  const passwordType = passwordInput.getAttribute("type") === "password";
  const [inputType, eyeOnOff] = passwordType ? ["text", "eye-on"] : ["password", "eye-off"];

  passwordInput.setAttribute("type", inputType);
  eyeImage.setAttribute("src", `../../assets/png/${eyeOnOff}.png`);
}


emailInput.addEventListener("focusout", handleEmailError);
passwordInput.addEventListener("focusout", handlePasswordEmptyError);
loginButton.addEventListener("click", handleSignIn);
eyeImage.addEventListener("click", handleToggleEye);

export { 
  emailInput,
  passwordInput,
  loginButton,
  eyeImage,
  displayUserInputError,
  clearUserInputError,
  handleToggleEye,
}