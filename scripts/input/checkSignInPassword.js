  //<비밀번호 빈 값일때 오류메시지 출력>
  import { addErrorStyle, removeErrorStyle } from '../errors/errors.js';
  const inputPassword = document.querySelector('#password')
  const [inputEmailCss, inputPasswordCss] = document.querySelectorAll('input')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  
  function checkSigninPassword(){
    const password = inputPassword.value;
    if (password === ''){
      addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 입력해주세요.');
    }else {
      removeErrorStyle(inputPasswordCss, passwordErrorMessage);
    };
  }

  export { checkSigninPassword }; 