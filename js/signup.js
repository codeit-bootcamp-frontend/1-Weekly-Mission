import { email, password, passwordCheck, passwordVisible } from "./tags.js";
import {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  togglePasswordVisible,
  checkPassword,
  deletePasswordCheckErrorMsg,
} from "./functions.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPassWordErrorMsgSignup);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordCheck.addEventListener("focusout", checkPassword);
passwordCheck.addEventListener("focusin", deletePasswordCheckErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
