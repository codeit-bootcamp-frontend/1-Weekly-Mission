import { inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl,TEST_EMAIL, TEST_PSW } from './variablesEl.js'

function checkUserForLogin() {
  const INPUT_EMAIL_VALUE = inputEmailEl.value;
  const INPUT_PSW_VALUE = inputPswEl.value;
  if (
      INPUT_EMAIL_VALUE === TEST_EMAIL && 
      INPUT_PSW_VALUE === TEST_PSW
    ) 
      return location.href = '/folder';
  
  showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
  showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

  inputPswEl.classList.add('input-wrong');
  inputEmailEl.classList.add('input-wrong');
  inputEmailEl.setAttribute('onfocus', 'this.select()');
  inputPswEl.setAttribute('onfocus', 'this.select()');
}

function checkUserForLoginByEnter (e) {
  if(e.key === 'Enter') {
    checkUserForLogin();
  }
}

export { checkUserForLogin, checkUserForLoginByEnter };