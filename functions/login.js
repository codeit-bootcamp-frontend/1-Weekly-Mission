import { inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, eyeOffIconEls,TEST_EMAIL, TEST_PSW } from './variablesEl.js'

function checkUserForLogin(e) {
  if (inputEmailEl.value === TEST_EMAIL && inputPswEl.value === TEST_PSW) 
  return e.target.setAttribute('href', '/folder')
  
    showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
    showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

    eyeOffIconEls.forEach((eyeOffIconEl) => eyeOffIconEl.classList.add('psw-wrong'));
    inputPswEl.classList.add('input-wrong');
    inputEmailEl.classList.add('input-wrong');
    inputEmailEl.setAttribute('onfocus', 'this.select()');
    inputPswEl.setAttribute('onfocus', 'this.select()');
  }

export { checkUserForLogin };