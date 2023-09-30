const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const form = document.querySelector('form');
const eyeButton = document.querySelector('.eye-button');
const eyeIcon = document.querySelectorAll('.eye-icon');

function addErrorClass(element, errorMessage) {
  element.classList.add('incorrect-input');
  element.nextElementSibling.textContent = errorMessage;
}

function removeErrorClass(element) {
  element.classList.remove('incorrect-input');
  element.nextElementSibling.textContent = '';
}

function checkEmailInput(e) {
  const correctMailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!e.target.value) {
    addErrorClass(e.target, '이메일을 입력해주세요.');
  } else if (!correctMailForm.test(e.target.value)) {
    addErrorClass(e.target, '올바른 이메일 주소가 아닙니다.');
  } else {
    removeErrorClass(e.target);
  }
}

function checkPasswordInput(e) {
  if (!e.target.value) {
    addErrorClass(e.target, '비밀번호를 입력해주세요.');
  } else {
    removeErrorClass(e.target);
  }
}

function trySignIn(e) {
  const correctMail = 'test@codeit.com';
  const correctPassword = 'codeit101';

  if (emailInput.value === correctMail && passwordInput.value === correctPassword) {
    location.href('/html/folder.html');
  } else {
    e.preventDefault();
    addErrorClass(emailInput, '이메일을 확인해주세요.')
    addErrorClass(passwordInput, '비밀번호를 확인해주세요.')
  }
}

function toggleEyeButton() {
  if (!eyeIcon[0].classList.contains('off')) { // 비밀번호 표시 off인 경우
    passwordInput.removeAttribute('type'); // {type:"password"} 속성 제거
  } else { // 비밀번호 표시 on인 경우
    passwordInput.setAttribute('type', 'password'); // {type: "password"} 속성 추가
  }

  for (let icon of eyeIcon) {
    icon.classList.toggle('off');
  }
}

emailInput.addEventListener('focusout', checkEmailInput);
passwordInput.addEventListener('focusout', checkPasswordInput);
form.addEventListener('submit', trySignIn);
eyeButton.addEventListener('click', toggleEyeButton);