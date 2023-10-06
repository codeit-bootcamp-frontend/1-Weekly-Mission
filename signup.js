import {inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, eyeOffIconEls,TEST_EMAIL,INPUT_EMAIL_VALUE, INPUT_PSW_VALUE} from './functions/variablesEl.js'

import {removeEmailCheckMessage, removePswCheckMessage, showPsw} from './signin.js'
const inputPswCheckEl = document.querySelector('.psw-box.check .input-psw');
const showMessageByPswCheckEl = document.querySelector('.by-psw-check');

const INPUT_PSW_CHECK_VALUE = inputPswCheckEl.value;

init();

// issue 
// 비밀번호 확인 눈모양 누르면 비밀번호 눈모양이 on/off됨


function checkEmailValidSame() {
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const VALID_EMAIL_CHECK = VALID_EMAIL_REG .test(INPUT_EMAIL_VALUE);
 
  if(!INPUT_EMAIL_VALUE || !VALID_EMAIL_CHECK || INPUT_EMAIL_VALUE === TEST_EMAIL) {
    inputEmailEl.classList.add('input-wrong');
  }

  if(!INPUT_EMAIL_VALUE) {
    showMessageByEmailEl.textContent = '이메일을 입력해주세요.';
    return;
    }

  if (!VALID_EMAIL_CHECK) {
    showMessageByEmailEl.textContent = '올바른 이메일 주소가 아닙니다.';
    return;
  }

  if(INPUT_EMAIL_VALUE === TEST_EMAIL) {
    showMessageByEmailEl.textContent = '이미 사용 중인 이메일입니다.'
    return;
  }
}

function checkPasswordSame () {
  if(INPUT_PSW_VALUE !== INPUT_PSW_CHECK_VALUE) {
    showMessageByPswCheckEl.textContent = '비밀번호가 일치하지 않아요.';
    eyeOffIconEls[1].classList.add('psw-wrong');
    inputPswCheckEl.classList.add('input-wrong');
  }
}
function checkPasswordValid (e) {
  if(e.target.value.length < 8 ){
    showMessageByPswEl.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    inputPswEl.classList.add('input-wrong');
  }
}

function init () {
  const signUpBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValidSame);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);

  inputPswEl.addEventListener('focusout', checkPasswordValid);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);

  inputPswCheckEl.addEventListener('focusout', checkPasswordSame);
  // showpsw 함수 바꾸기
  eyeOffIconEls.forEach((el) => el.addEventListener('click', showPsw));
}

