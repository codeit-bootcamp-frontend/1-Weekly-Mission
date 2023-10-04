import { email, password, passwordCheck, passwordVisible, signupButton } from "./tags.js";
import {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  togglePasswordVisible,
  checkPassword,
  deletePasswordCheckErrorMsg,
  signup,
} from "./functions.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPassWordErrorMsgSignup);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordCheck.addEventListener("focusout", checkPassword);
passwordCheck.addEventListener("focusin", deletePasswordCheckErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
signupButton.addEventListener("submit", signup);
