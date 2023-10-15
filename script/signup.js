import {
    pwdEyeOnOff,
    emailValid,
    emailErrorMessage,
    showErrorMessage,
    removeErrorMessage,
    CODEIT,
} from './sign.js';

const $pwdErrorMessage = document.querySelector('.pwd_error_message');
const $pwdCheckErrorMessage = document.querySelector('.check_pwd_error_message');
const $emailErrorMessage = document.querySelector('.email_error_message');
const $pwdCheck = document.querySelector('.check_pwd_input');
const $submit = document.querySelector('.form__sign');
const $pwdEyes = document.querySelectorAll('.password-eye');
const $email = document.querySelector('.email_input');
const $pwd = document.querySelector('.pwd_input');

$email.addEventListener("focusout",(e)=>emailErrorMessage(e.target,$emailErrorMessage));
$pwdEyes[0].addEventListener('click',(e)=>pwdEyeOnOff(e.target,$pwd));
$pwdEyes[1].addEventListener('click',(e)=>pwdEyeOnOff(e.target,$pwdCheck));

if(localStorage.getItem("accessToken")){
    location.href = '/folder';
}

let emailDupliValid = false;
async function emailDuplication(){
    emailDupliValid = false;
    try{
        const response = await fetch(`${CODEIT}/check-email`,{
            method : 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body : JSON.stringify({"email" : $email.value})
        })
        if(response.status == 409){
            showErrorMessage($email,$emailErrorMessage,"이미 사용 중인 이메일입니다.");
        }
        else if(response.status == 200)
            emailDupliValid = true;
        else
            throw new Error(`${response.status}`);
    }catch(err){
        console.log(err);
    }
}
$email.addEventListener("focusout", emailDuplication);

const REGPWD = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;
let pwdValid = false;
function pwdValidation(){
    if(!REGPWD.test($pwd.value)){
        showErrorMessage($pwd,$pwdErrorMessage,"비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
        pwdValid = false;
    }
    else{
        removeErrorMessage($pwd,$pwdErrorMessage);
        pwdValid = true;
    }
}
$pwd.addEventListener("focusout", pwdValidation);

let pwdCheckValid = false;
function pwdCheck(){
    if($pwdCheck.value === $pwd.value){
        removeErrorMessage($pwdCheck,$pwdCheckErrorMessage);
        pwdCheckValid=true;
    }
    else{
        showErrorMessage($pwdCheck,$pwdCheckErrorMessage,"비밀번호가 일치하지 않아요.")
        pwdCheckValid=false;
    }
}

$pwdCheck.addEventListener("focusout", pwdCheck);

async function validCheck(e){
    e.preventDefault();
    if(pwdValid && pwdCheckValid && emailValid&&emailDupliValid){
        try{
           const user = {
            "email" : $email.value,
            "password" : $pwd.value
            }
            const response = await fetch(`${CODEIT}/sign-up`,{
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body : JSON.stringify(user)
            });
            const signupResponse = await response.json()
            if(response.status === 200){
                localStorage.setItem("accessToken",signupResponse.data.accessToken)
                location.href = '/folder'
            }
            else if(response.status === 400){
                console.log(response);
            }
            else
                throw new Error(`${response.status}`)
        }catch(err){
            console.log(err);

        }
        
    }
        
}
$submit.addEventListener("submit",validCheck);