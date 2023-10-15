import {setErrorMessage, isFormContainsError, validateInputValue, removeErrorClassAndMessage, postRequest} from './functions.js';
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
    if(!isFormContainsError()){
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        const account = {
            email: email.value,
            password: password.value,
        }

        postRequest('sign-in',account)
            .then((response) => {
                if(response.ok){
                    return response.json();
                }else{
                    setErrorMessage(email.id, 'login');
                    setErrorMessage(password.id, 'login');
                }
            })
            .then((result) => {
                // 로컬스토리지에 accessToken저장
                localStorage.setItem('accessToken',result.data.accessToken);

                // 경로 이동
                location.href = "/pages/folder";
            })
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