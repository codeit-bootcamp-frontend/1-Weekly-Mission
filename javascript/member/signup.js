import {
    $,
    inputAccount,  
    inputs,
    form,
    hendleFocusOut,
    isCheck,
    passwordCheckErrorMessage,
} from '../utils.js';



/* 회원가입 조건 */
function isSignUp(userPassword, userPasswordCh) {
    return isCheck.checkEmail && isCheck.checkPassword && isCheck.reCheckPassword && userPassword === userPasswordCh;
}
/* 회원가입 시 비밀번호에 문제 있을 경우 */
function isSignUpPassword(userPassword, userPasswordCh) {
    return !isCheck.checkPassword || userPassword !== userPasswordCh;
}


/* 비밀번호 재확인 체크 */
function hendleChange(event){
    const passwordCheckBox = $('.password-check-box'); /* 비밀번호 재확인 메세지 */
    const {target} = event;

    if(target.name === 'passwordCh') {
        passwordCheckBox.classList.remove('empty', 'check');
        passwordCheckErrorMessage(target, passwordCheckBox);
        inputAccount.userPasswordCh = target.value;
    }
}

/* 회원가입 확인 */
function handleSignUpSubmit(event){
    const emailBox = $('.email-box'); /* 이메일 메세지*/
    const passwordBox = $('.password-box'); /* 비밀번호 메세지 */
    const {userEmail, userPassword, userPasswordCh} = inputAccount;

    event.preventDefault();
    if(isSignUp(userPassword, userPasswordCh)) {
        alert('환영합니다.');
        form.submit();
        location.href= './folder.html'; 
        return;
    } else {
        if(!isCheck.checkEmail) {
            emailBox.classList.add('disaccord');
        }
        if(isSignUpPassword(userPassword, userPasswordCh)) {
            passwordBox.classList.add('disaccord');
        }
    }
    
}


for (let input of inputs) {
    input.addEventListener('focusout', hendleFocusOut);
    input.addEventListener('input', hendleChange);
}

form.addEventListener('submit', handleSignUpSubmit)