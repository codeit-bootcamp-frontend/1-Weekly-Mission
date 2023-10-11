/* 공통 함수 */

import { emailReg } from './validationRegExp.js';
import { errorMessages } from './errorMessages.js';

/**
 * validateInputValue 함수를 호출한다.
 * @param {FocusEvent} e 이벤트 객체
 */
function _onValidateInputValue(e){
    const id = e.target.id;
    const value = e.target.value;

    validateInputValue(id, value);
}

/**
 * input의 value의 유효성검사를 한다.
 * 공통 : 값이 비어있는지 체크.
 * email : 올바른 형식인지 체크.
 * @param id
 * @param value
 */
function validateInputValue(id, value){
    if(!value){
        // 비어있는 값인지 체크
        setErrorMessage(id, 'empty');

    }else if(id === 'email'){
        if(emailReg.test(value) === false){
            setErrorMessage(id, 'validation');
        }
    }
}

/**
 * password, passwordCheck의 문자열을 숨기거나 보이게 하고, image의 alt를 변경한다.
 * image의 src는 pages/login/style.css에서 변경한다.
 * @param {PointerEvent} e 이벤트 객체
 */
function _onHidePassword(e){
    e.target.classList.toggle('hide');

    if(e.target.classList.contains('hide')){
        e.target.setAttribute('alt','비밀번호 안보이게하기(현재 보임)');
        e.target.parentElement.querySelector('input').setAttribute('type','text');
    }else{
        e.target.setAttribute('alt','비밀번호 보이게하기(현재 보이지 않음)');
        e.target.parentElement.querySelector('input').setAttribute('type','password');
    }
}

/**
 * target의 nextSibling으로 에러메세지를 출력하고, target에 error클래스를 추가한다.
 * 에러메세지가 이미 있다면 print하지 않는다.
 * @param {string} id target's id
 * @param {string} type error type
 */
function setErrorMessage(id, type){
    const message = getErrorMessage(id, type);

    // 에러메세지가 이미 있다면 print하지 않는다.
    const target = document.getElementById(id);
    if(target.classList.contains('error')){
        return;
    }

    // 메세지를 넣을 곳 탐색 후 출력.
    const p = document.createElement('p');
    p.textContent = message;
    document.getElementById(id).parentElement.append(p);

    // 에러메세지를 넣은 후 target에 error클래스를 추가.
    target.classList.add('error');
}

/**
 * errorMessages 객체안에서 type과 id로 메세지를 찾아 리턴한다.
 * 해당하는 에러메세지가 없는 경우 빈문자열을 리턴한다.
 * @param {string} id target's id
 * @param {string} type error type
 * @returns {string} 에러메세지
 */
function getErrorMessage(id, type){
    return errorMessages[type]?.[id] ?? "";
}

/**
 * 에러메세지를 삭제할 대상을 removeErrorClassAndMessage함수의 인자로 전달한다.
 * password의 값이 변경된 경우, passwordCheck의 값을 비운다.
 * @param {KeyboardEvent} e 이벤트 객체
 */
function _onRemoveValidationError(e){
    if(e.key !== 'Enter'){
        removeErrorClassAndMessage(e.target);

        // password값이 변경되었을 때, passwordCheck값을 비운다.
        if(e.target.id === 'password'){
            const passwordCheck = document.querySelector('#passwordCheck');
            if(passwordCheck){
                passwordCheck.value = '';
                removeErrorClassAndMessage(passwordCheck);
            }
        }
    }
}

/**
 * target의 error클래스를 제거하고, 에러메세지를 삭제한다.
 * @param {Element} target target element
 */
function removeErrorClassAndMessage(target){
    if(target.classList.contains('error')){
        target.classList.remove('error');

        if(target.parentElement.querySelector('p')){
            target.parentElement.querySelector('p').remove();
        }
    }
}

/**
 * .error 를 가진 태그가 있는지 확인한다.
 * @returns {boolean} 에러가 있다면 true, 없다면 false반환.
 */
function isFormContainsError(){
    const errors = document.querySelectorAll('.error');
    return errors.length !== 0;
}

export { _onValidateInputValue, _onHidePassword, setErrorMessage, _onRemoveValidationError, isFormContainsError, validateInputValue, removeErrorClassAndMessage };