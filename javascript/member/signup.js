import {
    $,
    inputAccount,  
    inputs,
    form,
    hendleFocusOut,
    isCheck,
} from '../utils.js';


/* 비밀번호 재확인 에러 메세지 */
function passwordCheckErrorMessage(passwordCheck, passwordCheckBox) {
    if(!passwordCheck.value) {
        passwordCheckBox.classList.add('empty');
    }else if(passwordCheckBox.classList.contains('password-box-signup') 
    && inputAccount.password !== passwordCheck.value) {
        passwordCheckBox.classList.add('check');
    } else {
        isCheck.reCheckPassword = true;
    }
}

/* 비밀번호 재확인 체크 */
function hendleChange(event){
    const passwordCheckBox = $('.password-check-box'); /* 비밀번호 재확인 메세지 */
    const {target} = event;

    if(target.name === 'passwordCh') {
        passwordCheckBox.classList.remove('empty', 'check');
        passwordCheckErrorMessage(target, passwordCheckBox);
    }
}

/* 회원가입 확인 */
function handleSignUpSubmit(event){
    const emailBox = $('.email-box'); /* 이메일 메세지*/
    const passwordBox = $('.password-box'); /* 비밀번호 메세지 */

    event.preventDefault();
    if(isCheck.checkEmail && isCheck.checkPassword && isCheck.reCheckPassword) {
        alert('환영합니다.');
        form.submit();
        location.href= './folder.html'; 
        return;
    } else {
        if(!isCheck.checkEmail) {
            emailBox.classList.add('disaccord');
        }

        if(!isCheck.checkPassword) {
            passwordBox.classList.add('disaccord');
        }
    }
    
}


for (let input of inputs) {
    input.addEventListener('focusout', hendleFocusOut);
    input.addEventListener('input', hendleChange);
}

form.addEventListener('submit', handleSignUpSubmit)