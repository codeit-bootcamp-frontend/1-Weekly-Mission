const INPUT_EMAIL = document.querySelector('.input-email');
const EMAIL_BOX = document.querySelector('.email-box');
const INPUT_PSW = document.querySelector('.input-psw');
const PSW_BOX = document.querySelector('.psw-box');
const PSW_BOX_EYE = document.querySelector('.psw-box img');
const LOGIN_BUTTON = document.querySelector('.sign-link');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PSW = 'codeit101';

function checkEmail() {
  let validRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; 

  if(!INPUT_EMAIL.value && INPUT_EMAIL.value !== null) {
  const SHOW_MESSAGE_INPUT_EMAIL = document.createElement('p');
  SHOW_MESSAGE_INPUT_EMAIL.textContent = '이메일을 입력해주세요.';
  EMAIL_BOX.append(SHOW_MESSAGE_INPUT_EMAIL);
  } else if (!validRegex.test(INPUT_EMAIL.value)) {
    const SHOW_MESSAGE_WRONG_EMAIL = document.createElement('p');
    SHOW_MESSAGE_WRONG_EMAIL.textContent = '올바른 이메일 주소가 아닙니다.';
    EMAIL_BOX.append(SHOW_MESSAGE_WRONG_EMAIL); 
  }
}

function removeEmailCheckMessage () {
  const EMAIL_BOX_P = document.querySelectorAll('.email-box > p');

  for(P of EMAIL_BOX_P) {
    P.remove();
  }
}

function removePswCheckMessage () {
  const PSW_BOX_P = document.querySelectorAll('.psw-box > p');

  for(P of PSW_BOX_P) {
    P.remove();
  }

  if(PSW_BOX_EYE.className) {
    PSW_BOX_EYE.classList.remove('psw-wrong');
  }
}

function checkPassword () {
  if(!INPUT_PSW.value && INPUT_PSW.value !== null) {
    const SHOW_MESSAGE_INPUT_PSW = document.createElement('p');
    SHOW_MESSAGE_INPUT_PSW.textContent = '비밀번호를 입력해주세요.';
    PSW_BOX.append(SHOW_MESSAGE_INPUT_PSW);
    PSW_BOX_EYE.classList.add('psw-wrong'); 
  }
}

function checkTestEmailLogin(e) {

  
  if(INPUT_EMAIL.value === TEST_EMAIL && INPUT_PSW.value === TEST_PSW) {
    e.target.setAttribute('href', '/folder');

  } else {
    const SHOW_MESSAGE_WRONG_EMAIL = document.createElement('p');
    const SHOW_MESSAGE_WRONG_PSW = document.createElement('p');

    const EMAIL_BOX_P = document.querySelectorAll('.email-box > p');
    for(P of EMAIL_BOX_P) {
      P.remove();
    }
    
    const PSW_BOX_P = document.querySelectorAll('.psw-box > p');
    for(P of PSW_BOX_P) {
      P.remove();
    }
    
    SHOW_MESSAGE_WRONG_EMAIL.textContent = '이메일을 확인해주세요.';
    EMAIL_BOX.append(SHOW_MESSAGE_WRONG_EMAIL);
   
    SHOW_MESSAGE_WRONG_PSW.textContent = '비밀번호를 확인해주세요.';
    PSW_BOX.append(SHOW_MESSAGE_WRONG_PSW); 
    PSW_BOX_EYE.classList.add('psw-wrong');
    
  }
}

INPUT_EMAIL.addEventListener('focusout', checkEmail);
INPUT_EMAIL.addEventListener('focusin', removeEmailCheckMessage);

INPUT_PSW.addEventListener('focusout', checkPassword);
INPUT_PSW.addEventListener('focusin', removePswCheckMessage);
INPUT_PSW.addEventListener('change', checkTestEmailLogin);

LOGIN_BUTTON.addEventListener('click',checkTestEmailLogin);



