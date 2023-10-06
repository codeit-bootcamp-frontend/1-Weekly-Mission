import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
function validateEmailInput(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage }, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  if (email === "test@codeit.com") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이미 사용 중인 이메일입니다.");
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
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
  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password) || /^\d+$/.test(password)) {
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

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  const isValidSignup =
    emailInput.value === TEST_USER.email && passwordInput.value === TEST_USER.password;

  if (isTestUser) {
    location.href = "/folder";
    return;
  }
  setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
  setInputError(
    { input: passwordInput, errorMessage: passwordErrorMessage },
    "비밀번호를 확인해주세요."
  );
}