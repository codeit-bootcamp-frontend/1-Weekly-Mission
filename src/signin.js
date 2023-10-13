import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", validateEmailInput);
function validateEmailInput({target}) {
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
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  const isTestUser =
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
