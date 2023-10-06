import { _onHidePassword, setErrorMessage, formContainsError } from './functions.js';
import { form } from './tags.js';

const signupButton = document.querySelector('#signup-button');
const hidePasswordCheckButton = document.querySelector('.hide-password-check');

form.addEventListener('focusout', _onValidateSignupInputValue);
signupButton.addEventListener('click', _onSignup);
hidePasswordCheckButton.addEventListener('click', _onHidePassword);

function _onSignup(){
    alert("회원가입");
}


/**
 * _onValidationInputValue()결과 에러가 발생하지 않은경우,
 * 회원가입시 필요한 validation을 실행한다.
 */
function _onValidateSignupInputValue(e){
    if(formContainsError() === false){
        const id = e.target.id;
        const value = e.target.value;

        if(id === 'email'){
            // 중복된 이메일인지 체크
            if(value === 'test@codeit.com'){
                setErrorMessage(id, 'duplicate');
            }

        }else if(id === 'password' || id === 'password-check') {
            // 비밀번호가 일치하는지 체크
            const passwordCheck = document.querySelector('#password-check');
            const password = document.querySelector('#password');

            if (password.value !== passwordCheck.value) {
                setErrorMessage('password-check', 'coincidence');
            }
        }
    }
}