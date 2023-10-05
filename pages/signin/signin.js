import { emailTest, passwordTest } from "../../assets/js/test.js";
import { passwordEl, passwordErrorText, passwordCheck, eye, eyeOnOff } from "../../assets/js/password.js";
import { emailEl, emailCheck, emailErrorText } from "../../assets/js/email.js";

const login = document.querySelector('.login-box');

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