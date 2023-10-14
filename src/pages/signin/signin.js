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

// 페이지 접근 시 엑세스토큰 보유 -> folder페이지로 이동
if(localStorage.getItem("accessToken")) {
  location.href = '../folder/folder.html';
}

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
  
  const responseData = await response.json();

  if (response.status === 200) {
    localStorage.setItem("accessToken", responseData.accessToken);
    return location.href = '../folder/folder.html';
  } 
  
  if(response.status === 400) {
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
