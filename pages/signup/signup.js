import { emailEl, emailCheck } from "../../assets/js/email.js";
import { passwordEl, passwordCheckEl, passwordCheck, eyeOnOff } from "../../assets/js/password.js";

const eye = document.querySelector('#password-icon');
const eyeCheck = document.querySelector('#password-icon-check');
const login = document.querySelector('.login-box');

function loginCheck () {
    if (emailEl.value === '' || emailEl.classList.contains('error')) {
        emailEl.className = 'error';
        emailEl.nextElementSibling.textContent = `이메일을 확인해주세요`;
        emailEl.nextElementSibling.style.visibility = 'visible';
        return;
    }
    else if (passwordEl.value === '' || passwordEl.classList.contains('error')) {
        passwordEl.className = 'error';
        passwordEl.parentElement.nextElementSibling.textContent = `비밀번호를 확인해주세요`;
        passwordEl.parentElement.nextElementSibling.style.visibility = 'visible';
        return;
    }
    else if (passwordCheckEl.value === '' || passwordCheckEl.classList.contains('error')) {
        passwordCheckEl.className = 'error';
        passwordCheckEl.parentElement.nextElementSibling.textContent = `비밀번호를 확인해주세요`;
        passwordCheckEl.parentElement.nextElementSibling.style.visibility = 'visible';
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
passwordCheckEl.addEventListener('focusout',passwordCheck);
passwordCheckEl.addEventListener('keydown', loginCheckKey);
eye.addEventListener('click',eyeOnOff);
eyeCheck.addEventListener('click',eyeOnOff);
login.addEventListener('click',loginCheck);