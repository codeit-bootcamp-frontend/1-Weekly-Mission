import { email, password, passwordCheck, passwordCheckVisible, passwordVisible, signupButton } from "./tags.js";
import { signup, enterSignup, togglePasswordVisible, togglePasswordCheckVisible } from "./functions.js";
import {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  addPasswordCheckErrorMsg,
  deletePasswordCheckErrorMsg,
} from "./errorMsg.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPassWordErrorMsgSignup);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordCheck.addEventListener("focusout", addPasswordCheckErrorMsg);
passwordCheck.addEventListener("focusin", deletePasswordCheckErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
passwordCheckVisible.addEventListener("click", togglePasswordCheckVisible);
signupButton.addEventListener("submit", signup);
signupButton.addEventListener("keyup", enterSignup);
