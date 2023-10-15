import {
  $,
  handleEmailError,
  handlePasswordError,
  displayUserInputError,
  clearUserInputError,
} from '../utils.js'

import {
  API_URL
} from '../constants.js'


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

//회원가입 페이지 접근 시 로컬 레포에 accessToken이 있으면 folder.html로 이동
if(localStorage.getItem('accessToken')) {
  location.href= "../../folder.html"; 
}

// 회원가입 성공했을 때
function signupSuccess() {
  alert('회원가입이 완료되었습니다.');
  location.href = "../../folder.html";
}

//회원가입 성공, 실패 다루는 함수
async function handleSignUp(event){
  event.preventDefault();

  const emailInput = $('#id-label');
  const passwordInput = $('#password-label');
  const passwordCheckInput = $('#password-check-label');

  const { target: elements } = event;
  const [emailElem, passwordElem] = elements;

  const userData = {
    email: emailElem.value,
    password: passwordElem.value,
  };

  const isValidEmail = !handleEmailError();
  const isValidPassword = !handlePasswordError();

  if(isValidEmail && isValidPassword){
    try{
      const response = await fetch(`${API_URL}/check-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
  
      const result = await response.json;

      if(response.status === 200){
        localStorage.setItem("accessToken", result.accessToken);
        isCorrectUser();
        return loginSuccess();
      }
      
      if(response.status === 400){
        clearUserInputError(emailElem);
        displayUserInputError(emailElem, '이메일을 확인해주세요.');

        clearUserInputError(passwordInput);
        displayUserInputError(passwordInput, '비밀번호를 확인해주세요.');

        clearUserInputError(passwordCheckInput);
        displayUserInputError(passwordCheckInput, '비밀번호를 확인해주세요.');
      }else{
        throw new Error(`${response.status}`);
      }
    }catch(error){
      console.log(error);
    }
  }

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



$('#id-label').addEventListener("focusout", handleEmailError);
$('#password-label').addEventListener("focusout", handlePasswordError($('password-check-label')));
$('.password-check-eye-off').addEventListener("click", handlePasswordCheckToggleEye);
$('.login-btn').addEventListener("click", handleSignUp);
$('#password-check-label').addEventListener("focusout", handleSignUpPasswordCheckError);
