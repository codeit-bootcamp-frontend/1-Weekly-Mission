  // <이메일 형식검증, 오류메시지 출력 >
  import { addErrorStyle, removeErrorStyle } from '../errors/errors.js';
  
  const inputEmail = document.querySelector('#sign-up')
  const [inputEmailCss, inputPasswordCss] = document.querySelectorAll('input')
  const emailErrorMessage = document.querySelector('.email-error-message')

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

  export { checkSigninEmail };