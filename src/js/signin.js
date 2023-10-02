const loginForm = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".cta");
const emailErrorMessage = document.querySelector("#email-error");
const passwordErrorMessage = document.querySelector("#password-error");
const eyeButton = document.querySelector(".items__eye-button");
const eyeIcon = document.querySelector(".eye-button");

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const ERROR_CLASS_NAME = "items__input--error";
const EMAIL = "test@codeit.com";
const PW = "codeit101";
const REDIRECT_PATH = "/folder";

const eyeIconPath = {
  eye_on: "../src/images/eye-on.svg",
  eye_off: "../src/images/eye-off.svg",
};

const errorMessages = {
  email: {
    empty: "이메일을 입력해주세요.",
    invalid: "올바른 이메일 주소가 아닙니다.",
  },
  password: {
    empty: "비밀번호를 입력해주세요.",
  },
  submit: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
};

const displayErrorMessage = (element, message) => (element.textContent = message);

const addErrorClass = (...element) => element.forEach((el) => el.classList.add(ERROR_CLASS_NAME));

const removeErrorClass = (element) => element.classList.remove(ERROR_CLASS_NAME);

emailInput.addEventListener("focusout", () => {
  const emailValue = emailInput.value;

  if (emailValue === "") {
    displayErrorMessage(emailErrorMessage, errorMessages.email.empty);
    addErrorClass(emailInput);
    return;
  }

  const isValidEmail = EMAIL_PATTERN.test(emailValue);

  return isValidEmail
    ? (displayErrorMessage(emailErrorMessage, VALUE_EMPTY), removeErrorClass(emailInput))
    : (displayErrorMessage(emailErrorMessage, errorMessages.email.invalid), addErrorClass(emailInput));
});

passwordInput.addEventListener("focusout", () => {
  const VALUE_EMPTY = "";
  const isEmpty = passwordInput.value === VALUE_EMPTY;

  displayErrorMessage(passwordErrorMessage, isEmpty ? errorMessages.password.empty : VALUE_EMPTY);
  isEmpty ? addErrorClass(passwordInput) : removeErrorClass(passwordInput);
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = emailInput.value === EMAIL && passwordInput.value === PW;

  if (isValid) {
    window.location.href = REDIRECT_PATH;
    return;
  }

  Object.keys(errorMessages.submit).forEach((field) => {
    console.log(field);
    displayErrorMessage(field === "email" ? emailErrorMessage : passwordErrorMessage, errorMessages.submit[field]);
  });

  addErrorClass(emailInput, passwordInput);
});

let isPasswordVisible = false;

eyeButton.addEventListener("click", () => {
  const EYE_BUTTON_CLASS_NAME = "relocate-y";
  const pwIconPath = isPasswordVisible ? eyeIconPath.eye_off : eyeIconPath.eye_on;

  isPasswordVisible = !isPasswordVisible;

  eyeIcon.setAttribute("src", pwIconPath);
  eyeButton.classList.toggle(EYE_BUTTON_CLASS_NAME);

  passwordInput.type = isPasswordVisible ? "text" : "password";
});
