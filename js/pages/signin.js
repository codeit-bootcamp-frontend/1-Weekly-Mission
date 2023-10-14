import {
  $,
  isCorrectUser,
  handleEmailError,
  handlePasswordError,
} from '../utils.js'

export { 
  emailInput,
  passwordInput,
  loginButton,
}

const emailInput = $('#id-label');
const passwordInput = $('#password-label');
const loginButton = $('.login-btn');
const eyeImage = $('.eye-off');



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


emailInput.addEventListener("focusout", handleEmailError,);
passwordInput.addEventListener("focusout", handlePasswordError);
loginButton.addEventListener("click", handleSignIn);
eyeImage.addEventListener("click", handleToggleEye);