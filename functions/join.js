import { inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, inputPswCheckEl,TEST_EMAIL } from './variablesEl.js'

function checkUserForJoin() {
  const INPUT_EMAIL_VALUE = inputEmailEl.value;
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const VALID_EMAIL_CHECK = VALID_EMAIL_REG .test(INPUT_EMAIL_VALUE);
  const VALID_PSW_VALUE = inputPswEl.value;
  const VALID_PSW_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const VALID_PSW_CHECK = VALID_PSW_REG.test(VALID_PSW_VALUE);
  const INPUT_PSW_CHECK_VALUE = inputPswCheckEl.value;

  if (
      VALID_EMAIL_CHECK && 
      VALID_PSW_CHECK &&
      VALID_PSW_VALUE === INPUT_PSW_CHECK_VALUE &&
      INPUT_EMAIL_VALUE!== TEST_EMAIL
    )
      return location.href = '/folder';
  
  showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
  showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

  inputPswEl.classList.add('input-wrong');
  inputEmailEl.classList.add('input-wrong');
  inputPswCheckEl.classList.add('input-wrong');
  inputEmailEl.setAttribute('onfocus', 'this.select()');
  inputPswEl.setAttribute('onfocus', 'this.select()');
  inputPswCheckEl.setAttribute('onfocus','this.select()');
} 

function checkUserForJoinByEnter (e) {
  if(e.key === 'Enter') {
    checkUserForJoin();
  }
}

export { checkUserForJoin, checkUserForJoinByEnter };