  // <아이디&비밀번호 올바르게 입력했을 경우 /folder로 이동하고 아닌 경우 확인메시지 출력>
  const [inputEmailCss, inputPasswordCss] = document.querySelectorAll('input')
  const emailErrorMessage = document.querySelector('.email-error-message')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  import { addErrorStyle } from '../errors/errors.js';
  import { accountInfo } from './accountInfo.js'

  function validAccount(email, password){
    const accountMatch = accountInfo.find(account => account.email === email)
    if (accountMatch){
      if (accountMatch.password === password){
        window.location.href = './folder.html';
      }else{
        addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
      }
    }else{
      addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 확인해주세요.');
      addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
    }
  }
  export { validAccount }

//이전에 작성했던 함수  
  // function validAccount(email, password){
  //   if (email === 'test@codeit.com' && password === 'codeit101'){
  //     window.location.href = './folder.html';
  //   } else if (email !== 'test@codeit.com' && password === 'codeit101'){
  //     addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 확인해주세요.');
  //   } else if (email === 'test@codeit.com' && password !== 'codeit101'){
  //     addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
  //   } else{
  //     addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 확인해주세요.');
  //     addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
  //   }
  // }