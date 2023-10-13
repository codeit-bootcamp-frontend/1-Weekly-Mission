import { addErrorMsg, removeErrorMsg } from "./errorMsg.js";
import { post } from "./api.js";

const emailType = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i;
const MIN_PASSWORD_LENGTH = 8;

/**
 * Email 유효성 검사하는 함수
 */
function emailValidation(event){
    const isEmpty = !event.target.value;
    const isValid = emailType.test(event.target.value);

    if(isEmpty || isValid) return;
    addErrorMsg(event.target, "올바른 이메일 주소가 아닙니다.");
}

/**
 * Password 유효성 검사하는 함수
 */
function pwValidation(event){
    const isShort = event.target.value.length < MIN_PASSWORD_LENGTH;
    const isOnlyChar = !event.target.value.match(/[0-9]/);
    const isOnlyNum = !event.target.value.match(/[a-zA-Z]/);
    if(isShort || isOnlyChar || isOnlyNum)
        addErrorMsg(event.target, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
}

/**
 * 로그인 정보 객체를 만들어 server에 POST 요청을 해 유효한 로그인인지 검사하는 함수
 */
async function loginValidation(email, password){
    const member = { email, password };
    return await post('sign-in', member);
}

export {emailValidation, pwValidation, loginValidation};