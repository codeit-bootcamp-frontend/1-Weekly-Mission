import { addErrorMsg, removeErrorMsg } from "./errorMsg.js";

const emailType = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i;

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
    const isNotSatisfiedLength = event.target.value.length < 8;
    const isOnlyChar = !event.target.value.match(/[0-9]/);
    const isOnlyNum = !event.target.value.match(/[a-zA-Z]/);
    if(isNotSatisfiedLength || isOnlyChar || isOnlyNum)
        addErrorMsg(event.target, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
}

export {emailValidation, pwValidation};