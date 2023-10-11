const $emailErrorMessage = document.querySelector('.email_error_message');
const $email = document.querySelector('.email_input');

export let emailValid = false;
export let pwdValid = false;

const REGEMAIL = /^[A-Za-z0-9\-]+@[A-Za-z0-9]+\.[a-z]/;
export function emailErrorMessage(){
    emailValid = false;
    if($email.value === ""){
        showErrorMessage($email,$emailErrorMessage,"이메일을 입력해주세요.")
    }
   else if(!REGEMAIL.test($email.value)){
        showErrorMessage($email,$emailErrorMessage,"올바른 이메일 주소가 아닙니다.")
   }
   else{
    removeErrorMessage($email, $emailErrorMessage);
    emailValid = true;
   }
}

export function showErrorMessage($input,$errorMessage, message){
    $errorMessage.textContent = message;
    $errorMessage.style.display = "block";
    $input.classList.add('border-red');
}

export function removeErrorMessage($input,$errorMessage){
    $errorMessage.style.display = "none";
    $input.classList.remove('border-red');
}

export function pwdEyeOnOff($target,$input){
    let eyeOn = $target.src.includes('eye-on');
    if(eyeOn){
        $target.src = "/img/eye-off.svg";
        $input.type ="password";
    }
    else{
        $target.src = "/img/eye-on.svg";
        $input.type ="text";
    }
}
