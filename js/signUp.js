// 이메일, 비밀번호 인풋값에 대한 검사를 하기 위한 변수(인풋 태그를 가져옴)
const emailInputEl = document.querySelector('input.email');
const passwordInputEl = document.querySelector('input.password');
const passwordAgainInputEl = document.querySelector('input.password-again');
const signButton = document.querySelector('.button.try-sign');

// 이메일, 비밀번호 인풋값 검사에 대한 결과(오류메세지)를 입력할 변수(인풋 태그 아래에 빈 요소를 가져옴)
const emailErrorEl = document.querySelector('.email.error-msg');
const passwordErrorEl = document.querySelector('.password.error-msg');
const passwordAgainErrorEl = document.querySelector('.password-again.error-msg');

// eye-off 컨포넌트 (클릭 시 eye-on으로 바꾸기 위함)
const eyeComponents = document.querySelectorAll('.eye-off');

// 이메일 유효성 검사식
const emailPattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,8}$/; 
  // 동사로 시작하는 변수는 함수
  // TLD 2~8, 일부 특수문자 가능한 이메일로 수정(일부 Daum user email) 

// 비밀번호 유효성 검사식
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 코드잇 로그인 계정 정보
const accountInfo = Object.freeze({  // freeze(): 읽기 전용의 객체를 생성하기 위해.. depth마다 해줘야함
  codeit: Object.freeze({
    id: 'test@codeit.com',
    password: 'codeit101'
  })
});

const ActiveError = (messageTarget, message, borderTarget, borderColor = 'var(--red)') => {
  messageTarget.textContent = message;
  borderTarget.previousElementSibling.style.borderColor = borderColor;
}

const checkEmailInput = () => {
  if (emailInputEl.value == '') {  // 만약 인풋 태그가 비어있다면
    ActiveError(emailErrorEl, '이메일을 입력해주세요.', emailErrorEl);
  } else if (emailPattern.test(emailInputEl.value) == false) {  // 이메일 유효성 검사
    ActiveError(emailErrorEl, '올바른 이메일 주소가 아닙니다.', emailErrorEl);
  } else if (emailInputEl.value === accountInfo.codeit.id) {
    ActiveError(emailErrorEl, '이미 사용중인 이메일입니다.', emailErrorEl);
  } else {
    ActiveError(emailErrorEl, '', emailErrorEl, 'var(--gray-three)');
  }
}

const checkPasswordInput = () => {
  if (!passwordPattern.test(passwordInputEl.value)) { 
    ActiveError(passwordErrorEl, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.', Array.from(eyeComponents)[0]);
  } else {
    ActiveError(passwordErrorEl, '', Array.from(eyeComponents)[0], 'var(--gray-three)');
  }
}

const checkPasswordAgainInput = () => {
  if (passwordInputEl.value != passwordAgainInputEl.value) {
    ActiveError(passwordAgainErrorEl, '비밀번호가 일치하지 않아요.', Array.from(eyeComponents)[1]);
  } else {
    ActiveError(passwordAgainErrorEl, '', Array.from(eyeComponents)[1], 'var(--gray-three)');
  }
}
 
const TrySignUp = () => {
  checkEmailInput();
  checkPasswordInput();
  checkPasswordAgainInput();
  if (emailInputEl.value === accountInfo.codeit.id) {  // 만약 코드잇 계정으로 로그인 한다면
    ActiveError(emailErrorEl, '이미 회원가입된 이메일입니다.', emailErrorEl);
  } else if (!emailErrorEl.textContent  && !passwordErrorEl.textContent && !passwordAgainErrorEl.textContent) {
    location.replace('/folder.html');
  }
}

const EyeComponentOnOffChange = (e) => {
  e.stopPropagation();
  if (!e.target.classList.contains('eye-on')) {
    e.target.src = 'assets/components/eye-on.svg';
    e.target.classList.add('eye-on');
    e.target.previousElementSibling.type ="text"
  } else {
    e.target.src = 'assets/components/eye-off.svg';
    e.target.classList.remove('eye-on');
    e.target.previousElementSibling.type ="password";
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', checkEmailInput);
passwordInputEl.addEventListener('focusout', checkPasswordInput);
signButton.addEventListener('click', TrySignUp);
[...eyeComponents].forEach(compo => compo.addEventListener('click', EyeComponentOnOffChange));
passwordAgainInputEl.addEventListener('focusout', checkPasswordAgainInput);