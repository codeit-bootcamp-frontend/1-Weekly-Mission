  import { errorMessageStop, addErrorStyle, removeErrorStyle } from './errors/errors.js';
  import { toggleImage } from './toggleImage.js';
  import { checkPassword } from './input/checkPassword.js';
  import { accountInfo } from './accounts/accountInfo.js';

  const eyeImagePasswordEl = document.querySelector('#eyeImage-password')
  const eyeImagePasswordReEl = document.querySelector('#eyeImage-password-re')
  const eyeImagePassword = eyeImagePasswordEl.children[0]
  const eyeImagePasswordRe = eyeImagePasswordReEl.children[0]
  const inputEmail= document.querySelector('#sign-up')
  const inputPassword = document.querySelector('#password')
  const inputPasswordRe = document.querySelector('#password-re')
  const submitButton = document.querySelector('button[type="submit"]');
  const [inputEmailCss, inputPasswordCss, inputPasswordReCss] = document.querySelectorAll('input')
  const signupForm = document.querySelector('form');

  //오류메시지 출력
  const emailErrorMessage = document.querySelector('.email-error-message')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  const passwordReErrorMessage = document.querySelector('.password-re-error-message')

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
  eyeImagePasswordRe.addEventListener('click', ()=> {
    toggleImage(eyeImagePasswordRe, inputPasswordRe)});

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
  function checkEmail(){
    const email = inputEmail.value.trim();    //사용자가 인풋란에 입력한 값을 JS에서 email로 선언
    if (email === ''){
      addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 입력해주세요.');
    }else if (!testEmail(email)){
      addErrorStyle(inputEmailCss, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
    }else if (!(accountInfo.find(account => account.email === email)===undefined)){
      addErrorStyle(inputEmailCss, emailErrorMessage, '이미 사용중인 이메일입니다.');
    }else {
      removeErrorStyle(inputEmailCss, emailErrorMessage)
      return true;
    }
  };
  inputEmail.addEventListener('focusout', checkEmail)

  //<비밀번호 형식 검증>
  // function checkPassword(){
  //   const password = inputPassword.value;
  //   if (password === ''){
  //     addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 입력해주세요.');
  //   }else if (password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)){
  //     addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
  //   }else {
  //     removeErrorStyle(inputPasswordCss, passwordErrorMessage)
  //     return true;
  //   };
  // }
  inputPassword.addEventListener('focusout', checkPassword)

  //비밀번호-비밀번호 확인 값 일치 확인
  function checkPasswordRe(){
    const password = inputPassword.value;
    const passwordRe = inputPasswordRe.value;
    if (password !== passwordRe){
      addErrorStyle(inputPasswordReCss, passwordReErrorMessage, '비밀번호가 일치하지 않아요.');
    }else{
      removeErrorStyle(inputPasswordReCss, passwordReErrorMessage)
      return true;
    }
  }
  inputPasswordRe.addEventListener('focusout', checkPasswordRe)

  //이메일&비밀번호 모두 유효한 값이라면 버튼 동작하도록 함
  function submitAccount() {
    const isEmailValid = checkEmail(); 
    const isPasswordValid = checkPassword();
    const isPasswordReValid = checkPasswordRe(); 
    if (isEmailValid && isPasswordValid && isPasswordReValid) {
      window.location.href = './folder.html';
    }}

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    submitAccount();
  });

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = inputEmail.value.trim();
    const password = inputPassword.value;
    validAccount(email, password);
  });