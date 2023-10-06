// 이메일, 비밀번호 인풋값에 대한 검사를 하기 위한 변수(인풋 태그를 가져옴)
const emailInputEl = document.querySelector('input.email');
const passwordInputEl = document.querySelector('input.password');
const signButton = document.querySelector('.button.try-sign');

// 이메일, 비밀번호 인풋값 검사에 대한 결과(오류메세지)를 입력할 변수(인풋 태그 아래에 빈 요소를 가져옴)
const emailErrorEl = document.querySelector('.email.error-msg');
const passwordErrorEl = document.querySelector('.password.error-msg');

// eye-off 컨포넌트 (클릭 시 eye-on으로 바꾸기 위함)
const eyeComponent = document.querySelector('.eye-off')

// 이메일 유효성 검사식
const emailPattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,8}$/; 
  // 동사로 시작하는 변수는 함수
  // TLD 2~8, 일부 특수문자 가능한 이메일로 수정(일부 Daum user email) 

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
  } else {
    ActiveError(emailErrorEl, '', emailErrorEl, 'var(--gray-three)');
  }
}

const checkPasswordInput = () => {
  if (passwordInputEl.value == '') { 
    ActiveError(passwordErrorEl, '비밀번호를 입력해주세요.', eyeComponent);
  } else {
    ActiveError(passwordErrorEl, '', eyeComponent, 'var(--gray-three)');
  }
}
 
const TryLogin = () => {
  if (emailInputEl.value === accountInfo.codeit.id && passwordInputEl.value === accountInfo.codeit.password) {  // 만약 코드잇 계정으로 로그인 한다면
    location.replace('/folder.html');  // location.href()는 뒤로가기(이젠페이지로 이동)이 가능, replace는 불가능
  } else {
    ActiveError(emailErrorEl, '이메일을 확인해주세요.', emailErrorEl);
    ActiveError(passwordErrorEl, '비밀번호를 확인해주세요.', eyeComponent);
  }
}

const EyeComponentOnOffChange = () => {
  if (!eyeComponent.classList.contains('eye-on')) {
    eyeComponent.src = 'assets/components/eye-on.svg';
    eyeComponent.classList.add('eye-on');
    eyeComponent.previousElementSibling.type ="text"
  } else {
    eyeComponent.src = 'assets/components/eye-off.svg';
    eyeComponent.classList.remove('eye-on');
    eyeComponent.previousElementSibling.type ="password";
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', checkEmailInput);
passwordInputEl.addEventListener('focusout', checkPasswordInput);
signButton.addEventListener('click', TryLogin);
eyeComponent.addEventListener('click', EyeComponentOnOffChange);