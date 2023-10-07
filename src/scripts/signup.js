import { emptyInputEmail } from "./emptyInput.js";
import { removeErrorMsg } from "./errorMsg.js";
import { emailValidation, pwValidation } from "./validations.js";

const signupEmailInput = document.querySelector('input[name = "signup_email"]');
const signupPwInput = document.querySelector('input[name = "signup_pw"]');

//이메일
signupEmailInput.addEventListener('focusout', emptyInputEmail);
signupEmailInput.addEventListener('input', removeErrorMsg);
signupEmailInput.addEventListener('focusout', emailValidation);

//비밀번호
signupPwInput.addEventListener('focusout', pwValidation);
signupPwInput.addEventListener('input', removeErrorMsg);