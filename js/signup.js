import { 
  emailInput,
  passwordInput,
  loginButton,
  eyeImage,
  emailErrorMassageElem,
  passwordErrorMassageElem,
  REG_EMAIL,
  $,
  addClass,
  displayUserInputError,
  clearUserInputError,
  handleToggleEye,
} from './signin.js';

const passwordCheckInput = $('#password-check-label');

const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// 회원가입 아이디 에러 다루는 함수
function handleSignUpEmailError(event) {
  const emailInput = $('#id-label');

  if(!event.target.value){
    displayUserInputError(emailErrorMassageElem, emailInput, '이메일을 입력해주세요.');
    return;
  }
  
  if(event.target.value.length > 0 && !REG_EMAIL.test(event.target.value)){
    displayUserInputError(emailErrorMassageElem, emailInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }
  
  if(event.target.value === 'test@codeit.com'){
    displayUserInputError(emailErrorMassageElem, emailInput, '이미 사용 중인 이메일입니다.');
    return;
  }
  

  clearUserInputError(emailInput, emailErrorMassageElem);
}

// 회원가입 비밀번호 에러 다루는 함수
function handleSignUpPasswordError(event) {
  const passwordInput = $('#password-label');
  const passwordCheckInput = $('#password-check-label');


  if(!event.target.value){
    displayUserInputError(passwordErrorMassageElem, passwordInput, '비밀번호를 입력해주세요.');
    return;
  }
  
  if(event.target.value.length > 0 && !REG_PASSWORD.test(event.target.value)){
    displayUserInputError(passwordErrorMassageElem, passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return;
  }

  clearUserInputError(passwordInput, passwordErrorMassageElem);
}

//회원가입 성공, 실패 다루는 함수
function handleSignUp(event){
  event.preventDefault();

  const emailInput = $('#id-label');
  const passwordInput = $('#password-label');
  const passwordCheckInput = $('#password-check-label');

  if(emailInput.value !== "test@codeit.com" && passwordInput.value === passwordCheckInput.value){
    return loginSuccess();
  }

  handleToggleEmail();

  handleTogglePassword()
}

function handlePasswordCheckToggleEye(){
  const passwordCheckInput = $('#password-check-label');
  const eyeImage = $('.eye-off');

  const passwordType = passwordCheckInput.getAttribute("type") === "password";
  const [inputType, eyeOnOff] = passwordType ? ["text", "eye-on"] : ["password", "eye-off"];

  passwordCheckInput.setAttribute("type", inputType);
  eyeImage.setAttribute("src", `../assets/png/${eyeOnOff}.png`);
}



emailInput.addEventListener("focusout", handleSignUpEmailError);
passwordCheckInput.addEventListener("focusout", handleSignUpPasswordError);
eyeImage.addEventListener("click", handlePasswordCheckToggleEye);
loginButton.addEventListener("click", handleSignUp);
