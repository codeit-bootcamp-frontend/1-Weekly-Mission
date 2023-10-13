import { emptyInputEmail, emptyInputPw } from "./emptyInput.js";
import { addErrorMsg, checkErrorMsg, removeErrorMsg } from "./errorMsg.js";
import { emailValidation, pwValidation } from "./validations.js";
import { checkSubmitEvent } from "./checkEventType.js";
import { toggleEye } from "./toggleEye.js";
import { post } from "./api.js";
import { loginValidation as loginInfoValidation } from "./validations.js";

const signupForm = document.querySelector('form');
const signupError = document.querySelectorAll('.error_msg');
const [signupEmailInput, signupPwInput, signupPwCheckInput] = document.querySelectorAll('input');
const [signupPwEye, signupPwCheckEye] = document.querySelectorAll('.eye_icon');

const TEST_EMAIL = 'test@codeit.com';

let PwEyeFlag = false;
let PwCheckEyeFlag = false;

/**
 * 비밀번호와 비밀번호 확인 input값이 동일한지 검사하는 함수
 */
function pwMatchCheck(event){
    const target = checkSubmitEvent(event, 'pwCheck');
    const isNotEqual = target.value !== signupPwInput.value;
    if(isNotEqual) addErrorMsg(target, "비밀번호가 일치하지 않아요.");
}
/**
 * 이메일 중복 검사하는 함수
 */
async function emailDuplicationCheck(event){
    const email = {
        "email" : event.target.value
    };
    const isDuplicated = await post('check-email', email) == 409;
    if(isDuplicated) addErrorMsg(event.target, "이미 사용 중인 이메일입니다.");
}
/**
 * 회원가입을 실행할 경우, 다시 에러 검사 후 유효한 회원가입이라면 /folder 페이지로 이동하는 함수
 */
async function signup(event){
    event.preventDefault();
    
    emptyInputEmail(event);
    emptyInputPw(event);
    pwMatchCheck(event);

    signupEmailInput.blur();
    signupPwInput.blur();
    signupPwCheckInput.blur();

    if(checkErrorMsg(Array.from(signupError))) return;
    const isSuccessful = await loginInfoValidation(signupEmailInput.value, signupPwInput.value, 'sign-up') == 200;
    if(isSuccessful) window.location.href = '/folder.html';
    location.href = '/folder.html';
}
/**
 * 회원가입 페이지 비밀번호 가리기 이벤트
 */
function hidesignupPw(event){
    event.preventDefault();
    PwEyeFlag = toggleEye(signupPwInput, signupPwEye, PwEyeFlag);
}
/**
 * 회원가입 페이지 비밀번호 확인 가리기 이벤트
 */
function hidesignupPwCheck(event){
    event.preventDefault();
    PwCheckEyeFlag = toggleEye(signupPwCheckInput, signupPwCheckEye, PwCheckEyeFlag);
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
signupPwCheckInput.addEventListener('focusout', pwMatchCheck);
signupPwCheckInput.addEventListener('input', removeErrorMsg);

//회원가입
signupForm.addEventListener('submit', signup);

//눈 아이콘
signupPwEye.addEventListener('click', hidesignupPw);
signupPwCheckEye.addEventListener('click', hidesignupPwCheck);