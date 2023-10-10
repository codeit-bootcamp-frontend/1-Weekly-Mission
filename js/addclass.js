import { email, emailError, password, passwordCheck, passwordError, passwordCheckError } from "./tags.js";

function addEmailClass(msg) {
  email.classList.add("error");
  emailError.classList.add("error-msg");
  emailError.textContent = msg;
  email.parentElement.append(emailError);
}

function addPasswordClass(msg) {
  password.classList.add("error");
  passwordError.classList.add("error-msg");
  passwordError.textContent = msg;
  password.parentElement.parentElement.append(passwordError);
}

function addPasswordCheckClass(msg) {
  passwordCheck.classList.add("error");
  passwordCheckError.classList.add("error-msg");
  passwordCheckError.textContent = msg;
  passwordCheck.parentElement.parentElement.append(passwordCheckError);
}

export { addEmailClass, addPasswordClass, addPasswordCheckClass };
