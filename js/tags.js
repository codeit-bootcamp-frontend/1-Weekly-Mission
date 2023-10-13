const emailInput = document.querySelector('#form__input--email');
const emailError = document.querySelector('#form__error-message--email');
const passwordInput = document.querySelector('#form__input--password');
const passwordError = document.querySelector('#form__error-message--password');
const passwordCheckInput = document.querySelector('#form__input--check-password');
const passwordCheckError = document.querySelector('#form__error-message--check-password');
const loginButton = document.querySelector('#form__login-button');
const joinButton = document.querySelector('#form__join-button');
const eyeButtonInPassword = document.querySelector('#eye-button--password');
const eyeButtonInPasswordCheck = document.querySelector('#eye-button--check-password');

export {
  emailInput, 
  emailError, 
  passwordInput, 
  passwordError, 
  passwordCheckInput, 
  passwordCheckError, 
  loginButton, 
  joinButton, 
  eyeButtonInPassword, 
  eyeButtonInPasswordCheck
};
