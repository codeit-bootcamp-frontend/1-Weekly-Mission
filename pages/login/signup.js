import { _onHidePassword, setErrorMessage, isFormContainsError, validateInputValue } from './functions.js';
import { form } from './tags.js';
import { passwordReg } from './validationRegExp.js';

const signupButton = document.querySelector('#signup-button');
const hidePasswordCheckButton = document.querySelector('.hide-password-check');

form.addEventListener('focusout', _onValidateSignupInputValue);
signupButton.addEventListener('click', _onSignup);
form.addEventListener('keydown',_onEnterSignup);
hidePasswordCheckButton.addEventListener('click', _onHidePassword);

/**
 * 유효성검사 후, signup함수를 호출한다.
 */
function _onSignup(){
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
        _onSignup();
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
        const email = {
            email : value,
        }
        requestCheckEmail(email)
            .then((response) => {
                if(!response.ok){
                    setErrorMessage(id, 'duplicate');
                }
            })

    } else if(id === 'password'){
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

async function requestSignup(account){
    return fetch('https://bootcamp-api.codeit.kr/api/sign-up',{
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

async function requestCheckEmail(email){
    return fetch('https://bootcamp-api.codeit.kr/api/check-email',{
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}