import { emailInput, passwordInput, confirmPasswordInput, eyeButton, loginButton } from "../variables.js";
import { checkInput } from "./checkinput.js";
import { deleteMessage } from "../deleteMessage.js";
import { togglePassword } from "../togglePassword.js";
import { login } from "../submit.js";

emailInput.addEventListener('focusout', checkInput);
emailInput.addEventListener('focusin', deleteMessage);
passwordInput.addEventListener('focusout', checkInput);
passwordInput.addEventListener('focusin', deleteMessage);
confirmPasswordInput.addEventListener('focusout', checkInput);
eyeButton.addEventListener('click', togglePassword);
loginButton.addEventListener('submit', login);
loginButton.addEventListener('keypress', login);