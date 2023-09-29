const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const form = document.querySelector('form');
const eyeButton = document.querySelector('.eye-button');
const eyeIcon = document.querySelectorAll('.eye-icon');

function emailError(e) {
  const correctMailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!e.target.value) {
    e.target.classList.add('incorrect-input');
    e.target.nextElementSibling.textContent = '이메일을 입력해주세요.';
  } else if (!correctMailForm.test(e.target.value)) {
    e.target.classList.add('incorrect-input');
    e.target.nextElementSibling.textContent = '올바른 이메일 주소가 아닙니다.';
  } else {
    e.target.classList.remove('incorrect-input');
    e.target.nextElementSibling.textContent = '';
  }
}

function passwordError(e) {
  if (!e.target.value) {
    e.target.classList.add('incorrect-input');
    e.target.nextElementSibling.textContent = '비밀번호를 입력해주세요.';
  } else {
    e.target.classList.remove('incorrect-input');
    e.target.nextElementSibling.textContent = '';
  }
}

function loginTry(e) {
  const correctMail = 'test@codeit.com';
  const correctPassword = 'codeit101';

  if (emailInput.value === correctMail && passwordInput.value === correctPassword) {
    location.assign('/folder'); // 확인 필요
  } else {
    e.preventDefault();
    emailInput.classList.add('incorrect-input');
    emailInput.nextElementSibling.textContent = '이메일을 확인해주세요.';
    passwordInput.classList.add('incorrect-input');
    passwordInput.nextElementSibling.textContent = '비밀번호를 확인해주세요.';
  }
}

function eyeToggle() {
  if (!eyeIcon[0].classList.contains('off')) { // 비밀번호 표시 off인 경우
    passwordInput.removeAttribute('type');
  } else { // 비밀번호 표시 on인 경우
    passwordInput.setAttribute('type', 'password');
  }

  for (let icon of eyeIcon) {
    icon.classList.toggle('off');
  }
}

emailInput.addEventListener('focusout', emailError);
passwordInput.addEventListener('focusout', passwordError);
form.addEventListener('submit', loginTry);
eyeButton.addEventListener('click', eyeToggle);