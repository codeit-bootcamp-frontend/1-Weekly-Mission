import {inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, eyeOffIconEl} from './variablesEl.js'

const TEST_EMAIL = 'test@codeit.com';
const TEST_PSW = 'codeit101';


function checkEmailValid() {
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const VALID_EMAIL_CHECK = VALID_EMAIL_REG .test(inputEmailEl.value);

  if(!inputEmailEl.value) {
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

function removePswCheckMessage () {
    showMessageByPswEl.textContent = '';
    eyeOffIconEl.classList.remove('psw-wrong');
    inputPswEl.classList.remove('input-wrong');
}

function checkPasswordFill () {
  if(!inputPswEl.value) {
    showMessageByPswEl.textContent = '비밀번호를 입력해주세요.';
    eyeOffIconEl.classList.add('psw-wrong');
    inputPswEl.classList.add('input-wrong');
  }
}

function checkUser(e) {
  if(inputEmailEl.value === TEST_EMAIL && inputPswEl.value === TEST_PSW) {
    e.target.setAttribute('href', '/folder');

  } else {
    showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
    showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

    eyeOffIconEl.classList.add('psw-wrong');
    inputPswEl.classList.add('input-wrong');
    inputEmailEl.classList.add('input-wrong');
    inputEmailEl.setAttribute('onfocus', 'this.select()');
    inputPswEl.setAttribute('onfocus', 'this.select()');
  }
}

function showPsw () {
  if(eyeOffIconEl.getAttribute('src') === "images/icon/eye-off.svg") {
    eyeOffIconEl.setAttribute('src', 'images/icon/eye-on.svg');
    inputPswEl.removeAttribute('type');
  } else {
    eyeOffIconEl.setAttribute('src', 'images/icon/eye-off.svg');
    inputPswEl.setAttribute('type','password');
  }
}

function init() {
  const loginBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValid);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);

  inputPswEl.addEventListener('focusout', checkPasswordFill);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);

  loginBtn.addEventListener('click', checkUser);

  eyeOffIconEl.addEventListener('click', showPsw);
}

init();

export {init};
