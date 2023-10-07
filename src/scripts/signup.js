import { emptyInputEmail } from "./emptyInput.js";
import { addErrorMsg, removeErrorMsg } from "./errorMsg.js";
import { emailValidation, pwValidation } from "./validations.js";
import { TEST_EMAIL } from "./signin.js";

const signupEmailInput = document.querySelector('input[name = "signup_email"]');
const signupPwInput = document.querySelector('input[name = "signup_pw"]');
const signupPwCheckInput = document.querySelector('input[name = "signup_pw_check"]');

/**
 * 비밀번호와 비밀번호 확인 input값이 동일한지 검사하는 함수
 */
function pwMatchCheck(event){
    const isNotEqual = event.target.value !== signupPwInput.value;
    if(isNotEqual) addErrorMsg(event.target, "비밀번호가 일치하지 않아요.");
}

/**
 * 이메일 중복 검사하는 함수
 */
function emailDuplicationCheck(event){
    const isDuplicated = event.target.value === TEST_EMAIL;
    if(isDuplicated) addErrorMsg(event.target, "이미 사용 중인 이메일입니다.");
}

//이메일
signupEmailInput.addEventListener('focusout', emptyInputEmail);
signupEmailInput.addEventListener('input', removeErrorMsg);
signupEmailInput.addEventListener('focusout', emailValidation);
signupEmailInput.addEventListener('focusout', emailDuplicationCheck);

//비밀번호
signupPwInput.addEventListener('focusout', pwValidation);
signupPwInput.addEventListener('input', removeErrorMsg);

//비밀번호 확인
signupPwCheckInput.addEventListener('focusout', pwMatchTest);
signupPwCheckInput.addEventListener('input', removeErrorMsg);