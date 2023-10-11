// 요소노드 및 테스트데이터 import
import { inputEmailEl, inputPswEl, eyeOffIconByPswIcon, showMessageByEmailEl, showMessageByPswEl, TEST_EMAIL, TEST_PSW  } from '../../shared/constants.js'

// 이메일 체크, 이메일 안내메시지 삭제
import { checkEmailValid, removeEmailCheckMessage } from '../../utils/checkEmail.js';

// 비밀번호 체크, 비밀번호 안내메시지 삭제, 비밀번호 보이기on/off
import { checkPasswordFill, removePswCheckMessage, showPsw } from '../../utils/checkPsw.js';

// 로그인 가능 체크
function checkUserForLogin(e) {
  const inputEmailValue = inputEmailEl.value;
  const inputPswValue = inputPswEl.value;
  if (
      inputEmailValue === TEST_EMAIL && 
      inputPswValue === TEST_PSW
    ) 
      return location.href = '/folder';
  
  showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
  showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

  inputPswEl.classList.add('input-wrong');
  inputEmailEl.classList.add('input-wrong');
  inputEmailEl.setAttribute('onfocus', 'this.select()');
  inputPswEl.setAttribute('onfocus', 'this.select()');
}

// 엔터키로 로그인 실행
function checkUserForLoginByEnter (e) {
  if(e.key === 'Enter') {
    checkUserForLogin();
  }
}

//이벤트 리스너 등록
function initSignIn() {
  const loginBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValid);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);
  inputEmailEl.addEventListener('keypress', checkUserForLoginByEnter);

  inputPswEl.addEventListener('focusout', checkPasswordFill);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);
  inputPswEl.addEventListener('keypress', checkUserForLoginByEnter);
  loginBtn.addEventListener('click', checkUserForLogin);

  eyeOffIconByPswIcon.addEventListener('click', showPsw);

  
}

initSignIn();
