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
    const {target} = event;

    if(target.name === 'passwordCh') {
        $('.password-check-box').classList.remove('empty', 'check');
        passwordCheckErrorMessage(target, $('.password-check-box'));
        inputAccount.userPasswordCh = target.value;
    }
}

/* 회원가입 확인 */
function handleSignUpSubmit(event){
    const {userEmail, userPassword, userPasswordCh} = inputAccount;

    event.preventDefault();
    if(isSignUp(userPassword, userPasswordCh)) {
        alert('환영합니다.');
        form.submit();
        location.href= './folder.html'; 
        return;
    } else {
        if(!isCheck.checkEmail) {
            $('.email-box').classList.add('disaccord');
        }
        if(isSignUpPassword(userPassword, userPasswordCh)) {
            $('.password-box').classList.add('disaccord');
        }
    }
    
}


for (let input of inputs) {
    input.addEventListener('focusout', hendleFocusOut);
    input.addEventListener('input', hendleChange);
}

form.addEventListener('submit', handleSignUpSubmit)