// import { emailTest, passwordApi} from "../../assets/js/constants.js";
import { emailTest, passwordTest} from "../../assets/js/constants.js";
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
    } else if (passwordEl.value === '' || passwordEl.value !== passwordTest) {
        passwordEl.className = 'error';
        passwordErrorText.textContent = `비밀번호를 확인해주세요`;
        passwordErrorText.style.visibility = 'visible';
    } else {
        location.href = '/folder.html'
    }
}

// function loginCheck () {
//     if (emailEl.value === '' || emailEl.value !== emailTest ) {
//         emailEl.className = 'error';
//         emailErrorText.textContent = `이메일을 확인해주세요`;
//         emailErrorText.style.visibility = 'visible';
//     } else if (passwordEl.value === '' || passwordEl.value !== passwordApi) {
//         passwordEl.className = 'error';
//         passwordErrorText.textContent = `비밀번호를 확인해주세요`;
//         passwordErrorText.style.visibility = 'visible';
//     } else {
//         loginPost(emailEl.value, passwordEl.value)
//             .then((data) => console.log(data));
//     }
// }

function loginCheckKey (e) {
    e.key === 'Enter' ? loginCheck() : false;
}

// function postLogin(data) {
//     return fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// }

// async function loginPost (email, password) {
//     const data = {
//         email: `${email}`,
//         password: `${password}`
//     };
//     const res = await postLogin(data);
//     const resText = await res.json();
//     return resText;
// }

emailEl.addEventListener('focusout', emailCheck);
emailEl.addEventListener('keydown', loginCheckKey);
passwordEl.addEventListener('focusout', passwordCheck);
passwordEl.addEventListener('keydown', loginCheckKey); 
login.addEventListener('click', loginCheck);
eye.addEventListener('click',eyeOnOff);