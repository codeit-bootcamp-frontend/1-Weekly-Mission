import { email, password, passwordCheck, passwordCheckVisible, passwordVisible, signupButton } from "./tags.js";
import { signup, enterSignup, togglePasswordVisible, togglePasswordCheckVisible } from "./functions.js";
import {
  checkEmail,
  deleteEmailErrorMsg,
  checkSignupPassword,
  deletePasswordErrorMsg,
  checkPasswordMatch,
  deletePasswordCheckErrorMsg,
} from "./errorMsg.js";

email.addEventListener("focusout", checkEmail);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", checkSignupPassword);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordCheck.addEventListener("focusout", checkPasswordMatch);
passwordCheck.addEventListener("focusin", deletePasswordCheckErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
passwordCheckVisible.addEventListener("click", togglePasswordCheckVisible);
signupButton.addEventListener("submit", signup);
signupButton.addEventListener("keyup", enterSignup);
