import {
    emailValid,
    emailErrorMessage,
    pwdEyeOnOff,
    showErrorMessage,
    removeErrorMessage,
    CODEIT

} from './sign.js';

const $emailErrorMessage = document.querySelector('.email_error_message');
const $pwdErrorMessage = document.querySelector('.pwd_error_message');
const $email = document.querySelector('.email_input');
const $pwdEye = document.querySelector('.password-eye');
const $submit = document.querySelector('.form__sign');
const $pwd = document.querySelector('.pwd_input');

$email.addEventListener("focusout",(e)=>emailErrorMessage(e.target,$emailErrorMessage));
$pwdEye.addEventListener('click',(e)=>pwdEyeOnOff(e.target,$pwd));

if(localStorage.getItem("accessToken")){
    location.href = '/folder';
}

let pwdValid = false;
function pwdErrorMessage(){
    pwdValid=false;
    if($pwd.value === ""){
        showErrorMessage($pwd,$pwdErrorMessage,"비밀번호를 입력해주세요.");
    }
    else{
        removeErrorMessage($pwd,$pwdErrorMessage);
        pwdValid = true;
    }
}
$pwd.addEventListener("focusout",pwdErrorMessage);

async function signinValidCheck(e){
    e.preventDefault();
    if(emailValid && pwdValid){
        try{
            const user = {
                "email" : $email.value,
                "password" : $pwd.value
            }
            const response = await fetch(`${CODEIT}/sign-in`,{
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body : JSON.stringify(user)
            });
            if(response.status == 200){
                localStorage.setItem("accessToken",signupResponse.data.accessToken)
                location.href = '/folder'
            }
            else if(response.status == 400){
                showErrorMessage($email,$emailErrorMessage, "이메일을 확인해주세요.");
                showErrorMessage($pwd,$pwdErrorMessage,"비밀번호를 확인해주세요.");
            }
            else
                throw new Error(`${response.status}`);
        }catch(err){
            console.log(err)
        }
    }
}
$submit.addEventListener('submit',signinValidCheck);