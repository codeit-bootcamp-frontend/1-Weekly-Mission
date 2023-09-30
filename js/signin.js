const emailInput = document.querySelector('#email-input')
const emailError = document.querySelector('#email-error')

const passwordInput = document.querySelector('#password-input')
const passwordError = document.querySelector('#password-error')

const loginBtn = document.querySelector('#login-button')
const eyeBtn = document.querySelector('.form--eye-button')

/* 이메일, 비밀번호 에러문구 설정 */
function emailEvent() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailError.textContent = '이메일을 입력해주세요.';
    emailInput.classList.add('error')
  } else if (emailValue.indexOf('@') === -1) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    emailInput.classList.add('error')
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('error')
  }
}

function passwordEvent() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordInput.classList.add('error')
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error')
  }
}

emailInput.addEventListener('focusout', emailEvent);
passwordInput.addEventListener('focusout', passwordEvent);

/* 로그인 버튼 */
function loginEvent() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
    location.href = '../pages/folder.html';
  } else if (emailValue !== 'test@codeit.com') {
    emailError.textContent = '이메일을 확인해주세요.';
    passwordError.textContent = '비밀번호를 확인해주세요.';
    emailInput.classList.add('error');
  } else if (passwordValue !== 'codeit101') {
    passwordError.textContent = '비밀번호를 확인해주세요.';
    passwordInput.classList.add('error')
  }
}

loginBtn.addEventListener('click', loginEvent);

/* eye-button */
function eyeBtnEvent() {
  if (passwordInput.type === "password") {
    eyeBtn.classList.toggle('on')
    passwordInput.type = "text";
  } else {
    eyeBtn.classList.toggle('on')
    passwordInput.type = "password"
  }
}

eyeBtn.addEventListener('click', eyeBtnEvent);
