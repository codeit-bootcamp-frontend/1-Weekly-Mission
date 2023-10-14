import { 
  emailInput,
  passwordInput,
  loginButton,
} from '../pages/signin.js';

import {
  $,
  handleEmailError,
  handlePasswordError,
  displayUserInputError,
  clearUserInputError,
} from '../utils.js'

const passwordCheckInput = $('#password-check-label');
const passwordCheckEyeOff = $('.password-check-eye-off');


// 회원가입 비밀번호 체크 에러 다루는 함수
function handleSignUpPasswordCheckError() {
  const passwordInput = $('#password-label');
  const passwordCheckInput = $('#password-check-label');

  clearUserInputError(passwordCheckInput);

  if(passwordInput.value !== passwordCheckInput.value){
    displayUserInputError(passwordCheckInput, '비밀번호가 일치하지 않아요.');
    return;
  }
}

// 회원가입 성공했을 때
function signupSuccess() {
  alert('회원가입이 완료되었습니다.');
  location.href = "../../folder.html";
}

//회원가입 성공, 실패 다루는 함수
function handleSignUp(event){
  event.preventDefault();

  const emailInput = $('#id-label');
  const passwordInput = $('#password-label');
  const passwordCheckInput = $('#password-check-label');

  if(emailInput.value !== "test@codeit.com" && passwordInput.value === passwordCheckInput.value){
    return signupSuccess();
  }
}

// 비밀번호 체크 눈모양 아이콘 다루는 함수
function handlePasswordCheckToggleEye(){
  const passwordCheckInput = $('#password-check-label');
  const passwordCheckEyeOff = $('.password-check-eye-off');

  const passwordCheckType = passwordCheckInput.getAttribute("type") === "password";
  const [inputType, eyeOnOff] = passwordCheckType ? ["text", "eye-on"] : ["password", "eye-off"];

  passwordCheckInput.setAttribute("type", inputType);
  passwordCheckEyeOff.setAttribute("src", `../../assets/png/${eyeOnOff}.png`);
}



emailInput.addEventListener("focusout", handleEmailError);
passwordInput.addEventListener("focusout", handlePasswordError);
passwordCheckEyeOff.addEventListener("click", handlePasswordCheckToggleEye);
loginButton.addEventListener("click", handleSignUp);
passwordCheckInput.addEventListener("focusout", handleSignUpPasswordCheckError);
loginButton.addEventListener("click", handleSignUp);
