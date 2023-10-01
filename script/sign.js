const $emailErrorMessage = document.querySelector('.email_error_message');
const $email = document.querySelector('.email_input');

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
   }
}

$email.addEventListener("focusout",emailErrorMessage);
