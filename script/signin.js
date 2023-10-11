import {
    pwdErrorMessage,
    emailValid,
    pwdValid,
    emailErrorMessage,
    pwdEyeOnOff,
    showErrorMessage,

} from './sign.js';

const $emailErrorMessage = document.querySelector('.email_error_message');
const $pwdErrorMessage = document.querySelector('.pwd_error_message');
const $email = document.querySelector('.email_input');
const $pwdEye = document.querySelector('.password-eye');
const $submit = document.querySelector('.form__sign');
const $pwd = document.querySelector('.pwd_input');

$email.addEventListener("focusout",emailErrorMessage);
$pwd.addEventListener("focusout",pwdErrorMessage);
$pwdEye.addEventListener('click',(e)=>pwdEyeOnOff(e.target,$pwd));

function signinValidCheck(e){
    emailErrorMessage();
    pwdErrorMessage();
    if(emailValid && pwdValid){
        return;
    }
    if(!emailValid){
        showErrorMessage($email,$emailErrorMessage, "이메일을 확인해주세요.");
        e.preventDefault();
    }
    if(!pwdValid){
        showErrorMessage($pwd,$pwdErrorMessage,"비밀번호를 확인해주세요.");
        e.preventDefault();
    }
}
$submit.addEventListener('submit',signinValidCheck);