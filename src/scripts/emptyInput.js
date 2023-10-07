import { addErrorMsg } from './errorMsg.js';

/**
 * Email input이 비어있는지 확인하는 함수
 */
function emptyInputEmail(event){
    const isEmpty = !event.target.value;
    if(isEmpty) addErrorMsg(event.target, "이메일을 입력하세요.");
}

/**
 * Password input이 비어있는지 확인하는 함수
 */
function emptyInputPw(event){
    const isEmpty = !event.target.value;
    if(isEmpty) addErrorMsg(event.target, "비밀번호를 입력하세요.");
}

export {emptyInputEmail, emptyInputPw};