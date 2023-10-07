// 이메일, 비밀번호 인풋값에 대한 검사를 하기 위한 변수(인풋 태그를 가져옴)
export const emailInputEl = document.querySelector('input.email');
export const passwordInputEl = document.querySelector('input.password');
export const signButton = document.querySelector('.button.try-sign');

// 이메일, 비밀번호 인풋값 검사에 대한 결과(오류메세지)를 입력할 변수(인풋 태그 아래에 빈 요소를 가져옴)
export const emailErrorEl = document.querySelector('.email.error-msg');
export const passwordErrorEl = document.querySelector('.password.error-msg');

// eye-off 컨포넌트 (클릭 시 eye-on으로 바꾸기 위함)
export const eyeComponents = document.querySelectorAll('.eye-off');

// 이메일 유효성 검사식
export const emailPattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,8}$/; 
  // 동사로 시작하는 변수는 함수
  // TLD 2~8, 일부 특수문자 가능한 이메일로 수정(일부 Daum user email) 

// 코드잇 로그인 계정 정보
export const accountInfo = Object.freeze({  // freeze(): 읽기 전용의 객체를 생성하기 위해.. depth마다 해줘야함
  codeit: Object.freeze({
    id: 'test@codeit.com',
    password: 'codeit101'
  })
});

export const activeError = (messageTarget, message, borderTarget, borderColor = 'var(--red)') => {
  messageTarget.textContent = message;
  borderTarget.previousElementSibling.style.borderColor = borderColor;
}

export const eyeComponentOnOffChange = (e) => {
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