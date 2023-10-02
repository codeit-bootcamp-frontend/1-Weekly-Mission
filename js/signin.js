const emailInput = document.querySelector('#email-input')
const emailError = document.querySelector('#email-error')

const passwordInput = document.querySelector('#password-input')
const passwordError = document.querySelector('#password-error')

const loginButton = document.querySelector('#login-button')
const eyeButton = document.querySelector('.form--eye-button')

function valiDateEmail() {
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

function valiDatePassword() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    passwordError.textContent = '비밀번호를 입력해주세요.';
    passwordInput.classList.add('error')
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error')
  }
}

emailInput.addEventListener('focusout', valiDateEmail);
passwordInput.addEventListener('focusout', valiDatePassword);

function getLogin() {
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

loginButton.addEventListener('click', getLogin);

function showPassword() {
  if (passwordInput.type === "password") {
    eyeButton.classList.toggle('on')
    passwordInput.type = "text";
  } else {
    eyeButton.classList.toggle('on')
    passwordInput.type = "password"
  }
}

eyeButton.addEventListener('click', showPassword);
