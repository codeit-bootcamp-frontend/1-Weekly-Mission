const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const passwordConfirmInput = document.querySelector('.password-confirm');
const form = document.querySelector('form');
const eyeButton = document.querySelector('.eye-button');
const eyeIcon = document.querySelectorAll('.eye-icon');

const emailRegex = new RegExp(/^[a-z\d]+@[a-z]+\.[a-z]{2,}$/);
const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
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
};

const checkEmail = (email) => {
  if (!email) {
    editErrorStatus(emailInput, '이메일을 입력해주세요.');
  } else if (!emailRegex.test(email)) {
    editErrorStatus(emailInput, '올바른 이메일 주소가 아닙니다.');
  } else if (email === correctMail) {
    editErrorStatus(emailInput, '이미 사용 중인 이메일입니다.');
  } else {
    editErrorStatus(emailInput);
  }
};

const checkPassword = (password) => {
  if (!passwordRegex.test(password)) {
    editErrorStatus(passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else {
    editErrorStatus(passwordInput);
  }
};

const checkPasswordConfirm = (password) => {
  if (password !== passwordInput.value) {
    editErrorStatus(passwordConfirmInput, '비밀번호가 일치하지 않아요.');
  } else {
    editErrorStatus(passwordConfirmInput);
  }
};

const checkEmailInput = (e) => {
  checkEmail(e.target.value);
};

const checkPasswordInput = (e) => {
  checkPassword(e.target.value);
};

const checkPasswordConfirmInput = (e) => {
  checkPasswordConfirm(e.target.value);
};

const trySignUp = (e) => {
  e.preventDefault();

  if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value) && passwordConfirmInput.value === passwordInput.value) {
    location.href = '/html/folder.html';
  } else {
    checkEmail(emailInput);
    checkPassword(passwordInput);
    checkPasswordConfirm(passwordConfirmInput);
  }
};

const toggleEyeButton = () => {
  if (!eyeIcon[0].classList.contains('off')) { // 비밀번호 표시 off인 경우
    passwordInput.removeAttribute('type'); // {type:"password"} 속성 제거
  } else { // 비밀번호 표시 on인 경우
    passwordInput.setAttribute('type', 'password'); // {type: "password"} 속성 추가
  }

  eyeIcon[0].classList.toggle('off');
  eyeIcon[1].classList.toggle('off');
};

emailInput.addEventListener('focusout', checkEmailInput);
passwordInput.addEventListener('focusout', checkPasswordInput);
passwordConfirmInput.addEventListener('focusout', checkPasswordConfirmInput)
form.addEventListener('submit', trySignUp);
eyeButton.addEventListener('click', toggleEyeButton);