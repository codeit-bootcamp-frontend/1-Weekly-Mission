export let emailValid = false;

const REGEMAIL = /^[A-Za-z0-9\-]+@[A-Za-z0-9]+\.[a-z]/;
export function emailErrorMessage($input,$errorMessage){
    emailValid = false;
    if($input.value === ""){
        showErrorMessage($input,$errorMessage,"이메일을 입력해주세요.")
    }
   else if(!REGEMAIL.test($input.value)){
        showErrorMessage($input,$errorMessage,"올바른 이메일 주소가 아닙니다.")
   }
   else{
    removeErrorMessage($input, $errorMessage);
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
