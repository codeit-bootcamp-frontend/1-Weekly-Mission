  //<비밀번호 빈 값일때 오류메시지 출력>
  import { addErrorStyle, removeErrorStyle } from '../errors/errors.js';

  const inputPassword = document.querySelector('#password')
  const [inputEmailCss, inputPasswordCss] = document.querySelectorAll('input')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  
  function checkPassword(){
    const password = inputPassword.value;
    if (password === ''){
      addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 입력해주세요.');
    } else if (password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)){
      addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    } else {
      removeErrorStyle(inputPasswordCss, passwordErrorMessage)
      return true;
    };
  }

  export { checkPassword }; 