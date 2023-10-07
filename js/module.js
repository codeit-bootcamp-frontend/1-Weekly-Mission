const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const passwordConfirmInput = document.querySelector('.password-confirm');
const form = document.querySelector('form');
const eyeIcons = document.querySelectorAll('.eye-icon');

const emailRegex = new RegExp(/^[a-z\d]+@[a-z]+\.[a-z]{2,}$/);
const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
const email = 'test@codeit.com';
const password = 'codeit101';

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

export { emailInput, passwordInput, passwordConfirmInput, form, eyeIcons, emailRegex, passwordRegex, email, password, editErrorStatus, toggleEyeButton };