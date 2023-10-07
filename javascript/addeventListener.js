import { emailInput, passwordInput, eyeButton, loginButton } from "./valiable";
import { checkInput } from "./notify";
import { deleteMsg } from "./delete";
import { hidePassword } from "./passwordhide";
import { login } from "./submit";



emailInput.addEventListener('focusout', checkInput);
emailInput.addEventListener('focusin', deleteMsg);
passwordInput.addEventListener('focusout', checkInput);
passwordInput.addEventListener('focusin', deleteMsg);
eyeButton.addEventListener('click', hidePassword);
loginButton.addEventListener('submit', login);
loginButton.addEventListener('Enter', login)