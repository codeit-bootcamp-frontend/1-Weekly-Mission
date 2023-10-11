// 요소노드 추출
const inputEmailEl = document.querySelector('.input-email');
const inputPswEl = document.querySelector('.input-psw');
const showMessageByEmailEl = document.querySelector('.by-email');
const showMessageByPswEl = document.querySelector('.by-psw')
const inputPswCheckEl = document.querySelector('.psw-box.check .input-psw');
const showMessageByPswCheckEl = document.querySelector('.by-psw-check');
const eyeOffIconByPswIcon = document.querySelector('.psw-box .psw-show-eye');
const eyeOffIconByPswCheckIcon = document.querySelector('.psw-box .psw-show-eye.psw-check');

// 상수 데이터
const TEST_EMAIL = 'test@codeit.com';
const TEST_PSW = 'codeit101';

export { 
  inputEmailEl, 
  inputPswEl, 
  showMessageByEmailEl, 
  showMessageByPswEl, 
  eyeOffIconByPswIcon,
  eyeOffIconByPswCheckIcon,
  inputPswCheckEl, 
  showMessageByPswCheckEl,
  TEST_EMAIL, 
  TEST_PSW 
};

  