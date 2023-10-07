const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const passwordConfirmInput = document.querySelector('.password-confirm');
const form = document.querySelector('form');
const eyeIcons = document.querySelectorAll('.eye-icon');

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
passwordConfirmInput.addEventListener('focusout', checkPasswordConfirmInput)
form.addEventListener('submit', trySignUp);
for (let el of eyeIcons) {
  el.addEventListener('click', toggleEyeButton);
}