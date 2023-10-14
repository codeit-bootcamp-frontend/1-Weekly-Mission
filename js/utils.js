const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const passwordConfirmInput = document.querySelector('.password-confirm');
const form = document.querySelector('form');
const eyeIcons = document.querySelectorAll('.eye-icon');

const EMAIL_REGEX = new RegExp(/^[a-z\d]+@[a-z]+\.[a-z]{2,}$/, 'i');
const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

const editErrorStatus = (element, message='') => {
  if (message) {
    element.classList.add('incorrect-input');
    element.nextElementSibling.textContent = message;
  } else {
    element.classList.remove('incorrect-input');
    element.nextElementSibling.textContent = message;
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

const checkAccessToken = () => {
  if ('login-token' in localStorage) {
    location.href = '/html/folder.html'
  }
}

export { emailInput, passwordInput, passwordConfirmInput, form, eyeIcons, EMAIL_REGEX, PASSWORD_REGEX, editErrorStatus, toggleEyeButton, checkAccessToken };