import { isEmail } from '/utils/validation.js';
import { addErrorMessage, removeErrorMessage } from '/utils/error.js';
import { toggleEyeIcon } from '/utils/toggle-icon.js';
import { 
  EMAIL_EMPTY, 
  EMAIL_INVALID, 
  PASSWORD_EMPTY, 
  EMAIL_WRONG, 
  PASSWORD_WRONG 
} from '/constants/error-message.js';
import {
  EMAIL_INPUT,
  EMAIL_ERROR,
  PASSWORD_INPUT,
  PASSWORD_ERROR,
  EYE_ICON,
  LOGIN_BUTTON
} from '/constants/selector.js';


// Email
const emailInput = document.querySelector(EMAIL_INPUT);
const emailError = document.querySelector(EMAIL_ERROR);

// Password
const passwordInput = document.querySelector(PASSWORD_INPUT);
const passwordError = document.querySelector(PASSWORD_ERROR);

// Toggle
const eyeIcon = document.querySelector(EYE_ICON);

// LoginButton
const loginBtn = document.querySelector(LOGIN_BUTTON);


// 이메일 유효성 검사 
function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailInput, emailError, EMAIL_EMPTY);
  } else if (!isEmail(email)) {
    addErrorMessage(emailInput, emailError, EMAIL_INVALID);
  } else {
    removeErrorMessage(emailInput, emailError);
  }
}

// 비밀번호 유효성 검사 
function checkPwdValidation() {
  const password = passwordInput.value.trim();

  if (password === '') {
    addErrorMessage(passwordInput, passwordError, PASSWORD_EMPTY);
  } else {
    removeErrorMessage(passwordInput, passwordError);
  }
};

async function submitForm() {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
      "content-Type": 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status === 200){
      location.href = "/folder/index.html";
    } else if (response.status === 400) {
      addErrorMessage(emailInput, emailError, EMAIL_WRONG);
      addErrorMessage(passwordInput, passwordError, PASSWORD_WRONG);
    }

    const result = await response.json();

  } catch (error) {
    console.log(error);
  }
  
}


emailInput.addEventListener("focusout", checkEmailValidation);
passwordInput.addEventListener("focusout", checkPwdValidation);
loginBtn.addEventListener('click', submitForm);
eyeIcon.addEventListener("click", () => {
  toggleEyeIcon(passwordInput, eyeIcon)
});