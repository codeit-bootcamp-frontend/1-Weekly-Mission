import {
  emailEmptyMsg,
  emailInvalidMsg,
  pwEmptyMsg,
  emailIncorrectMsg,
  pwIncorrectMsg,
  emailRegex,
  addErrorMessage,
  toggleEyeBtn,
  removeErrorMessage,
  addPwInputErrorMessage,
} from "../utils/auth.js";
import { TEST_EMAIL, TEST_PASSWORD } from "../constants/auth.js";
import { signin } from "../api/auth.js";

const emailInput = document.querySelector(".email-input");
const pwInput = document.querySelector(".password-input");
const pwWrapper = document.querySelector(".password-wrapper");
const signinBtn = document.querySelector(".signin-btn");
const eyeBtn = document.querySelector(".eye-off-btn");

function handlePasswordInputEmptyValueCheck(e) {
  if (!e.target.value.trim()) {
    addPwInputErrorMessage(pwEmptyMsg, pwInput);
  } else {
    removeErrorMessage(pwEmptyMsg, pwInput);
  }
}

function handleSigninBtnClick() {
  if (emailInput.value.trim() !== TEST_EMAIL) {
    addErrorMessage(emailIncorrectMsg, emailInput);
  } else {
    removeErrorMessage(emailIncorrectMsg, emailInput);
  }

  if (pwInput.value.trim() !== TEST_PASSWORD) {
    addPwInputErrorMessage(pwIncorrectMsg, pwInput);
  } else {
    removeErrorMessage(pwIncorrectMsg, pwInput);
  }
  signin(emailInput.value.trim(), pwInput.value.trim());
}

function handleEmailInputEmptyCheck() {
  if (!emailInput.value.trim()) {
    addErrorMessage(emailEmptyMsg, emailInput);
  } else {
    removeErrorMessage(emailEmptyMsg, emailInput);
  }
}

function handleEmailInputValidCheck() {
  if (!isInputValueValid(emailRegex, emailInput)) {
    addErrorMessage(emailInvalidMsg, emailInput);
  } else {
    removeErrorMessage(emailInvalidMsg, emailInput);
  }
}

function handleEyeButtonToggle() {
  toggleEyeBtn(pwInput, eyeBtn);
}

emailInput.addEventListener("blur", handleEmailInputEmptyCheck);
emailInput.addEventListener("blur", handleEmailInputValidCheck);
pwInput.addEventListener("blur", handlePasswordInputEmptyValueCheck);
signinBtn.addEventListener("click", handleSigninBtnClick);
eyeBtn.addEventListener("click", handleEyeButtonToggle);
