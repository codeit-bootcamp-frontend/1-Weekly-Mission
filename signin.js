const passwordBox = document.querySelector('.sign-password');
const eye = passwordBox.querySelector('.eye-button');
const password = passwordBox.querySelector('.sign-input');
const inputBoxes = document.querySelector('.sign-input-box');
const inputBox = inputBoxes.querySelector('.sign-input');

const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const loginButton = document.getElementById('loginButton');



function changeEyeButton() {
  let img = document.getElementById('eyeImg');

  if (img.getAttribute('src') === './images/eye-off.png') {
    //사선 없는 눈 모양 이미지로 변경
    img.setAttribute('src', './images/eye-on.png');

    //비밀번호 입력값 보이게 만들기
    password.type="text";
  } else {
    //사선 있는 눈 모양 이미지로 변경
    img.setAttribute('src', './images/eye-off.png');

    //비밀번호 입력값 가려지게 만들기
    password.type="password";
  }
}

loginButton.addEventListener('click', () => {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
    // 로그인 성공 시 페이지 이동
    window.location.href = '/folder';
  } else {
    // 이메일 및 비밀번호를 확인하고 에러 메시지 표시
    if (!emailValue) {
      showError(emailError, '이메일을 입력해주세요.');
    } else if (!isValidEmail(emailValue)) {
      showError(emailError, '올바른 이메일 주소가 아닙니다.');
    } else {
      clearError(emailError);
    }

    if (!passwordValue) {
      showError(passwordError, '비밀번호를 입력해주세요.');
    } else {
      clearError(passwordError);
    }
  }
});

// 이메일 형식 확인 함수
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 에러 메시지 표시 함수
function showError(errorElement, errorMessage) {
  errorElement.innerText = errorMessage;
  errorElement.style.display = 'block';
}

// 에러 메시지 지우기 함수
function clearError(errorElement) {
  errorElement.innerText = '';
  errorElement.style.display = 'none';
}

// 이메일 input의 focus out 이벤트 처리
emailInput.addEventListener('blur', () => {
  const emailValue = emailInput.value;
  if (!emailValue) {
    showError(emailError, '이메일을 입력해주세요.');
  } else if (!isValidEmail(emailValue)) {
    showError(emailError, '올바른 이메일 주소가 아닙니다.');
  } else {
    clearError(emailError);
  }
});

// 비밀번호 input의 focus out 이벤트 처리
passwordInput.addEventListener('blur', () => {
  const passwordValue = passwordInput.value;
  if (!passwordValue) {
    showError(passwordError, '비밀번호를 입력해주세요.');
  } else {
    clearError(passwordError);
  }
});

function focusIn() {
  inputBox.placeholder = '내용 작성 중..';
}
function focusOut() {
  inputBox.placeholder = '내용 입력';
}

inputBox.addEventListener('focus', focusIn);
inputBox.addEventListener('focusout', focusOut);
eye.addEventListener('click', changeEyeButton);