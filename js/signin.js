import { email, password, passwordVisible, loginButton } from "./tags.js";
import {
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPasswordErrorMsg,
  deletePasswordErrorMsg,
  togglePasswordVisible,
  login,
} from "./functions.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPasswordErrorMsg);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
loginButton.addEventListener("submit", login);
