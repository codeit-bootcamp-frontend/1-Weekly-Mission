import { emailEl, emailCheck } from "../../assets/js/email.js";
import { passwordEl, passwordCheckEl, passwordCheck, eyeOnOff } from "../../assets/js/password.js";

const eye = document.querySelector('#password-icon');
const eyeCheck = document.querySelector('#password-icon-check');
const login = document.querySelector('.login-box');


emailEl.addEventListener('focusout', emailCheck);
passwordEl.addEventListener('focusout', passwordCheck);
passwordCheckEl.addEventListener('focusout',passwordCheck)
eye.addEventListener('click',eyeOnOff);
eyeCheck.addEventListener('click',eyeOnOff);
login.addEventListener('click',loginCheck)

function loginCheck () {
    if (emailEl.value === '' || emailEl.parentElement.nextElementSibling.classList.contains('error')) {
        emailEl.className = 'error';
        emailEl.nextElementSibling.textContent = `이메일을 확인해주세요`;
        emailEl.nextElementSibling.style.visibility = 'visible';
        return;
    }
    else if (passwordEl.value === '' || passwordEl.parentElement.nextElementSibling.classList.contains('error')) {
        passwordEl.className = 'error';
        passwordEl.parentElement.nextElementSibling.textContent = `비밀번호를 확인해주세요`;
        passwordEl.parentElement.nextElementSibling.style.visibility = 'visible';
        return;
    }
    else if (passwordCheckEl.value === '' || passwordCheckEl.parentElement.nextElementSibling.classList.contains('error')) {
        passwordCheckEl.className = 'error';
        passwordCheckEl.parentElement.nextElementSibling.textContent = `비밀번호를 확인해주세요`;
        passwordCheckEl.parentElement.nextElementSibling.style.visibility = 'visible';
        return;
    }
    else{
        location.href = '/folder.html'
    }
}