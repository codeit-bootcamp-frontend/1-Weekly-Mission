// 요소노드 및 테스트데이터 import
import { inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, showMessageByPswCheckEl, eyeOffIconByPswIcon,
  eyeOffIconByPswCheckIcon,inputPswCheckEl,TEST_EMAIL } from '../../shared/constants.js';

// 이메일 체크, 이메일 안내메시지 삭제
import { checkEmailValid, removeEmailCheckMessage } from '../../utils/checkEmail.js';

// 비밀번호 체크, 비밀번호 안내메시지 삭제, 비밀번호 보이기on/off
import { checkPasswordFill, removePswCheckMessage, showPsw } from '../../utils/checkPsw.js';

// 이메일 중복 체크
function checkEmailValidWithOverlap (e) {
  const inputEmailValue = e.target.value;
  checkEmailValid(e);
    if(
    e.target.classList.contains('overlap-check') && 
     inputEmailValue === TEST_EMAIL
    ) {
    showMessageByEmailEl.textContent = '이미 사용중인 이메일입니다.'
    e.target.classList.add('input-wrong');
  }
}


// 비밀번호 유효성 체크
function checkPasswordValid (e) {
  const VALID_PSW_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const validPswCheck = VALID_PSW_REG.test(e.target.value);

  if(!validPswCheck){
    showMessageByPswEl.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    inputPswEl.classList.add('input-wrong');
  }
}

// 비밀번호 확인값 체크
function checkPasswordSame () {
  const inputPswValue = inputPswEl.value;
  const inputPswCheckValue = inputPswCheckEl.value;

  if(inputPswValue !== inputPswCheckValue) {
    showMessageByPswCheckEl.textContent = '비밀번호가 일치하지 않아요.';
    inputPswCheckEl.classList.add('input-wrong');
  } else {
    inputPswCheckEl.classList.remove('input-wrong');
  }
}

// 비밀번호 확인값 안내메시지 삭제
function removePswSameCheckMessage () {
  showMessageByPswCheckEl.textContent = '';
  inputPswCheckEl.classList.remove('input-wrong');
}

// 회원가입 가능 체크
function checkUserForJoin() {
  const inputEmailValue = inputEmailEl.value;
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const validEmailCheck = VALID_EMAIL_REG .test(inputEmailValue);
  const validPswValue = inputPswEl.value;
  const VALID_PSW_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const validPswCheck = VALID_PSW_REG.test(validPswValue);
  const inputPswCheckValue = inputPswCheckEl.value;

  if (
      validEmailCheck && 
      validPswCheck &&
      validPswValue === inputPswCheckValue &&
      inputEmailValue!== TEST_EMAIL
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

// 비밀번호 확인 보이기on/off
function showPswCheck(e) {
  const isEyeOff = e.target.getAttribute('src') === "/src/assets/svg/eye-off.svg";
  const eyeOnPath = "/src/assets/svg/eye-on.svg";
  const eyeOffPath = "/src/assets/svg/eye-off.svg";

  if(isEyeOff) {
    e.target.setAttribute('src', eyeOnPath);
    inputPswCheckEl.removeAttribute('type');
  } else {
    e.target.setAttribute('src', eyeOffPath);
    inputPswCheckEl.setAttribute('type','password');
  }
}

// 이벤트 리스너 등록
function initSignUp () {
  const joinBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValidWithOverlap);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);
  inputEmailEl.addEventListener('keypress', checkUserForJoinByEnter);

  inputPswEl.addEventListener('focusout', checkPasswordFill);
  inputPswEl.addEventListener('focusout', checkPasswordValid);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);
  inputPswEl.addEventListener('keypress', checkUserForJoinByEnter);

  inputPswCheckEl.addEventListener('focusout', checkPasswordSame);
  inputPswCheckEl.addEventListener('focusin', removePswSameCheckMessage);
  inputPswCheckEl.addEventListener('keypress', checkUserForJoinByEnter);

  eyeOffIconByPswIcon.addEventListener('click', showPsw);
  eyeOffIconByPswCheckIcon.addEventListener('click', showPswCheck);

  joinBtn.addEventListener('click', checkUserForJoin);
}

initSignUp ();