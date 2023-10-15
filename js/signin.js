import { email, password, passwordVisible, loginButton } from './tags.js';
import { togglePasswordVisible, handleLogin } from './functions.js';
import { checkEmail, deleteEmailErrorMsg, checkPassword, deletePasswordErrorMsg } from './errorMsg.js';
import { checkToken } from './authorization.js';

window.addEventListener('DOMContentLoaded', checkToken);
email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', deleteEmailErrorMsg);
password.addEventListener('focusout', checkPassword);
password.addEventListener('focusin', deletePasswordErrorMsg);
passwordVisible.addEventListener('click', togglePasswordVisible);
loginButton.addEventListener('submit', handleLogin);
