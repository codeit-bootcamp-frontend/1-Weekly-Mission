import { email, password, passwordVisible, loginButton } from "./tags.js";
import { togglePasswordVisible, login } from "./functions.js";
import { addEmailErrorMsg, deleteEmailErrorMsg, addPasswordErrorMsg, deletePasswordErrorMsg } from "./errorMsg.js";

email.addEventListener("focusout", addEmailErrorMsg);
email.addEventListener("focusin", deleteEmailErrorMsg);
password.addEventListener("focusout", addPasswordErrorMsg);
password.addEventListener("focusin", deletePasswordErrorMsg);
passwordVisible.addEventListener("click", togglePasswordVisible);
loginButton.addEventListener("submit", login);
