import { inputEmailEl, showMessageByEmailEl } from './variablesEl.js'

function checkEmailValid() {
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const INPUT_EMAIL_VALUE = inputEmailEl.value;
  const VALID_EMAIL_CHECK = VALID_EMAIL_REG .test(INPUT_EMAIL_VALUE);

  if(!INPUT_EMAIL_VALUE) {
    showMessageByEmailEl.textContent = '이메일을 입력해주세요.';
    inputEmailEl.classList.add('input-wrong');
    return;
    }

  if (!VALID_EMAIL_CHECK) {
    showMessageByEmailEl.textContent = '올바른 이메일 주소가 아닙니다.';
    inputEmailEl.classList.add('input-wrong');
    return;
  }
}

function removeEmailCheckMessage () {
  showMessageByEmailEl.textContent = '';
  inputEmailEl.classList.remove('input-wrong');
}

export { checkEmailValid, removeEmailCheckMessage };