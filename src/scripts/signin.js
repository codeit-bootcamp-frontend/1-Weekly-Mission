import { emptyInputEmail, emptyInputPw } from "./emptyInput.js";
import { addErrorMsg, removeErrorMsg, checkErrorMsg } from './errorMsg.js';
import { emailValidation } from "./validations.js";

const loginEmailInput = document.querySelector('input[name = "signin_email"]');
const loginPwInput = document.querySelector('input[name = "signin_pw"]');
const loginForm = document.querySelector('form');
const loginError = document.querySelectorAll('.error_msg');
const eyeIcon = document.querySelector('.eye_icon');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PW = 'codeit101';

let eye_on = 0;
/**
 * 특정 로그인 시도 시 folder 페이지로 이동하는 함수
 */
function login(event){
    event.preventDefault();
    
    emptyInputEmail(event);
    emptyInputPw(event);

    loginEmailInput.blur();
    loginPwInput.blur();

    if(checkErrorMsg(loginError)) return;

    if(loginEmailInput.value === TEST_EMAIL && loginPwInput.value === TEST_PW) {
        location.href = '/folder.html';
    }
    else{
        addErrorMsg(loginEmailInput, "이메일을 확인해주세요.");
        addErrorMsg(loginPwInput, "비밀번호를 확인해주세요.");
    }
}

function clickEye(event){
    /* 눈 아이콘을 클릭하면 비밀번호 문자열 가리기 설정을 변경해주는 함수 */
    if(!eye_on){ 
        //off -> on
        eye_on = 1;
        eyeIcon.setAttribute('src', '/assets/images/eye-on.svg');
        loginPwInput.setAttribute('type', '');
        loginPwInput.setAttribute('placeholder', 'password');
    }
    else{
        //on -> off
        eye_on = 0;
        eyeIcon.setAttribute('src', '/assets/images/eye-off.svg');
        loginPwInput.setAttribute('type', 'password');
        loginPwInput.setAttribute('placeholder', '●●●●●●●●');
    }
}

//이메일
loginEmailInput.addEventListener('focusout', emptyInputEmail);
loginEmailInput.addEventListener('input', removeErrorMsg);
loginEmailInput.addEventListener('focusout', emailValidation);

//비밀번호
loginPwInput.addEventListener('focusout', emptyInputPw);
loginPwInput.addEventListener('input', removeErrorMsg);

//로그인 버튼
loginForm.addEventListener('submit', login);

//눈 아이콘
eyeIcon.addEventListener('click', clickEye);