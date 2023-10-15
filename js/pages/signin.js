import {
  $,
  isCorrectUser,
  handleEmailError,
  handlePasswordError,
} from '../utils.js'

import {
  API_URL
} from '../constants.js'


//로그인 성공했을 때
function loginSuccess(){
  alert('로그인 되었습니다.');
  location.href = "../../folder.html";
}

// 로그인 성공, 실패 다루는 함수
async function handleSignIn(event){
  event.preventDefault();

  const { target: elements } = event;
  const [emailElem, passwordElem] = elements;

  const userData = {
    email: emailElem.value,
    password: passwordElem.value,
  };

  try{
    const response = await fetch(`${API_URL}/sign-in`, {
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
      const emailElem = $('#id-label');
      const passwordElem = $('#password-label');

      clearUserInputError(emailElem);
      displayUserInputError(emailElem, '이메일을 확인해주세요.');

      clearUserInputError(passwordElem);
      displayUserInputError(passwordElem, '비밀번호를 확인해주세요.');
    }
  }catch(error){
    console.log(error);
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


$('#id-label').addEventListener("focusout", handleEmailError,);
$('#password-label').addEventListener("focusout", handlePasswordError($('password-label')));
$('.login-btn').addEventListener("click", handleSignIn);
$('.eye-off').addEventListener("click", handleToggleEye);