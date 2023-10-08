
import {
  emailInputEl, passwordInputEl, 
  emailErrorEl, passwordErrorEl,
  emailPattern, accountInfo, 
  signButton, eyeComponents, 
  validateInput, changeEyeComponentOnOff
} from '/js/utils.js';

const checkEmailInput = () => {
  if (emailInputEl.value == '') {  // 만약 인풋 태그가 비어있다면
    validateInput(emailErrorEl, '이메일을 입력해주세요.', emailErrorEl);
  } else if (emailPattern.test(emailInputEl.value) == false) {  // 이메일 유효성 검사
    validateInput(emailErrorEl, '올바른 이메일 주소가 아닙니다.', emailErrorEl);
  } else {
    validateInput(emailErrorEl, '', emailErrorEl, 'var(--gray-three)');
  }
}

const checkPasswordInput = () => {
  if (passwordInputEl.value == '') { 
    validateInput(passwordErrorEl, '비밀번호를 입력해주세요.', Array.from(eyeComponents)[0]);
  } else {
    validateInput(passwordErrorEl, '', Array.from(eyeComponents)[0], 'var(--gray-three)');
  }
}
 
const tryLogin = () => {
  if (emailInputEl.value === accountInfo.codeit.id && passwordInputEl.value === accountInfo.codeit.password) {  // 만약 코드잇 계정으로 로그인 한다면
    location.replace('/folder.html');  // location.href()는 뒤로가기(이젠페이지로 이동)이 가능, replace는 불가능
  } else {
    validateInput(emailErrorEl, '이메일을 확인해주세요.', emailErrorEl);
    validateInput(passwordErrorEl, '비밀번호를 확인해주세요.', Array.from(eyeComponents)[0]);
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', checkEmailInput);
passwordInputEl.addEventListener('focusout', checkPasswordInput);
signButton.addEventListener('click', tryLogin);
[...eyeComponents].forEach(eyeComponent => eyeComponent.addEventListener('click', changeEyeComponentOnOff));
emailInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && tryLogin());  // e.code도 같은 결과
passwordInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && tryLogin());