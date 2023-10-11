import { emailInput, passwordInput, eyeButton, loginButton } from "../valiable.js";
import { checkInput } from "./checkinput.js";
import { deleteMsg } from "../delete.js";
import { hidePassword } from "../passwordhide.js";
import { login, loginEnter } from "./submit.js";



emailInput.addEventListener('focusout', checkInput);
emailInput.addEventListener('focusin', deleteMsg);
passwordInput.addEventListener('focusout', checkInput);
passwordInput.addEventListener('focusin', deleteMsg);
eyeButton.addEventListener('click', hidePassword);
loginButton.addEventListener('click', login);
loginButton.addEventListener('Enter', loginEnter);