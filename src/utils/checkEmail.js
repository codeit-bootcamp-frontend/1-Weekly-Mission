import { showMessageByEmailEl } from '../shared/constants.js'

// 이메일 입력값 체크
function checkEmailValid(e) {
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const inputEmailValue = e.target.value;
  const validEmailCheck = VALID_EMAIL_REG .test(inputEmailValue);

  if(!inputEmailValue) {
    showMessageByEmailEl.textContent = '이메일을 입력해주세요.';
    e.target.classList.add('input-wrong');
    return;
    }

  if (!validEmailCheck) {
    showMessageByEmailEl.textContent = '올바른 이메일 주소가 아닙니다.';
    e.target.classList.add('input-wrong');
    return;
  }

  if(inputEmailValue && validEmailCheck) {
    removeEmailCheckMessage(e);
    return;
  }
}

// 이메일 안내메시지 삭제
function removeEmailCheckMessage (e) {
  showMessageByEmailEl.textContent = '';
  e.target.classList.remove('input-wrong');
}

export { checkEmailValid, removeEmailCheckMessage };