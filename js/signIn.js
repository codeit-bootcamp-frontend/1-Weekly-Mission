
import {emailInputEl, passwordInputEl, signButton, emailErrorEl, passwordErrorEl,
  eyeComponents, emailPattern, accountInfo, activeError, eyeComponentOnOffChange} from '/js/utils.js';

const checkEmailInput = () => {
  if (emailInputEl.value == '') {  // 만약 인풋 태그가 비어있다면
    activeError(emailErrorEl, '이메일을 입력해주세요.', emailErrorEl);
  } else if (emailPattern.test(emailInputEl.value) == false) {  // 이메일 유효성 검사
    activeError(emailErrorEl, '올바른 이메일 주소가 아닙니다.', emailErrorEl);
  } else {
    activeError(emailErrorEl, '', emailErrorEl, 'var(--gray-three)');
  }
}

const checkPasswordInput = () => {
  if (passwordInputEl.value == '') { 
    activeError(passwordErrorEl, '비밀번호를 입력해주세요.', Array.from(eyeComponents)[0]);
  } else {
    activeError(passwordErrorEl, '', Array.from(eyeComponents)[0], 'var(--gray-three)');
  }
}
 
const TryLogin = () => {
  if (emailInputEl.value === accountInfo.codeit.id && passwordInputEl.value === accountInfo.codeit.password) {  // 만약 코드잇 계정으로 로그인 한다면
    location.replace('/folder.html');  // location.href()는 뒤로가기(이젠페이지로 이동)이 가능, replace는 불가능
  } else {
    activeError(emailErrorEl, '이메일을 확인해주세요.', emailErrorEl);
    activeError(passwordErrorEl, '비밀번호를 확인해주세요.', Array.from(eyeComponents)[0]);
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', checkEmailInput);
passwordInputEl.addEventListener('focusout', checkPasswordInput);
signButton.addEventListener('click', TryLogin);
[...eyeComponents].forEach(compo => compo.addEventListener('click', eyeComponentOnOffChange));