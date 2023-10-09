import { addErrorMsg } from './errorMsg.js';
import { checkSubmitEvent } from './checkEventType.js';

/**
 * Email input이 비어있는지 확인하는 함수
 */
function emptyInputEmail(event){
    const target = checkSubmitEvent(event, 'email');
    const isEmpty = !target.value;
    if(isEmpty) addErrorMsg(target, "이메일을 입력하세요.");
}

/**
 * Password input이 비어있는지 확인하는 함수
 */
function emptyInputPw(event){
    const target = checkSubmitEvent(event, 'pw');
    const isEmpty = !target.value;
    if(isEmpty) addErrorMsg(target, "비밀번호를 입력하세요.");
}

export {emptyInputEmail, emptyInputPw};