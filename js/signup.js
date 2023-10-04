import { email, password, passwordCheck, passwordVisible } from "./tags.js";
import {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  togglePasswordVisible,
} from "./functions.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPassWordErrorMsgSignup);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
