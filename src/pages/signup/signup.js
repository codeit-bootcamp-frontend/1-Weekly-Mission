import { 
  inputEmailEl, 
  inputPswEl, 
  showMessageByEmailEl, 
  showMessageByPswEl, 
  showMessageByPswCheckEl, 
  eyeOffIconByPswIcon,
  eyeOffIconByPswCheckIcon,
  inputPswCheckEl,
  API } 
  from '../../shared/constants.js';

import { 
  checkEmailValid, 
  removeEmailCheckMessage } 
  from '../../utils/checkEmail.js';

import { 
  checkPasswordFill, 
  removePswCheckMessage, 
  showPsw } 
  from '../../utils/checkPsw.js';

import { checkAccessToken } from '../../utils/checkAccessToken.js';

// 이메일 중복 체크
async function checkEmailValidWithOverlap (e) {
  const inputEmailValue = e.target.value;
  checkEmailValid(e);
  
  try {
    const response = await fetch(`${API}/check-email`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputEmailValue,
      })
    });
    
    if (response.status === 409) {
      
      showMessageByEmailEl.textContent = '이미 사용중인 이메일입니다.'
      e.target.classList.add('input-wrong');
      return;
    } 
  } catch (error) {
    console.log(error);
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

// 입력한 비밀번호가 동일한지 체크
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

// 입력한 비밀번호 비동일값 메시지 삭제
function removePswSameCheckMessage () {
  showMessageByPswCheckEl.textContent = '';
  inputPswCheckEl.classList.remove('input-wrong');
}

// 회원가입 가능 체크
async function checkUserForJoin() {
  const inputEmailValue = inputEmailEl.value;
  const inputPswValue = inputPswEl.value;
  const inputPswCheckValue = inputPswCheckEl.value;

  const VALID_EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const VALID_PSW_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  const validEmailCheck = VALID_EMAIL_REG .test(inputEmailValue);
  const validPswCheck = VALID_PSW_REG.test(inputPswValue);
 
  try {
    if (
      validEmailCheck &&
      validPswCheck &&
      (inputPswValue === inputPswCheckValue)
    ) {
      const response = await fetch(`${API}/sign-up` ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputEmailValue,
          password: inputPswValue
        })
      });

      const {data} = await response.json();
  
      if(data) {
        localStorage.setItem('accessToken', data.accessToken);
        return location.href = '../folder/folder.html';
      } else {
        showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
        showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

        inputPswEl.classList.add('input-wrong');
        inputEmailEl.classList.add('input-wrong');
        inputPswCheckEl.classList.add('input-wrong');
        inputEmailEl.setAttribute('onfocus', 'this.select()');
        inputPswEl.setAttribute('onfocus', 'this.select()');
        inputPswCheckEl.setAttribute('onfocus', 'this.select()');
      }
    }
  } catch (error) {
    console.log(error);
  }

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

// 페이지 로드 시 최초실행 함수들
function initSignUp () {
  checkAccessToken(); // accessToken 

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