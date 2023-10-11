import { inputPswEl, showMessageByPswEl } from '../shared/constants.js'

// 비밀번호 입력값 체크
function checkPasswordFill (e) {
const inputPswValue = inputPswEl.value;

  if(!inputPswValue) {
  showMessageByPswEl.textContent = '비밀번호를 입력해주세요.';
  inputPswEl.classList.add('input-wrong');
  } else {
    removePswCheckMessage(e);
  }
}

// 비밀번호 안내메시지 삭제
function removePswCheckMessage () {
  showMessageByPswEl.textContent = '';
  inputPswEl.classList.remove('input-wrong');
}

// 비밀번호 보이기 on/off
function showPsw (e) {
  const isEyeOff = e.target.getAttribute('src') === "/src/assets/svg/eye-off.svg";
  const eyeOnPath = "/src/assets/svg/eye-on.svg";
  const eyeOffPath = "/src/assets/svg/eye-off.svg";

  if(isEyeOff) {
    e.target.setAttribute('src', eyeOnPath);
    inputPswEl.removeAttribute('type');
  } else {
    e.target.setAttribute('src', eyeOffPath);
    inputPswEl.setAttribute('type','password');
  }
}

export { checkPasswordFill, removePswCheckMessage, showPsw };