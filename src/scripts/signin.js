import { emptyInputEmail, emptyInputPw } from "./emptyInput.js";
import { addErrorMsg, removeErrorMsg, checkErrorMsg } from './errorMsg.js';
import { emailValidation } from "./validations.js";
import { toggleEye } from "./toggleEye.js";
import {post} from "./api.js";

const [loginEmailInput, loginPwInput] = document.querySelectorAll('input');
const loginForm = document.querySelector('form');
const loginError = document.querySelectorAll('.error_msg');
const loginEyeIcon = document.querySelector('.eye_icon');

let loginEyeFlag = false;

/**
 * 특정 로그인 시도 시 folder 페이지로 이동하는 함수
 */
async function login(event){
    event.preventDefault();
    
    emptyInputEmail(event);
    emptyInputPw(event);

    loginEmailInput.blur();
    loginPwInput.blur();
    
    if(checkErrorMsg(Array.from(loginError))) return;

    const isSuccessful = await post(loginEmailInput.value, loginPwInput.value) == 200;
    if(isSuccessful) window.location.href = '/folder.html';
    else{
        addErrorMsg(loginEmailInput, "이메일을 확인해주세요.");
        addErrorMsg(loginPwInput, "비밀번호를 확인해주세요.");
    }
}

function hidePw(event){
    event.preventDefault();
    loginEyeFlag = toggleEye(loginPwInput, loginEyeIcon, loginEyeFlag);
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
loginEyeIcon.addEventListener('click', hidePw);