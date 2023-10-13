import { addErrorMsg } from "./errorMsg.js";
import { post } from "./api.js";
import { checkSubmitEvent } from "./checkEventType.js";
import { pwInput } from "./constants.js";

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
 * Email 중복 검사하는 함수
 */
async function emailDuplicationCheck(event){
    const email = {
        "email" : event.target.value
    };
    const isDuplicated = await post('check-email', email) == 409;
    if(isDuplicated) addErrorMsg(event.target, "이미 사용 중인 이메일입니다.");
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
 * 비밀번호와 비밀번호 확인 input값이 동일한지 검사하는 함수
 */
function pwCheckValidation(event){
    const target = checkSubmitEvent(event, 'pwCheck');
    const isNotEqual = target.value !== pwInput.value;
    if(isNotEqual) addErrorMsg(target, "비밀번호가 일치하지 않아요.");
}

/**
 * 로그인 정보 객체를 만들고, server에 POST 요청을 해 유효한 로그인/회원가입인지 검사하는 함수
 */
async function loginInfoValidation(email, password, url){
    const member = { email, password };
    return await post(url, member);
}

export {emailValidation, pwValidation, loginInfoValidation, emailDuplicationCheck, pwCheckValidation};