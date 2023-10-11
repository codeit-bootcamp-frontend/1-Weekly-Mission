const $emailErrorMessage = document.querySelector('.email_error_message');
const $pwdErrorMessage = document.querySelector('.pwd_error_message');
const $email = document.querySelector('.email_input');
const $pwd = document.querySelector('.pwd_input');
const $pwdEye = document.querySelectorAll('.password-eye');

let emailValid = false;
let pwdValid = false;

const REGEMAIL = /^[A-Za-z0-9\-]+@[A-Za-z0-9]+\.[a-z]/;
function emailErrorMessage(){
    emailValid = false;
    if($email.value === ""){
        $emailErrorMessage.textContent = "이메일을 입력해주세요."
        $emailErrorMessage.style.display ="block";
        $email.classList.add('border-red');
    }
   else if(!REGEMAIL.test($email.value)){
        $emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다."
        $emailErrorMessage.style.display ="block";
        $email.classList.add('border-red');
   }
   else{
    $emailErrorMessage.style.display ="none";
    $email.classList.remove("border-red");
    emailValid = true;
   }
}
$email.addEventListener("focusout",emailErrorMessage);


function pwdErrorMessage(){
    pwdValid=false;
    if($pwd.value === ""){
        $pwdErrorMessage.textContent = "비밀번호를 입력해주세요."
        $pwdErrorMessage.style.display ="block";
        $pwd.classList.add('border-red');
    }
    else{
        $pwdErrorMessage.style.display ="none";
        $pwd.classList.remove("border-red");
        pwdValid = true;
    }
}
$pwd.addEventListener("focusout",pwdErrorMessage);

function pwdEyeOnOff(e){
    let eyeOn = e.target.src.includes('eye-on');
    if(eyeOn){
        e.target.src = "/img/eye-off.svg";
        e.target.previousElementSibling.type ="password";
    }
    else{
        e.target.src = "/img/eye-on.svg";
        e.target.previousElementSibling.type ="text";
    }
}
$pwdEye[0].addEventListener('click',pwdEyeOnOff);

export {$email,$emailErrorMessage,$pwdErrorMessage,$pwd,pwdEyeOnOff,$pwdEye,emailValid,pwdValid,emailErrorMessage,pwdErrorMessage}