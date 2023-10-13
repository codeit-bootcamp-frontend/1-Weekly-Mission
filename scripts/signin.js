  import { errorMessageStop, addErrorStyle, removeErrorStyle } from './errors/errors.js';
  import { checkPassword } from './input/checkPassword.js';
  import  { toggleImage } from './toggleImage.js';
  import { validAccount } from '../scripts/accounts/validAccount.js';
 
  const eyeImagePasswordEl = document.querySelector('#eyeImage-password')
  const eyeImagePassword = eyeImagePasswordEl.children[0]
  const inputEmail= document.querySelector('#sign-up')
  const inputPassword = document.querySelector('#password')
  const submitButton = document.querySelector('button[type="submit"]');
  const [inputEmailCss, inputPasswordCss] = document.querySelectorAll('input')
  const loginForm = document.querySelector('form');

  //오류메시지 출력
  const emailErrorMessage = document.querySelector('.email-error-message')

  //<눈모양 아이콘 적용, 비밀번호 입력타입 변경>
  eyeImagePassword.addEventListener('click', ()=> {
    toggleImage(eyeImagePassword, inputPassword)});

  //<입력하는 동안에는 에러메시지 안 보이게 하기 >
  inputEmail.addEventListener('input', errorMessageStop)
  inputPassword.addEventListener('input', errorMessageStop)

  // <이메일 형식검증, 오류메시지 출력 >
  function testEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function checkSigninEmail(){
    const email = inputEmail.value.trim();
    if (email === ''){
      addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 입력해주세요.');
    } else if (!testEmail(email)){
      addErrorStyle(inputEmailCss, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
    } else{
      removeErrorStyle(inputEmailCss, emailErrorMessage);
    }
  };
  inputEmail.addEventListener('focusout', checkSigninEmail);

  //<비밀번호 빈 값일때 오류메시지 출력>
  inputPassword.addEventListener('focusout', checkPassword);

  submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  validAccount(email, password);
  });
  loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  validAccount(email, password);
  });