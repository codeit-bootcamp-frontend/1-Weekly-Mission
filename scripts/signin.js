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
  // const passwordErrorMessage = document.querySelector('.password-error-message')

 // <눈모양 아이콘 적용, 비밀번호 입력타입 변경>
  // function toggleImage(image, inputPassword) {
  //   if (image.src.includes('eye-off')) {
  //     image.setAttribute('src','./images/signin/eye-on.svg');
  //     inputPassword.setAttribute('type', '');
  //   } else {
  //     image.setAttribute('src','./images/signin/eye-off.svg');
  //     inputPassword.setAttribute('type', 'password');
  //   }
  // }
  eyeImagePassword.addEventListener('click', ()=> {
    toggleImage(eyeImagePassword, inputPassword)});

  //<입력하는 동안에는 에러메시지 안 보이게 하기 >
  // function errorMessageStop(){
  //   emailErrorMessage.style.display = 'none';
  // }
  inputEmail.addEventListener('input', errorMessageStop)
  inputPassword.addEventListener('input', errorMessageStop)

  //<에러가 발생한 경우 CSS속성 정리>>
  // function addErrorStyle(inputElement, errorMessageElement, errorMessage){
  //   inputElement.style.border = '1px solid red';
  //   errorMessageElement.style.display = 'block';
  //   errorMessageElement.textContent = errorMessage;
  // }
  // function removeErrorStyle(inputElement, errorMessageElement, errorMessage){
  //   inputElement.style.border = '1px solid #ccd5e3';
  //   errorMessageElement.style.display = 'none';
  //   errorMessageElement.textContent = errorMessage;
  // }

  // <이메일 형식검증, 오류메시지 출력 >
  function testEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function checkSigninEmail(){
    const email = inputEmail.value.trim();
    if (email === ''){
      addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 입력해주세요.');
    }
    else if (!testEmail(email)){
      addErrorStyle(inputEmailCss, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
    }
    else{
      removeErrorStyle(inputEmailCss, emailErrorMessage);
    }
  };
  inputEmail.addEventListener('focusout', checkSigninEmail);

  //<비밀번호 빈 값일때 오류메시지 출력>
  // function checkPassword(){
  //   const password = inputPassword.value;
  //   if (password === ''){
  //     addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 입력해주세요.');
  //   }else {
  //     removeErrorStyle(inputPasswordCss, passwordErrorMessage);
  //   };
  // }
  inputPassword.addEventListener('focusout', checkPassword);

  // <아이디&비밀번호 올바르게 입력했을 경우 /folder로 이동하고 아닌 경우 확인메시지 출력>
// function validAccount(email, password){
//   const accountMatch = accountInfo.find(account => account.email === email)
//   if (accountMatch){
//     if (accountMatch.password === password){
//       window.location.href = './folder.html';
//     }else{
//       addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
//     }
//   }else{
//     addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 확인해주세요.');
//     addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
//   }
// }
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