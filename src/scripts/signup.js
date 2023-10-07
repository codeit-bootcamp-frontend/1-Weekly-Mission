const signupEmailInput = document.querySelector('input[name = "signup_email"]');
const signupPwInput = document.querySelector('input[name = "signup_pw"]');

import { emptyInputEmail } from "./emptyInput.js";
import { removeErrorMsg } from "./errorMsg.js";

signupEmailInput.addEventListener('focusout', emptyInputEmail);
signupEmailInput.addEventListener('input', removeErrorMsg);