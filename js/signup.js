import { email, password, passwordCheck, passwordCheckVisible, passwordVisible, signupButton } from "./tags.js";
import {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  togglePasswordVisible,
  checkPassword,
  deletePasswordCheckErrorMsg,
  signup,
  enterSignup,
  togglePasswordCheckVisible,
} from "./functions.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPassWordErrorMsgSignup);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordCheck.addEventListener("focusout", checkPassword);
passwordCheck.addEventListener("focusin", deletePasswordCheckErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
passwordCheckVisible.addEventListener("click", togglePasswordCheckVisible);
signupButton.addEventListener("submit", signup);
signupButton.addEventListener("keyup", enterSignup);
