//함수수정하기

import { inputPswEl, showMessageByPswEl, eyeOffIconEls } from './variablesEl.js'


function removePswCheckMessage () {
  showMessageByPswEl.textContent = '';
  eyeOffIconEls[0].classList.remove('psw-wrong');
  inputPswEl.classList.remove('input-wrong');
}

function checkPasswordFill () {
const INPUT_PSW_VALUE = inputPswEl.value;

  if(!INPUT_PSW_VALUE) {
  showMessageByPswEl.textContent = '비밀번호를 입력해주세요.';
  eyeOffIconEls[0].classList.add('psw-wrong');
  inputPswEl.classList.add('input-wrong');
  }
}

function showPsw () {
  if(eyeOffIconEls[0].getAttribute('src') === "images/icon/eye-off.svg") {
    eyeOffIconEls[0].setAttribute('src', 'images/icon/eye-on.svg');
    inputPswEl.removeAttribute('type');
  } else {
    eyeOffIconEls[0].setAttribute('src', 'images/icon/eye-off.svg');
    inputPswEl.setAttribute('type','password');
  }
}

export { removePswCheckMessage, checkPasswordFill, showPsw };