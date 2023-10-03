
const inputEmailEl = document.querySelector('.input-email');
const inputPswEl = document.querySelector('.input-psw');
const loginBtn = document.querySelector('.sign-link');
const showMessageByEmailEl = document.querySelector('.by-email');
const showMessageByPswEl = document.querySelector('.by-psw')
const ShowPswEyeIconEl = document.querySelector('.psw-box img');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PSW = 'codeit101';

function checkEmail() {
  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const VALID_EMAIL_CHECK = VALID_EMAIL_REG .test(inputEmailEl.value);
  // early return 기법 사용
  if(!inputEmailEl.value) {
    showMessageByEmailEl.textContent = '이메일을 입력해주세요.';
    inputEmailEl.classList.add('input-wrong');
    } else if (!VALID_EMAIL_CHECK) {
      showMessageByEmailEl.textContent = '올바른 이메일 주소가 아닙니다.';
      inputEmailEl.classList.add('input-wrong');
    }
}

function removeEmailCheckMessage () {
  showMessageByEmailEl.textContent = '';
  inputEmailEl.classList.remove('input-wrong');
}

function removePswCheckMessage () {
    showMessageByPswEl.textContent = '';
    ShowPswEyeIconEl.classList.remove('psw-wrong');
    inputPswEl.classList.remove('input-wrong');
}

function checkPassword () {
  if(!inputPswEl.value) {
    showMessageByPswEl.textContent = '비밀번호를 입력해주세요.';
    ShowPswEyeIconEl.classList.add('psw-wrong');
    inputPswEl.classList.add('input-wrong');
  }
}

function checkUser(e) {
  if(inputEmailEl.value === TEST_EMAIL && inputPswEl.value === TEST_PSW) {
    e.target.setAttribute('href', '/folder');

  } else {
    showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
    showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

    ShowPswEyeIconEl.classList.add('psw-wrong');
    inputPswEl.classList.add('input-wrong');
    inputEmailEl.classList.add('input-wrong');

    inputEmailEl.setAttribute('onfocus', 'this.select()');
    inputPswEl.setAttribute('onfocus', 'this.select()');
  }
}


inputEmailEl.addEventListener('focusout', checkEmail);
inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);

inputPswEl.addEventListener('focusout', checkPassword);
inputPswEl.addEventListener('focusin', removePswCheckMessage);

loginBtn.addEventListener('click',checkUser);

