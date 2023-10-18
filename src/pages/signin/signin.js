import { 
  inputEmailEl, 
  inputPswEl, 
  eyeOffIconByPswIcon, 
  showMessageByEmailEl, 
  showMessageByPswEl, 
  API } 
  from '../../shared/constants.js'

import { 
  checkEmailValid, 
  removeEmailCheckMessage } 
  from '../../utils/checkEmail.js';

import { 
  checkPasswordFill, 
  removePswCheckMessage, 
  showPsw } 
  from '../../utils/checkPsw.js';

  import {checkAccessToken} from '../../utils/checkAccessToken.js'

// 로그인 가능 체크
async function checkUserForLogin() {
  const inputUserEmail = inputEmailEl.value;
  const inputUserPsw = inputPswEl.value;

  try {
    const response = await fetch(`${API}/sign-in`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: inputUserEmail,
      password: inputUserPsw
    })
  });
  
  const {data} = await response.json();

  if (data) {
    localStorage.setItem("accessToken", data.accessToken);
    return location.href = '../folder/folder.html';
  } else { 
    showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
    showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

    inputPswEl.classList.add('input-wrong');
    inputEmailEl.classList.add('input-wrong');
    inputEmailEl.setAttribute('onfocus', 'this.select()');
    inputPswEl.setAttribute('onfocus', 'this.select()');
  }
  } catch (error) {
    console.log(error);
  }
}

// 엔터키로 로그인 실행
function checkUserForLoginByEnter (e) {
  if(e.key === 'Enter') {
    checkUserForLogin();
  }
}

// 페이지 로드 시 최초실행 함수들
function initSignIn() {
  checkAccessToken();// accessToken 체크

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
