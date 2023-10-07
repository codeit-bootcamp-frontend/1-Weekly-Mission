import { inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, eyeOffIconEls, showMessageByPswCheckEl, inputPswCheckEl ,TEST_EMAIL } from './variablesEl.js'

function checkUserForJoin(e) {
  if (inputEmailEl.value && !showMessageByPswCheckEl.textContent && inputEmailEl.value !== TEST_EMAIL) 
  return e.target.setAttribute('href', '/folder')
  
    showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
    showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';
    showMessageByPswCheckEl.textContent = '비밀번호를 확인해주세요.'

    eyeOffIconEls.forEach((eyeOffIconEl) => eyeOffIconEl.classList.add('psw-wrong'));
    inputPswEl.classList.add('input-wrong');
    inputEmailEl.classList.add('input-wrong');
    inputPswCheckEl.classList.add('input-wrong');
    inputEmailEl.setAttribute('onfocus', 'this.select()');
    inputPswEl.setAttribute('onfocus', 'this.select()');
    inputPswCheckEl.setAttribute('onfocus','this.select()');
  }

  export {checkUserForJoin};