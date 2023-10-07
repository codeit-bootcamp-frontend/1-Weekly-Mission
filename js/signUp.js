import {
  emailInputEl, passwordInputEl, 
  emailErrorEl, passwordErrorEl,
  emailPattern, accountInfo, 
  signButton, eyeComponents, 
  activeError, eyeComponentOnOffChange
} from '/js/utils.js';

// 비밀번호 재확인 인풋값에 대한 검사를 하기 위한 변수(인풋 태그를 가져옴)
const passwordAgainInputEl = document.querySelector('input.password-again');
// 검사에 대한 결과(오류메세지)를 입력할 변수(인풋 태그 아래에 빈 요소를 가져옴)
const passwordAgainErrorEl = document.querySelector('.password-again.error-msg');
// 비밀번호 유효성 검사식
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const checkEmailInput = () => {
  if (emailInputEl.value == '') {  // 만약 인풋 태그가 비어있다면
    activeError(emailErrorEl, '이메일을 입력해주세요.', emailErrorEl);
  } else if (emailPattern.test(emailInputEl.value) == false) {  // 이메일 유효성 검사
    activeError(emailErrorEl, '올바른 이메일 주소가 아닙니다.', emailErrorEl);
  } else if (emailInputEl.value === accountInfo.codeit.id) {
    activeError(emailErrorEl, '이미 사용중인 이메일입니다.', emailErrorEl);
  } else {
    activeError(emailErrorEl, '', emailErrorEl, 'var(--gray-three)');
  }
}

const checkPasswordInput = () => {
  if (!passwordPattern.test(passwordInputEl.value)) { 
    activeError(passwordErrorEl, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.', Array.from(eyeComponents)[0]);
  } else {
    activeError(passwordErrorEl, '', Array.from(eyeComponents)[0], 'var(--gray-three)');
  }
}

const checkPasswordAgainInput = () => {
  if (passwordInputEl.value != passwordAgainInputEl.value) {
    activeError(passwordAgainErrorEl, '비밀번호가 일치하지 않아요.', Array.from(eyeComponents)[1]);
  } else {
    activeError(passwordAgainErrorEl, '', Array.from(eyeComponents)[1], 'var(--gray-three)');
  }
}
 
const trySignUp = () => {
  checkEmailInput();
  checkPasswordInput();
  checkPasswordAgainInput();
  if (emailInputEl.value === accountInfo.codeit.id) {  // 만약 코드잇 계정으로 로그인 한다면
    activeError(emailErrorEl, '이미 회원가입된 이메일입니다.', emailErrorEl);
  } else if (!emailErrorEl.textContent  && !passwordErrorEl.textContent && !passwordAgainErrorEl.textContent) {
    location.replace('/folder.html');
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', checkEmailInput);
passwordInputEl.addEventListener('focusout', checkPasswordInput);
signButton.addEventListener('click', trySignUp);
[...eyeComponents].forEach(compo => compo.addEventListener('click', eyeComponentOnOffChange));
passwordAgainInputEl.addEventListener('focusout', checkPasswordAgainInput);
emailInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && trySignUp());  // e.code도 같은 결과
passwordInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && trySignUp());
passwordAgainInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && trySignUp());