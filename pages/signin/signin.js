import { passwordEl, passwordCheck, eyeOnOff } from "../../assets/js/password.js";
import { emailEl, emailCheck } from "../../assets/js/email.js";

const login = document.querySelector('.login-box');
const eye = document.querySelector('.icon-eye');
const emailErrorText = document.querySelector('#email-error');
const passwordErrorText = document.querySelector('#password-error')


function loginCheck () {
    if (emailEl.value === '' ) {
        emailEl.className = 'error';
        emailErrorText.textContent = `이메일을 확인해주세요`;
        emailErrorText.style.visibility = 'visible';
    } else if (passwordEl.value === '') {
        passwordEl.className = 'error';
        passwordErrorText.textContent = `비밀번호를 확인해주세요`;
        passwordErrorText.style.visibility = 'visible';
    } else {
    loginPost(emailEl.value,passwordEl.value)
        .then((res) => {
            if (!res.ok){
                throw new Error(`${res.status} error `)
            }
            location.href = '/folder.html'
        })
        .catch(() => {
            passwordEl.className = 'error';
            passwordErrorText.textContent = `이메일 또는 비밀번호를 확인해주세요`;
            passwordErrorText.style.visibility = 'visible';
        })
    }
}

function loginCheckKey (e) {
    e.key === 'Enter' ? loginCheck() : false;
}

async function loginPost (email, password) {
    const data = {
        email: `${email}`,
        password: `${password}`
    }
    const res = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res;
}

emailEl.addEventListener('focusout', emailCheck);
emailEl.addEventListener('keydown', loginCheckKey);
passwordEl.addEventListener('focusout', passwordCheck);
passwordEl.addEventListener('keydown', loginCheckKey); 
login.addEventListener('click', loginCheck);
eye.addEventListener('click',eyeOnOff);