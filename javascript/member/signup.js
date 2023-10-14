import {$, inputAccount, form} from '../utils.js';


/* 회원가입 조건 */
function isSignUp(userEmail, userPassword, userPasswordCh) {
    return userEmail !== "" && userPassword !== "" && userPasswordCh !== "" && userPassword === userPasswordCh;
}
/* 회원가입 시 비밀번호에 문제 있을 경우 */
function isSignUpPassword(userPassword, userPasswordCh) {
    return userPassword === "" || userPassword !== userPasswordCh;
}



/* 회원가입 확인 */
export function handleSignUpSubmit(event){
    const {userEmail, userPassword, userPasswordCh} = inputAccount;

    event.preventDefault();
    if(isSignUp(userEmail, userPassword, userPasswordCh)) {
        alert('회원가입 완료되었습니다.');
        form.submit();
        location.href= './folder.html'; 
        return;
    } else {
        if(userEmail === "") {
            $('.email-box').classList.add('disaccord');
        }
        if(isSignUpPassword(userPassword, userPasswordCh)) {
            $('.password-box').classList.add('disaccord');
        }
    }
    
}


