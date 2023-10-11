import { emailInput, passwordInput, repasswordInput, eyeButton, loginButton } from "../valiable.js";
import { checkInput } from "./checkinput.js";
import { deleteMsg } from "../delete.js";
import { hidePassword } from "../passwordhide.js";
import { login } from "../submit.js";



emailInput.addEventListener('focusout', checkInput);
emailInput.addEventListener('focusin', deleteMsg);
passwordInput.addEventListener('focusout', checkInput);
passwordInput.addEventListener('focusin', deleteMsg);
repasswordInput.addEventListener('focusout', checkInput);
eyeButton.addEventListener('click', hidePassword);
loginButton.addEventListener('submit', login);
loginButton.addEventListener('Enter', login)