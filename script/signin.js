import {$emailErrorMessage,$pwdErrorMessage,pwdErrorMessage,emailValid,pwdValid, emailErrorMessage} from './sign.js';

const $submit = document.querySelector('.form__sign');
function signinValidCheck(e){
    if(emailValid && pwdValid){
        return;
    }
    if(!emailValid){
        $emailErrorMessage.textContent = "이메일을 확인해주세요."
        e.preventDefault();
    }
    if(!pwdValid){
        $pwdErrorMessage.textContent = "비밀번호를 확인해주세요."
        $pwdErrorMessage.style.display ="block";
        e.preventDefault();
    }
}
$submit.addEventListener('submit',signinValidCheck);
$submit.addEventListener('submit',pwdErrorMessage);
$submit.addEventListener('submit',emailErrorMessage);