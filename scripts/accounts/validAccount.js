  // <아이디&비밀번호 올바르게 입력했을 경우 /folder로 이동하고 아닌 경우 확인메시지 출력>
  const [inputEmailCss, inputPasswordCss] = document.querySelectorAll('input')
  const emailErrorMessage = document.querySelector('.email-error-message')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  import { addErrorStyle } from '../errors/errors.js';
  import { accountInfo } from './constants.js'

  function validAccount(email, password){
    const accountMatch = accountInfo.find(account => account.email === email)
    if (accountMatch && accountMatch.password === password){
      window.location.href = './folder.html';
    }
    if (!accountMatch) {
      addErrorStyle(inputEmailCss, emailErrorMessage, '이메일을 확인해주세요.');
    }
    if (accountMatch.password !== password){
      addErrorStyle(inputPasswordCss, passwordErrorMessage, '비밀번호를 확인해주세요');
    }
  export { validAccount }