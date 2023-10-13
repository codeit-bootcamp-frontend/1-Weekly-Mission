import { emptyInputEmail, emptyInputPw } from "./emptyInput.js";
import { addErrorMsg, removeErrorMsg, checkErrorMsg } from './errorMsg.js';
import { emailValidation } from "./validations.js";
import { toggleEye } from "./toggleEye.js";
import { loginInfoValidation } from "./validations.js";

import { emailInput, pwInput, form, errorMsgList, pwEyeIcon } from "./constants.js";

let loginEyeFlag = false;

/**
 * 특정 로그인 시도 시 folder 페이지로 이동하는 함수
 */
async function login(event){
    event.preventDefault();
    
    emptyInputEmail(event);
    emptyInputPw(event);

    emailInput.blur();
    pwInput.blur();
    
    if(checkErrorMsg(Array.from(errorMsgList))) return;

    const isSuccessful = await loginInfoValidation(emailInput.value, pwInput.value, 'sign-in') == 200;
    if(isSuccessful) window.location.href = '/folder.html';
    else{
        addErrorMsg(emailInput, "이메일을 확인해주세요.");
        addErrorMsg(pwInput, "비밀번호를 확인해주세요.");
    }
}

/**
 * 로그인 페이지 비밀번호 가리기 이벤트
 */
function hidePw(event){
    event.preventDefault();
    loginEyeFlag = toggleEye(pwInput, pwEyeIcon, loginEyeFlag);
}

//이메일
emailInput.addEventListener('focusout', emptyInputEmail);
emailInput.addEventListener('focusout', emailValidation);
emailInput.addEventListener('input', removeErrorMsg);

//비밀번호
pwInput.addEventListener('focusout', emptyInputPw);
pwInput.addEventListener('input', removeErrorMsg);

//로그인 버튼
form.addEventListener('submit', login);

//눈 아이콘
pwEyeIcon.addEventListener('click', hidePw);