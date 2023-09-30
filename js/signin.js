const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const form = document.querySelector('form');
const eyeButton = document.querySelector('.eye-button');
const eyeIcon = document.querySelectorAll('.eye-icon');

const correctMailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const correctMail = 'test@codeit.com';
const correctPassword = 'codeit101';

function editErrorStatus(element, message='') {
  if (message) {
    element.classList.add('incorrect-input');
    element.nextElementSibling.textContent = message;
  } else {
    element.classList.remove('incorrect-input');
    element.nextElementSibling.textContent = message;
  }
}

function checkEmailInput(e) {
  if (!e.target.value) {
    editErrorStatus(e.target, '이메일을 입력해주세요.');
  } else if (!correctMailForm.test(e.target.value)) {
    editErrorStatus(e.target, '올바른 이메일 주소가 아닙니다.');
  } else {
    editErrorStatus(e.target);
  }
}

function checkPasswordInput(e) {
  if (!e.target.value) {
    editErrorStatus(e.target, '비밀번호를 입력해주세요.');
  } else {
    editErrorStatus(e.target);
  }
}

function trySignIn(e) {
  if (emailInput.value === correctMail && passwordInput.value === correctPassword) {
    location.href = '/html/folder.html';
  } else {
    e.preventDefault();
    editErrorStatus(emailInput, '이메일을 확인해주세요.');
    editErrorStatus(passwordInput, '비밀번호를 확인해주세요.');
  }
}

function toggleEyeButton() {
  if (!eyeIcon[0].classList.contains('off')) { // 비밀번호 표시 off인 경우
    passwordInput.removeAttribute('type'); // {type:"password"} 속성 제거
  } else { // 비밀번호 표시 on인 경우
    passwordInput.setAttribute('type', 'password'); // {type: "password"} 속성 추가
  }

  eyeIcon[0].classList.toggle('off');
  eyeIcon[1].classList.toggle('off');
}

emailInput.addEventListener('focusout', checkEmailInput);
passwordInput.addEventListener('focusout', checkPasswordInput);
form.addEventListener('submit', trySignIn);
eyeButton.addEventListener('click', toggleEyeButton);