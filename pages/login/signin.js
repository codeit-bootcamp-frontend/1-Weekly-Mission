import {setErrorMessage, isFormContainsError, validateInputValue, removeErrorClassAndMessage} from './functions.js';
import {form} from "./tags.js";

const signinButton = document.querySelector('#signin-button');

signinButton.addEventListener('click', _onLogin);
form.addEventListener('keydown',_onEnterLogin);
form.addEventListener('keydown',_onRemoveALLErrorClassAndMessage);

/**
 * 유효성 검사 후 login함수를 호출한다.
 */
function _onLogin(){
    validateAll();
    login();
}

/**
 * 에러가 있는지 확인하고, 존재하는 계정인지 확인 후, 로그인 한다.
 */
function login(){
    if(!isFormContainsError() && isVerificatedAccount()){
        location.href = "/pages/folder";
    }
}

/**
 * 입력값의 유효성검사를 한 후 login함수를 호출한다.
 */
function _onEnterLogin(e){
    if(e.key === 'Enter'){
        _onLogin();
    }
}

/**
 * form 전체 input의 유효성검사를 한다.
 */
function validateAll(){
    const inputs = document.querySelectorAll('.form-item input');

    for(const input of inputs){
        validateInputValue(input.id, input.value);
    }
}

/**
 * 유효한 계정인지 확인 후, 유효하지 않다면 에러메세지를 출력한다.
 */
function isVerificatedAccount(){

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    if(email.value === 'test@codeit.com' && password.value === 'codeit101'){
        return true;
    }else{
        // 에러메세지 출력.
        setErrorMessage(email.id, 'login');
        setErrorMessage(password.id, 'login');
        return false;
    }
}

/**
 * 모든 error클래스를 제거하고, 에러메세지를 삭제한다.
 */
function _onRemoveALLErrorClassAndMessage(e){
    if(e.key !== 'Enter'){
        const inputs = document.querySelectorAll('.form-item input');

        for(const input of inputs){
            removeErrorClassAndMessage(input);
        }
    }
}