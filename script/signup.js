import {$email,$emailErrorMessage,$pwdErrorMessage,$pwd,pwdEyeOnOff,$pwdEye} from './sign.js';

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
