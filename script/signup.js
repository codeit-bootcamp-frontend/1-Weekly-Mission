import {$email,$emailErrorMessage,$pwdErrorMessage,$pwd,pwdEyeOnOff,$pwdEye} from './sign.js';
const $pwdCheckErrorMessage = document.querySelector('.check_pwd_error_message');
const $pwdCheck = document.querySelector('.check_pwd_input');

function emailDuplication(){
    const existEmail = 'test@codeit.com'
    if($email.value === existEmail){
        $emailErrorMessage.textContent = "이미 사용 중인 이메일입니다."
        $emailErrorMessage.style.display ="block";
        $email.classList.add('border-red');
    }
}
$email.addEventListener("focusout", emailDuplication);

const REGPWD = /[0-9][a-zA-Z].{8,}/;
function pwdValidation(){
    if(!REGPWD.test($pwd.value)){
        $pwdErrorMessage.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
        $pwdErrorMessage.style.display ="block";
        $pwd.classList.add('border-red');
    }
}
$pwd.addEventListener("focusout", pwdValidation);

$pwdEye[1].addEventListener('click',pwdEyeOnOff);

function pwdCheck(){
    if($pwdCheck.value === $pwd.value){
        $pwdCheckErrorMessage.style.display ="none";
        $pwdCheck.classList.remove('border-red');
    }
    else{
        $pwdCheckErrorMessage.textContent = "비밀번호가 일치하지 않아요."
        $pwdCheckErrorMessage.style.display ="block";
        $pwdCheck.classList.add('border-red');
    }
}
$pwdCheck.addEventListener("focusout", pwdCheck);