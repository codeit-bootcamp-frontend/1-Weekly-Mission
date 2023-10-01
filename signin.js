const INPUT_EMAIL = document.querySelector('.input-email');
const INPUT_PSW = document.querySelector('.input-psw');
const INPUT_PSW_CHECK = document.querySelector('.psw-box.check .input-psw');
const LOGIN_BUTTON = document.querySelector('.sign-link');
const MESSAGE_P = document.createElement('p');
const SIGN_BOX = document.querySelector('.sign-box');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PSW = 'codeit101';

function checkEmail() {

  const validRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; 
  const EMAIL_BOX = document.querySelector('.email-box');

  if(!INPUT_EMAIL.value) {
  MESSAGE_P.textContent = '이메일을 입력해주세요.';
  EMAIL_BOX.append(MESSAGE_P);
  INPUT_EMAIL.classList.add('input-wrong');
  } else if (!validRegex.test(INPUT_EMAIL.value)) {
    MESSAGE_P.textContent = '올바른 이메일 주소가 아닙니다.';
    EMAIL_BOX.append(MESSAGE_P);
    INPUT_EMAIL.classList.add('input-wrong');
  }
}

function removeEmailCheckMessage () {
  const EMAIL_BOX_P = document.querySelectorAll('.email-box > p');

  if(INPUT_PSW.type === focus)
  for(P of EMAIL_BOX_P) {
    P.remove();
  }
  INPUT_EMAIL.classList.remove('input-wrong');
}

function removePswCheckMessage () {
  const PSW_BOX_P = document.querySelectorAll('.psw-box > p');
  const PSW_BOX_EYE = document.querySelector('.psw-box img');

  for(P of PSW_BOX_P) {
    P.remove();
  }

    PSW_BOX_EYE.classList.remove('psw-wrong');
    INPUT_PSW.classList.remove('input-wrong');
}

function checkPassword () {
  const PSW_BOX = document.querySelector('.psw-box');
  const PSW_BOX_EYE = document.querySelector('.psw-box img');

  if(!INPUT_PSW.value) {
    MESSAGE_P.textContent = '비밀번호를 입력해주세요.';
    PSW_BOX.append(MESSAGE_P);
    PSW_BOX_EYE.classList.add('psw-wrong');
    INPUT_PSW.classList.add('input-wrong');
  }
}

function checkTestEmailLogin(e) {
  if(INPUT_EMAIL.value === TEST_EMAIL && INPUT_PSW.value === TEST_PSW) {
    e.target.setAttribute('href', '/folder');

  } else {
    const SHOW_MESSAGE_WRONG_EMAIL = document.createElement('p');
    const SHOW_MESSAGE_WRONG_PSW = document.createElement('p');
    const EMAIL_BOX = document.querySelector('.email-box');
    const PSW_BOX = document.querySelector('.psw-box');
    const PSW_BOX_EYE = document.querySelector('.psw-box img');
    const EMAIL_BOX_P = document.querySelectorAll('.email-box > p');
    const PSW_BOX_P = document.querySelectorAll('.psw-box > p');

    for(P of EMAIL_BOX_P) {
      P.remove();
    }

    for(P of PSW_BOX_P) {
      P.remove();
    }
    
    SHOW_MESSAGE_WRONG_EMAIL.textContent = '이메일을 확인해주세요.';
    EMAIL_BOX.append(SHOW_MESSAGE_WRONG_EMAIL);
    SHOW_MESSAGE_WRONG_PSW.textContent = '비밀번호를 확인해주세요.';
    PSW_BOX.append(SHOW_MESSAGE_WRONG_PSW); 
    PSW_BOX_EYE.classList.add('psw-wrong');
    INPUT_PSW.classList.add('input-wrong');
    INPUT_EMAIL.classList.add('input-wrong');

    INPUT_EMAIL.setAttribute('onfocus', 'this.select()');
    INPUT_PSW.setAttribute('onfocus', 'this.select()');
  }
}


INPUT_EMAIL.addEventListener('focusout', checkEmail);
INPUT_EMAIL.addEventListener('focusin', removeEmailCheckMessage);

INPUT_PSW.addEventListener('focusout', checkPassword);
INPUT_PSW.addEventListener('focusin', removePswCheckMessage);

LOGIN_BUTTON.addEventListener('click',checkTestEmailLogin);

