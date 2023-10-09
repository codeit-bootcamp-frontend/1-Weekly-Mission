import { 
  emailInput,
  passwordInput,
  loginButton,
  eyeImage,
  displayUserInputError,
  clearUserInputError,
  handleToggleEye,
} from '../pages/signin.js';

import {
  $,
  addClass,
  createElement,
  isValidUserInput,
} from '../utils.js'

import {
  REG_EXP,
} from '../constants.js'

const passwordCheckInput = $('#password-check-label');
const passwordCheckEyeOff = $('.password-check-eye-off');


// 회원가입 아이디 에러 다루는 함수
function handleSignUpEmailError(event) {
  const emailInput = $('#id-label');
  const {value: emailValue} = emailInput;

  if(!emailValue.trim()){
    displayUserInputError(emailInput, '이메일을 입력해주세요.');
    return;
  }
  
  if(!isValidUserInput(emailValue)){
    displayUserInputError(emailInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }
  
  if(emailValue === 'test@codeit.com'){
    displayUserInputError(emailInput, '이미 사용 중인 이메일입니다.');
    return;
  }
  

  clearUserInputError(emailInput);
}

// 회원가입 비밀번호 에러 다루는 함수
function handleSignUpPasswordError(event) {
  const passwordInput = $('#password-label');
  const {value: passwordValue} = passwordInput;


  if(!passwordValue){
    displayUserInputError(passwordInput, '비밀번호를 입력해주세요.');
    return;
  }
  
  if(!isValidUserInput(passwordValue)){
    displayUserInputError(passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return;
  }

  clearUserInputError(passwordInput);
}

// 회원가입 비밀번호 체크 에러 다루는 함수
function handleSignUpPasswordCheckError(event) {
  const passwordInput = $('#password-label');
  const passwordCheckInput = $('#password-check-label');


  if(passwordInput.value !== passwordCheckInput.value){
    displayUserInputError(passwordCheckInput, '비밀번호가 일치하지 않아요.');
    return;
  }

  clearUserInputError(passwordCheckInput);
}

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

  handleToggleEmail();

  handleTogglePassword();
}

function handlePasswordCheckToggleEye(){
  const passwordCheckInput = $('#password-check-label');
  const passwordCheckEyeOff = $('.password-check-eye-off');

  const passwordCheckType = passwordCheckInput.getAttribute("type") === "password";
  const [inputType, eyeOnOff] = passwordCheckType ? ["text", "eye-on"] : ["password", "eye-off"];

  passwordCheckInput.setAttribute("type", inputType);
  passwordCheckEyeOff.setAttribute("src", `../../assets/png/${eyeOnOff}.png`);
}



emailInput.addEventListener("focusout", handleSignUpEmailError);
passwordInput.addEventListener("focusout", handleSignUpPasswordError);
passwordCheckEyeOff.addEventListener("click", handlePasswordCheckToggleEye);
loginButton.addEventListener("click", handleSignUp);
passwordCheckInput.addEventListener("focusout", handleSignUpPasswordCheckError);
loginButton.addEventListener("click", handleSignUp);
