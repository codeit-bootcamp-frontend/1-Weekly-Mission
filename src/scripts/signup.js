import { emptyInputEmail, emptyInputPw } from "./emptyInput.js";
import { checkErrorMsg, removeErrorMsg } from "./errorMsg.js";
import { emailValidation, pwValidation, emailDuplicationCheck, pwCheckValidation, loginInfoValidation } from "./validations.js";
import { toggleEye } from "./toggleEye.js";

import { form, errorMsgList, emailInput, pwInput, pwCheckInput, pwEyeIcon, pwCheckEyeIcon } from "./constants.js";

let PwEyeFlag = false;
let PwCheckEyeFlag = false;

if(window.localStorage.getItem('loginToken')) window.location.href = "/folder.html";

/**
 * 회원가입을 실행할 경우, 다시 에러 검사 후 유효한 회원가입이라면 /folder 페이지로 이동하는 함수
 */
async function signup(event){
    event.preventDefault();
    
    emptyInputEmail(event);
    emptyInputPw(event);
    pwCheckValidation(event);

    emailInput.blur();
    pwInput.blur();
    pwCheckInput.blur();

    if(checkErrorMsg(Array.from(errorMsgList))) return;
    const isSuccessful = await loginInfoValidation(emailInput.value, pwInput.value, 'sign-up') == 200;
    if(isSuccessful) window.location.href = '/folder.html';
}
/**
 * 회원가입 페이지 비밀번호 가리기 이벤트
 */
function hidesignupPw(event){
    event.preventDefault();
    PwEyeFlag = toggleEye(pwInput, pwEyeIcon, PwEyeFlag);
}
/**
 * 회원가입 페이지 비밀번호 확인 가리기 이벤트
 */
function hidesignupPwCheck(event){
    event.preventDefault();
    PwCheckEyeFlag = toggleEye(pwCheckInput, pwCheckEyeIcon, PwCheckEyeFlag);
}

//이메일
emailInput.addEventListener('focusout', emptyInputEmail);
emailInput.addEventListener('focusout', emailValidation);
emailInput.addEventListener('focusout', emailDuplicationCheck);
emailInput.addEventListener('focusin', removeErrorMsg);

//비밀번호
pwInput.addEventListener('focusout', pwValidation);
pwInput.addEventListener('focusin', removeErrorMsg);

//비밀번호 확인
pwCheckInput.addEventListener('focusout', pwCheckValidation);
pwCheckInput.addEventListener('focusin', removeErrorMsg);

//회원가입
form.addEventListener('submit', signup);

//눈 아이콘
pwEyeIcon.addEventListener('click', hidesignupPw);
pwCheckEyeIcon.addEventListener('click', hidesignupPwCheck);