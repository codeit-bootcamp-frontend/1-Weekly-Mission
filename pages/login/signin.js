import { setErrorMessage, formContainsError } from './functions.js';

const signinButton = document.querySelector('#signin-button');

signinButton.addEventListener('click', _onLogin);

/**
 * 문서안에 .error가 있는지 확인 후 로그인을 시도한다.
 * id와 비밀번호가 틀렸을 경우 에러메세지를 출력한다.
 */
function _onLogin(){
    if(formContainsError() === false){
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        if(email.value === 'test@codeit.com' && password.value === 'codeit101'){
            // 로그인 성공.
            location.href = "/pages/folder";

        }else{
            // 에러메세지 출력.
            setErrorMessage(email.id, 'login');
            setErrorMessage(password.id, 'login');
        }
    }
}