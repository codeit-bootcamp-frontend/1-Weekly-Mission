import { showMessageByEmailEl, TEST_EMAIL } from './variablesEl.js'

function checkEmailValid(e) {
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const INPUT_EMAIL_VALUE = e.target.value;
  const VALID_EMAIL_CHECK = VALID_EMAIL_REG .test(INPUT_EMAIL_VALUE);

  if(!INPUT_EMAIL_VALUE) {
    showMessageByEmailEl.textContent = '이메일을 입력해주세요.';
    e.target.classList.add('input-wrong');
    return;
    }

  if (!VALID_EMAIL_CHECK) {
    showMessageByEmailEl.textContent = '올바른 이메일 주소가 아닙니다.';
    e.target.classList.add('input-wrong');
    return;
  }

  if(e.target.classList.contains('overlap-check') && INPUT_EMAIL_VALUE === TEST_EMAIL) {
    showMessageByEmailEl.textContent = '이미 사용중인 이메일입니다.'
    e.target.classList.add('input-wrong');
  }
}

function removeEmailCheckMessage (e) {
  showMessageByEmailEl.textContent = '';
  e.target.classList.remove('input-wrong');
}

export { checkEmailValid, removeEmailCheckMessage };