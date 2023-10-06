import { emailTest, passwordTest } from "../../assets/js/test.js";
import { passwordEl, passwordCheck, eyeOnOff } from "../../assets/js/password.js";
import { emailEl, emailCheck } from "../../assets/js/email.js";

const login = document.querySelector('.login-box');
const eye = document.querySelector('.icon-eye');
const emailErrorText = document.querySelector('#email-error');
const passwordErrorText = document.querySelector('#password-error')


function loginCheck () {
    if (emailEl.value === '' || emailEl.value !== emailTest ) {
        emailEl.className = 'error';
        emailErrorText.textContent = `이메일을 확인해주세요`;
        emailErrorText.style.visibility = 'visible';
        return;
    }
    else if (passwordEl.value === '' || passwordEl.value !== passwordTest) {
        passwordEl.className = 'error';
        passwordErrorText.textContent = `비밀번호를 확인해주세요`;
        passwordErrorText.style.visibility = 'visible';
        return;
    }
    else{
        location.href = '/folder.html'
    }
}

function loginCheckKey (e) {
    e.key === 'Enter' ? loginCheck() : false;
}

emailEl.addEventListener('focusout', emailCheck);
emailEl.addEventListener('keydown', loginCheckKey);
passwordEl.addEventListener('focusout', passwordCheck);
passwordEl.addEventListener('keydown', loginCheckKey);
login.addEventListener('click', loginCheck);
eye.addEventListener('click',eyeOnOff);