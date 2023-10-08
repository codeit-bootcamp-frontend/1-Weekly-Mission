import { 
  idInput,
  passwordInput,
  loginButton,
  eyeImage,
  REG_ID,
  $,
  addError,
  displayUserInputError,
  clearUserInputError,
  handleToggleEye,
} from './signin.js';

const idInput = $('#id-label');
const passwordInput = $('#password-label');
const loginButton = $('.login-btn');
const eyeImage = $('.eye-off');
const identifyInput = $('#identify-label');

const REG_ID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

function $(selector){
  return document.querySelector(selector);
}

// 클래스 추가 함수
function addError(element, className = 'input-error-msg'){
  element.classList.add(className);
}

// 에러 메세지 생성 함수
function displayUserInputError(element, input, message){
  input.after(element);
  element.textContent = message;
  addError(element);
  input.style.borderColor = 'var(--red)';
}

// 옳으면 에러 메세지 제거하는 함수
function clearUserInputError(element, input){
  element.textContent = '';
  input.style.borderColor = 'var(--gray-40)';
}


function handleSignUpIdError(event) {
  const idInput = $('#id-label');
  const idErrorMassageElem = document.createElement('span');

  if(!event.target.value){
    displayUserInputError(idErrorMassageElem, idInput, '이메일을 입력해주세요.');
    return;
  }else if(!REG_ID.test(event.target.value) && event.target.value.length > 0){
    displayUserInputError(idErrorMassageElem, idInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }else if(idInput.value === 'test@codeit.com'){
    displayUserInputError(idErrorMassageElem, idInput, '이미 사용 중인 이메일입니다.');
    return;
  }
  

  clearUserInputError(idInput, idErrorMassageElem);
}

function handleSignUpPasswordError(event) {
  const passwordInput = $('#password-label');
  const pwErrorMassageElem = document.createElement('span');

  if(!event.target.value){
    displayUserInputError(pwErrorMassageElem, passwordInput, '비밀번호를 입력해주세요.');
    return;
  }else if(!REG_PASSWORD.test(event.target.value) && event.target.value.length > 0){
    displayUserInputError(pwErrorMassageElem, passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return;
  }


  clearUserInputError(passwordInput, pwErrorMassageElem);
}

function handleSignUp(event){
  const idInput = $('#id-label');
  const passwordInput = $('#password-label');

  if(idInput.value !== "test@codeit.com" && passwordInput.value === "codeit101"){
    return loginSuccess();
  }

  handleToggleEmail();

  handleTogglePassword()
}

function handleToggleEye(){
  const passwordInput = $('#password-label');
  const eyeImage = $('.eye-off');

  const passwordType = passwordInput.getAttribute("type") === "password";
  const [inputType, eyeOnOff] = passwordType ? ["text", "eye-on"] : ["password", "eye-off"];

  passwordInput.setAttribute("type", inputType);
  eyeImage.setAttribute("src", `../assets/png/${eyeOnOff}.png`);
}

idInput.addEventListener("focusout", handleSignUpIdError);
passwordInput.addEventListener("focusout", handleSignUpPasswordError);
loginButton.addEventListener("click", handleSignIn);
eyeImage.addEventListener("click", handleToggleEye);