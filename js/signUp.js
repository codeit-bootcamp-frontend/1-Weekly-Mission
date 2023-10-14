import {
  emailInputEl, passwordInputEl, 
  emailErrorEl, passwordErrorEl,
  emailPattern, getSignedMember, 
  signButton, eyeComponents, 
  validateInput, changeEyeComponentOnOff
} from '/js/utils.js';

// 비밀번호 재확인 인풋값에 대한 검사를 하기 위한 변수(인풋 태그를 가져옴)
const passwordAgainInputEl = document.querySelector('input.password-again');
// 검사에 대한 결과(오류메세지)를 입력할 변수(인풋 태그 아래에 빈 요소를 가져옴)
const passwordAgainErrorEl = document.querySelector('.password-again.error-msg');
// 비밀번호 유효성 검사식
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const checkEmailInput = async function () {
  if (emailInputEl.value == '') {  // 만약 인풋 태그가 비어있다면
    validateInput(emailErrorEl, '이메일을 입력해주세요.', emailErrorEl);
  } else if (emailPattern.test(emailInputEl.value) == false) {  // 이메일 유효성 검사
    validateInput(emailErrorEl, '올바른 이메일 주소가 아닙니다.', emailErrorEl);
  } else {
    const isDuplicate = await checkEmailDuplicate();
    if (!isDuplicate) {
      validateInput(emailErrorEl, '이미 사용중인 이메일입니다.', emailErrorEl);
    } else {
      validateInput(emailErrorEl, '', emailErrorEl, 'var(--gray-three)');
    }
  }
}

const checkEmailDuplicate = async function () {
  const signUpEmail = { email: emailInputEl.value };
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify(signUpEmail),
    });
    const statusCode = response.status;
    if (statusCode === 409) {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
  }
  return true;  // 만약 오류가 아니면 중복되지 않음
} 

const checkPasswordInput = () => {
  if (!passwordPattern.test(passwordInputEl.value)) { 
    validateInput(passwordErrorEl, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.', Array.from(eyeComponents)[0]);
  } else {
    validateInput(passwordErrorEl, '', Array.from(eyeComponents)[0], 'var(--gray-three)');
  }
}

const checkPasswordAgainInput = () => {
  if (passwordInputEl.value != passwordAgainInputEl.value) {
    validateInput(passwordAgainErrorEl, '비밀번호가 일치하지 않아요.', Array.from(eyeComponents)[1]);
  } else {
    validateInput(passwordAgainErrorEl, '', Array.from(eyeComponents)[1], 'var(--gray-three)');
  }
}

const requestSignUp = async function () {
  const signUpMember = getSignedMember();
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',  
    },
    body: JSON.stringify(signUpMember),
  });
  const statusCode = response.status;
  if (statusCode === 200) {
    location.replace('/folder.html'); 
  }
}
 
const trySignUp = async function () {
  checkEmailInput();
  checkPasswordInput();
  checkPasswordAgainInput();
  const isDuplicate = await checkEmailDuplicate();
  if (!isDuplicate) {  // 만약 코드잇 계정으로 로그인 한다면
    validateInput(emailErrorEl, '이미 회원가입된 이메일입니다.', emailErrorEl);
  } else if (emailPattern.test(emailInputEl.value)  && passwordPattern.test(passwordInputEl.value) && passwordInputEl.value === passwordAgainInputEl.value) {
    requestSignUp();
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', checkEmailInput);
passwordInputEl.addEventListener('focusout', checkPasswordInput);
signButton.addEventListener('click', trySignUp);
[...eyeComponents].forEach(eyeComponent => eyeComponent.addEventListener('click', changeEyeComponentOnOff));
passwordAgainInputEl.addEventListener('focusout', checkPasswordAgainInput);
emailInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && trySignUp());  // e.code도 같은 결과
passwordInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && trySignUp());
passwordAgainInputEl.addEventListener('keypress', (e) => e.key === 'Enter' && trySignUp());

