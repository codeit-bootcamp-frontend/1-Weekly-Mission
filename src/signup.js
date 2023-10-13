import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

import {PATTERN1, PATTERN2, PATTERN3} from "./const.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", validateEmailInput);
async function validateEmailInput({target}) {
  const email = target.value;
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage }, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  if (! await isDuplicatedEmail(email, "https://bootcamp-api.codeit.kr/api/check-email")) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage }, "중복된 이메일입니다.");
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

async function isDuplicatedEmail(paramEmail, url) {
  const POST_EMAIL = {
    email: `${paramEmail}`
  }
  try {
    const response = await fetch(`${url}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(POST_EMAIL),
    })
    if (!response.ok) {
      //console.log("중복됨")
      
      return false;
    } else {
      //console.log("중복 안됨");
      return true;
    }
  }
  catch(error) {
    console.log(error);
  }
}
  


const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
function validatePasswordInput(password) {
  //console.dir(password);
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  if (password.length < 8 || !PATTERN1.test(password) || !PATTERN2.test(password) || PATTERN3.test(password)) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return;
  } 
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}

const passwordConfirmInput = document.querySelector("#passwordConfirm");
const passwordErrorMessage2 = document.querySelector("#password-error-message-2")
passwordConfirmInput.addEventListener("focusout", (event) => isSamePasswordInput(event.target.value));
function isSamePasswordInput(password) {
  if (password !== passwordInput.value) {
    setInputError(
      { input: passwordConfirmInput, errorMessage: passwordErrorMessage2 },
      "비밀번호가 일치하지 않아요."
    );
    return;
  }
  removeInputError({ input: passwordConfirmInput, errorMessage: passwordErrorMessage2 });
}

const passwordToggleButtons = document.querySelectorAll(".password-toggle");
const firstEyeToggleButton = passwordToggleButtons[0];
const secondEyeToggleButton = passwordToggleButtons[1];
firstEyeToggleButton.addEventListener('click', () =>
  togglePassword(passwordInput, firstEyeToggleButton)
);
secondEyeToggleButton.addEventListener('click', () =>
  togglePassword(passwordConfirmInput, secondEyeToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
async function submitForm(event) {
  event.preventDefault();

  const isValidSignup =
    (! await isDuplicatedEmail(email.value)) && emailInput.value !==""
    && passwordInput.value === passwordConfirmInput.value && passwordInput.value !=="";

  if (isValidSignup) {
    if (await notDuplicatedEmail(email.value, passwordInput.value)) {
      location.href = "/folder";
      return;
    }
  }
}


async function notDuplicatedEmail(paramEmail, paramPassword) {
  const POST_EMAIL = {
    email: String(paramEmail),
    password: String(paramPassword)
  }
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(POST_EMAIL),
    })
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }
  catch(error) {
    console.log(error);
  }
}

