import { emailInput, passwordInput, eyeButton, loginButton } from "../variables.js";
import { checkInput } from "./checkinput.js";
import { deleteMessage } from "../deleteMessage.js";
import { togglePassword } from "../togglePassword.js";
import { login, loginEnter } from "./submit.js";

emailInput.addEventListener('focusout', checkInput);
emailInput.addEventListener('focusin', deleteMessage);
passwordInput.addEventListener('focusout', checkInput);
passwordInput.addEventListener('focusin', deleteMessage);
eyeButton.addEventListener('click', togglePassword);
loginButton.addEventListener('submit', login);
loginButton.addEventListener('keypress', loginEnter);
