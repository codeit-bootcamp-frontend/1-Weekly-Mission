const $emailErrorMessage = document.querySelector('.email_error_message');
const $pwdErrorMessage = document.querySelector('.pwd_error_message');
const $email = document.querySelector('.email_input');
const $pwd = document.querySelector('.pwd_input');
const $signBtn = document.querySelector('.btn-sign');
const $pwdEye = document.querySelector('.password-eye');

let emailValid = false;
let pwdValid = false;

function emailErrorMessage(e){
    emailValid = false;
    if(e.target.value === ""){
        $emailErrorMessage.textContent = "이메일을 입력해주세요."
        $emailErrorMessage.style.display ="block";
        $email.classList.add('border-red');
    }
   else if(!e.target.value.includes('@')){
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

function pwdErrorMessage(e){
    pwdValid=false;
    if(e.target.value === ""){
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
$email.addEventListener("focusout",emailErrorMessage);
$pwd.addEventListener("focusout",pwdErrorMessage);

function signinValidCheck(e){
    if(!emailValid){
        $emailErrorMessage.textContent = "이메일을 확인해주세요."
        $emailErrorMessage.style.display ="block";
        e.preventDefault();
    }
    if(!pwdValid){
        $pwdErrorMessage.textContent = "비밀번호를 확인해주세요."
        $pwdErrorMessage.style.display ="block";
        e.preventDefault();
    }
}
$signBtn.addEventListener('click',signinValidCheck);

let eyeOn = $pwdEye.src.includes('eye-on');;
function pwdEyeOnOff(e){
    eyeOn = !eyeOn;
    if(eyeOn){
        e.target.src = "/img/eye-on.svg";
        $pwd.type ="text";
    }
    else{
        e.target.src = "/img/eye-off.svg";
        $pwd.type ="password";
    }
}
$pwdEye.addEventListener('submit',pwdEyeOnOff);