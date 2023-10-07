import {$email,$emailErrorMessage,$pwdErrorMessage,$pwd,pwdEyeOnOff,$pwdEye,emailValid, emailErrorMessage} from './sign.js';

const $pwdCheckErrorMessage = document.querySelector('.check_pwd_error_message');
const $pwdCheck = document.querySelector('.check_pwd_input');
const $submit = document.querySelector('.form__sign');

let emailDupliValid = false;
function emailDuplication(){
    const existEmail = 'test@codeit.com'
    if($email.value === existEmail){
        $emailErrorMessage.textContent = "이미 사용 중인 이메일입니다."
        $emailErrorMessage.style.display ="block";
        $email.classList.add('border-red');
    }
    else
        emailDupliValid = true;
}
$email.addEventListener("focusout", emailDuplication);

const REGPWD = /(?=.*[a-zA-Z])(?=.*[0-9]){8,}/;
let pwdValid = false;
function pwdValidation(){
    if(!REGPWD.test($pwd.value)){
        $pwdErrorMessage.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
        $pwdErrorMessage.style.display ="block";
        $pwd.classList.add('border-red');
    }
    else
        pwdValid = true;
}
$pwd.addEventListener("focusout", pwdValidation);

$pwdEye[1].addEventListener('click',pwdEyeOnOff);

let pwdCheckValid = false;
function pwdCheck(){
    if($pwdCheck.value === $pwd.value){
        $pwdCheckErrorMessage.style.display ="none";
        $pwdCheck.classList.remove('border-red');
        pwdCheckValid=true;
    }
    else{
        $pwdCheckErrorMessage.textContent = "비밀번호가 일치하지 않아요."
        $pwdCheckErrorMessage.style.display ="block";
        $pwdCheck.classList.add('border-red');
    }
}

$pwdCheck.addEventListener("focusout", pwdCheck);

function validCheck(e){
    if(pwdValid && pwdCheckValid && emailValid&&emailDupliValid)
        return;
    else
      e.preventDefault();  
}
$submit.addEventListener("submit",validCheck);
$submit.addEventListener("submit",emailErrorMessage);
$submit.addEventListener("submit",pwdCheck);
$submit.addEventListener("submit",pwdValidation);