import { validateInput, togglePasswordVisibility } from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");
const eyesToggle = document.querySelectorAll(".eyes_toggle");

const blurEventListeners = [inputEmail, inputPwd, inputPwdCheck];

blurEventListeners.forEach((el) => el.addEventListener("blur", validateInput));

eyesToggle.forEach((el) =>
  el.addEventListener("click", togglePasswordVisibility)
);
