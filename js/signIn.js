// 이메일, 비밀번호 인풋값에 대한 검사를 하기 위한 변수(인풋 태그를 가져옴)
const emailInputEl = document.querySelector('input.email');
const passwordInputEl = document.querySelector('input.password');
const LoginButton = document.querySelector('.login.button');

// 이메일, 비밀번호 인풋값 검사에 대한 결과(오류메세지)를 입력할 변수(인풋 태그 아래에 빈 요소를 가져옴)
const emailErrorEl = document.querySelector('.email.error-msg');
const passwordErrorEl = document.querySelector('.password.error-msg');

// eye-off 컨포넌트 (클릭 시 eye-on으로 바꾸기 위함)
const eyeComponent = document.querySelector('.eye-off')

// 이메일 유효성 검사식
const checkRightEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

// 코드잇 로그인 계정 정보
let accountInfo = {
  codeit: {
    id: 'test@codeit.com',
    password: 'codeit101'
  }
}

// 실행할 이벤트 핸들러
emailInputEl.addEventListener('focusout', EmailInputCheck);
passwordInputEl.addEventListener('focusout', PasswordInputCheck);
LoginButton.addEventListener('click', TryLogin);
eyeComponent.addEventListener('click', EyeComponentOnOffChange);


function EmailInputCheck(e) {
  if (emailInputEl.value == '') {  // 만약 인풋 태그가 비어있다면
    emailErrorEl.textContent = '이메일을 입력해주세요.';  // emailErrorEl에 해당 메세지 출력
    emailErrorEl.previousElementSibling.style.borderColor = 'var(--red)';
  } else if (checkRightEmail.test(emailInputEl.value) == false) {  // 이메일 유효성 검사
    emailErrorEl.textContent = '올바른 이메일 주소가 아닙니다.'; 
    emailErrorEl.previousElementSibling.style.borderColor = 'var(--red)';
  } else {
    emailErrorEl.textContent = ''; 
    emailErrorEl.previousElementSibling.style.borderColor = 'var(--gray-three)';
  }
}

function PasswordInputCheck(e) {
  if (passwordInputEl.value == '') { 
    passwordErrorEl.textContent = '비밀번호를 입력해주세요.';
    eyeComponent.previousElementSibling.style.borderColor = 'var(--red)';
  } else {
    passwordErrorEl.textContent = '';
    eyeComponent.previousElementSibling.style.borderColor = 'var(--gray-three)';
  }
}
 
function TryLogin(e) {
  if (emailInputEl.value === accountInfo.codeit.id && passwordInputEl.value === accountInfo.codeit.password) {  // 만약 코드잇 계정으로 로그인 한다면
    location.replace('/folder.html');  // location.href()는 뒤로가기(이젠페이지로 이동)이 가능, replace는 불가능
  } else {
    emailErrorEl.textContent = '이메일을 확인해주세요.';
    passwordErrorEl.textContent = '비밀번호를 확인해주세요.';
    emailErrorEl.previousElementSibling.style.borderColor = 'var(--red)';
    eyeComponent.previousElementSibling.style.borderColor = 'var(--red)';
  }
}

function EyeComponentOnOffChange(e) {
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