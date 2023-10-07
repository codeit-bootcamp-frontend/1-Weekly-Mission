const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const form = document.querySelector('form');
const eyeIcons = document.querySelectorAll('.eye-icon');

const emailRegex = new RegExp('^[a-z\d]+@[a-z]+\.[a-z]{2,}$');
const correctMail = 'test@codeit.com';
const correctPassword = 'codeit101';

const editErrorStatus = (element, message='') => {
  if (message) {
    element.classList.add('incorrect-input');
    element.nextElementSibling.textContent = message;
  } else {
    element.classList.remove('incorrect-input');
    element.nextElementSibling.textContent = message;
  }
}

const checkEmailInput = (e) => {
  if (!e.target.value) {
    editErrorStatus(e.target, '이메일을 입력해주세요.');
  } else if (!emailRegex.test(e.target.value)) {
    editErrorStatus(e.target, '올바른 이메일 주소가 아닙니다.');
  } else {
    editErrorStatus(e.target);
  }
}

const checkPasswordInput = (e) => {
  if (!e.target.value) {
    editErrorStatus(e.target, '비밀번호를 입력해주세요.');
  } else {
    editErrorStatus(e.target);
  }
}

const trySignIn = (e) => {
  e.preventDefault();

  if (emailInput.value === correctMail && passwordInput.value === correctPassword) {
    location.href = '/html/folder.html';
  } else {
    editErrorStatus(emailInput, '이메일을 확인해주세요.');
    editErrorStatus(passwordInput, '비밀번호를 확인해주세요.');
  }
}

const toggleEyeButton = (e) => {
  const eyeOff = e.target.parentElement.children[0];
  const eyeOn = e.target.parentElement.children[1];
  const input = e.target.parentElement.parentElement.parentElement.children[1];

  if (!eyeOff.classList.contains('display-none')) {
    input.removeAttribute('type');
  } else {
    input.setAttribute('type', 'password');
  }

  eyeOff.classList.toggle('display-none');
  eyeOn.classList.toggle('display-none');
}

emailInput.addEventListener('focusout', checkEmailInput);
passwordInput.addEventListener('focusout', checkPasswordInput);
form.addEventListener('submit', trySignIn);
for (let el of eyeIcons) {
  el.addEventListener('click', toggleEyeButton);
}