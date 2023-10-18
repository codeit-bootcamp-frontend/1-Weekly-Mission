import { checkEmailDuplication, signup } from "../api/auth/user.js";
import {
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
  deleteErrorMessage,
  setErrorMessage,
  storeAccessToken,
} from "../utils/auth.js";

const signupBtn = document.querySelector(".signup-btn");
const pwCheckEyeBtn = document.querySelector(".pw-check-eye-off-btn");
const eyeBtn = document.querySelector(".eye-off-btn");
const emailInput = document.querySelector(".email-input");
const pwInput = document.querySelector(".password-input");
const pwCheckInput = document.querySelector("#password-check-input");
const emailErrorContainer = document.querySelector("#email-error-container");

function relocateAuthPage() {
  if (hasToken()) {
    location.href = "/pages/folder/";
  }
}

relocateAuthPage();

async function handleSignup() {
  handleEmailInputEmptyCheck();
  handleEmailInputValidCheck();
  handleEmailDuplicatedCheck();
  handlePwInputDoubleCheck();
  handlePwInputInvalidCheck();
  if (
    !emailInput.querySelector("input-error") &&
    !pwInput.querySelector("input-error")
  ) {
    const token = await signup(emailInput.value.trim(), pwInput.value.trim());
    storeAccessToken(token);
    location.href = "../pages/folder/";
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

async function handleEmailDuplicatedCheck() {
  const res = await checkEmailDuplication(emailInput.value.trim());
  deleteErrorMessage({
    input: emailInput,
    errorMessageContainer: emailErrorContainer,
  });
  if (res === "이미 존재하는 이메일입니다.") {
    setErrorMessage(
      { input: emailInput, errorMessageContainer: emailErrorContainer },
      "이미 존재하는 이메일입니다."
    );
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
