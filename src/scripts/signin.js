import { emptyInputEmail, emptyInputPw } from "./emptyInput.js";
import { addErrorMsg, removeErrorMsg } from './errorMsg.js';
import { emailValidation } from "./validations.js";

const inputEmail = document.querySelector('input[name = "signin_email"]');
const inputPw = document.querySelector('input[name = "signin_pw"]');
const form = document.querySelector('form');
const eyeIcon = document.querySelector('.eye_icon');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PW = 'codeit101';

let eye_on = 0;

function checkLogin(event){
    /* 특정 로그인 시도 시 /folder 페이지로 이동하는 함수 */
    event.preventDefault();
    const isEmptyEmail = !inputEmail.value;
    const isEmptyPw = !inputPw.value;

    if(isEmptyEmail || isEmptyPw) return;
    if(inputEmail.value === TEST_EMAIL && inputPw.value === TEST_PW) {
        location.href = '/folder';
    }
    else{
        addErrorMsg(inputEmail, "이메일을 확인해주세요.");
        addErrorMsg(inputPw, "비밀번호를 확인해주세요.");
    }
}

function clickEye(event){
    /* 눈 아이콘을 클릭하면 비밀번호 문자열 가리기 설정을 변경해주는 함수 */
    if(!eye_on){ 
        //off -> on
        eye_on = 1;
        eyeIcon.setAttribute('src', '/assets/images/eye-on.svg');
        inputPw.setAttribute('type', '');
        inputPw.setAttribute('placeholder', 'password');
    }
    else{
        //on -> off
        eye_on = 0;
        eyeIcon.setAttribute('src', '/assets/images/eye-off.svg');
        inputPw.setAttribute('type', 'password');
        inputPw.setAttribute('placeholder', '●●●●●●●●');
    }
}

//이메일
inputEmail.addEventListener('focusout', emptyInputEmail);
inputEmail.addEventListener('input', removeErrorMsg);
inputEmail.addEventListener('focusout', emailValidation);

//비밀번호
inputPw.addEventListener('focusout', emptyInputPw);
inputPw.addEventListener('input', removeErrorMsg);

//로그인 버튼
form.addEventListener('submit', checkLogin);

//눈 아이콘
eyeIcon.addEventListener('click', clickEye);