const $emailErrorMessage = document.querySelector('.email_error_message');
const $pwdErrorMessage = document.querySelector('.pwd_error_message');
const $email = document.querySelector('.email_input');
const $pwd = document.querySelector('.pwd_input');
const $signBtn = document.querySelector('.btn-sign');

let emailValid = false;
let pwdValid = false;

function emailErrorMessage(e){
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
    console.log(e)
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
