import { email, password, passwordVisible, loginButton } from './tags.js';
import { togglePasswordVisible, login } from './functions.js';
import { checkEmail, deleteEmailErrorMsg, checkPassowrd, deletePasswordErrorMsg } from './errorMsg.js';
import { checkToken } from './checkToken.js';

window.addEventListener('DOMContentLoaded', checkToken);
email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', deleteEmailErrorMsg);
password.addEventListener('focusout', checkPassowrd);
password.addEventListener('focusin', deletePasswordErrorMsg);
passwordVisible.addEventListener('click', togglePasswordVisible);
loginButton.addEventListener('submit', login);
