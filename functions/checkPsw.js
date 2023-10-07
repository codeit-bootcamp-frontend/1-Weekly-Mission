import { inputPswEl, showMessageByPswEl, inputPswCheckEl,showMessageByPswCheckEl } from './variablesEl.js'

function checkPasswordFill () {
const INPUT_PSW_VALUE = inputPswEl.value;

  if(!INPUT_PSW_VALUE) {
  showMessageByPswEl.textContent = '비밀번호를 입력해주세요.';
  inputPswEl.classList.add('input-wrong');
  }
}

function checkPasswordValid (e) {
  const VALID_PSW_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const VALID_PSW_CHECK = VALID_PSW_REG.test(e.target.value);

  if(!VALID_PSW_CHECK){
    showMessageByPswEl.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    inputPswEl.classList.add('input-wrong');
  }
}

function checkPasswordSame () {
  const INPUT_PSW_VALUE = inputPswEl.value;
  const INPUT_PSW_CHECK_VALUE = inputPswCheckEl.value;

  if(INPUT_PSW_VALUE !== INPUT_PSW_CHECK_VALUE) {
    showMessageByPswCheckEl.textContent = '비밀번호가 일치하지 않아요.';
    inputPswCheckEl.classList.add('input-wrong');
  } else {
    inputPswCheckEl.classList.remove('input-wrong');
  }
}

function removePswCheckMessage () {
  showMessageByPswEl.textContent = '';
  inputPswEl.classList.remove('input-wrong');
}

function removePswSameCheckMessage () {
  showMessageByPswCheckEl.textContent = '';
  inputPswCheckEl.classList.remove('input-wrong');
}

function showPsw (e) {
  if(e.target.getAttribute('src') === "images/icon/eye-off.svg") {
    e.target.setAttribute('src', 'images/icon/eye-on.svg');
    e.target.classList.contains('psw-check-eye') ? 
    inputPswCheckEl.removeAttribute('type') : 
    inputPswEl.removeAttribute('type');
  } else {
    e.target.setAttribute('src', 'images/icon/eye-off.svg');
    e.target.classList.contains('psw-check-eye') ? 
    inputPswCheckEl.setAttribute('type','password') : 
    inputPswEl.setAttribute('type','password');
  }
}

export { checkPasswordFill, checkPasswordValid, checkPasswordSame, removePswCheckMessage,removePswSameCheckMessage, showPsw };