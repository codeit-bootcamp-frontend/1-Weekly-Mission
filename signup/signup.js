import { TEST_EMAIL } from "../constants/auth.js";
import {
  emailDuplicatedMsg,
  emailEmptyMsg,
  emailInvalidMsg,
  emailRegex,
  pwRegex,
  pwInvalidMsg,
  pwNotMachedMsg,
  addErrorMessage,
  removeErrorMessage,
  isInputValueValid,
  toggleEyeBtn,
  addPwInputErrorMessage,
} from "../utils/auth.js";

const signupBtn = document.querySelector(".signup-btn");
const pwCheckEyeBtn = document.querySelector(".pw-check-eye-off-btn");
const eyeBtn = document.querySelector(".eye-off-btn");
const emailInput = document.querySelector(".email-input");
const pwInput = document.querySelector(".password-input");
const pwCheckInput = document.querySelector("#password-check-input");

function handleSignup() {
  handleEmailInputEmptyCheck();
  handleEmailInputValidCheck();
  handlePwInputDoubleCheck();
  handlePwInputInvalidCheck();
  if (
    !emailInput.querySelector("input-error") &&
    !pwInput.querySelector("input-error")
  ) {
    location.href = "/folder";
  }
}

function handleSignupEnter(e) {
  if (e.key === "Enter") {
    handleSignup();
  }
}

function handleEmailInputValidCheck() {
  if (
    !isInputValueValid(emailRegex, emailInput) &&
    emailInput.value.trim().length > 0
  ) {
    addErrorMessage(emailInvalidMsg, emailInput);
  } else {
    removeErrorMessage(emailInvalidMsg, emailInput);
  }
}

function handleEmailInputEmptyCheck() {
  if (!emailInput.value.trim()) {
    addErrorMessage(emailEmptyMsg, emailInput);
  } else {
    removeErrorMessage(emailEmptyMsg, emailInput);
  }
}

function handleEmailDuplicatedCheck() {
  if (emailInput.value.trim() === TEST_EMAIL) {
    addErrorMessage(emailDuplicatedMsg, emailInput);
  } else {
    removeErrorMessage(emailDuplicatedMsg, emailInput);
  }
}

function handlePwInputDoubleCheck() {
  if (pwInput.value.trim() !== pwCheckInput.value.trim()) {
    addPwInputErrorMessage(pwNotMachedMsg, pwCheckInput);
  } else {
    removeErrorMessage(pwNotMachedMsg, pwCheckInput);
  }
}

function handlePwInputInvalidCheck() {
  if (!isInputValueValid(pwRegex, pwInput)) {
    addPwInputErrorMessage(pwInvalidMsg, pwInput);
  } else {
    removeErrorMessage(pwInvalidMsg, pwInput);
  }
}

function handleEyeButtonToggle() {
  toggleEyeBtn(pwInput, eyeBtn);
}

function handlePwCheckEyeButtonToggle() {
  toggleEyeBtn(pwCheckInput, pwCheckEyeBtn);
}

emailInput.addEventListener("blur", handleEmailInputEmptyCheck);
emailInput.addEventListener("blur", handleEmailInputValidCheck);
emailInput.addEventListener("blur", handleEmailDuplicatedCheck);
pwCheckInput.addEventListener("blur", handlePwInputDoubleCheck);
pwInput.addEventListener("blur", handlePwInputInvalidCheck);
eyeBtn.addEventListener("click", handleEyeButtonToggle);
pwCheckEyeBtn.addEventListener("click", handlePwCheckEyeButtonToggle);
signupBtn.addEventListener("click", handleSignup);
emailInput.addEventListener("keyup", handleSignupEnter);
pwInput.addEventListener("keyup", handleSignupEnter);
pwCheckInput.addEventListener("keyup", handleSignupEnter);
