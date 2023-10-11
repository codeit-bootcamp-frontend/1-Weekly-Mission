import { _onHidePassword, setErrorMessage, isFormContainsError, validateInputValue } from './functions.js';
import { form } from './tags.js';

const signupButton = document.querySelector('#signup-button');
const hidePasswordCheckButton = document.querySelector('.hide-password-check');

form.addEventListener('focusout', _onValidateSignupInputValue);
signupButton.addEventListener('click', _onClickSignup);
form.addEventListener('keydown',_onEnterSignup);
hidePasswordCheckButton.addEventListener('click', _onHidePassword);

/**
 * 회원가입 버튼을 클릭한 경우 유효성검사 후, signup함수를 호출한다.
 */
function _onClickSignup(){
    validateAll();
    signup();
}

/**
 * 에러여부 확인 후, 회원가입한다.
 */
function signup(){
    if(isFormContainsError() === false){
        location.href = "/pages/folder";
    }
}

/**
 * form에서 엔터키를 누를 경우 유효성검사 후, signup함수를 호출한다.
 */
function _onEnterSignup(e){
    if(e.key === 'Enter'){
        validateAll();
        signup();
    }
}

/**
 * form 전체 input의 유효성검사를 한다.
 */
function validateAll(){
    const inputs = document.querySelectorAll('.form-item input');

    for(const input of inputs){
        validateInputValue(input.id, input.value);
        validateSingupInputValue(input.id, input.value);
    }
}

/**
 * 회원가입시 필요한 validateSingupInputValue 함수를 호출한다.
 */
function _onValidateSignupInputValue(e){
    const id = e.target.id;
    const value = e.target.value;
    validateSingupInputValue(id, value);
}

/**
 * 회원가입시 필요한 validation을 실행한다.
 * @param {string} id
 * @param {string} value
 */
function validateSingupInputValue(id, value){
    if(id === 'email'){
        // 중복된 이메일인지 체크
        if(value === 'test@codeit.com'){
            setErrorMessage(id, 'duplicate');
        }

    } else if(id === 'password'){
        // 비밀번호는 영문, 숫자 조합으로 8자 이상입력되었는지 체크
        const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

        if(passwordReg.test(value) === false){
            setErrorMessage(id, 'validation');
        }

    } else if(id === 'passwordCheck') {
        // 비밀번호가 일치하는지 체크
        const passwordCheck = document.querySelector('#passwordCheck');
        const password = document.querySelector('#password');

        if (password.value !== passwordCheck.value) {
            setErrorMessage('passwordCheck', 'coincidence');
        }
    }
}