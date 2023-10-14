import {$, form, testAccount, inputAccount, isFindEmail} from '../utils.js';


/* 로그인 계정 일치 확인 */
function isFindAccount(userEmail, userPassword) {
    return testAccount.findIndex(account => {
        return userEmail === account.email && userPassword === account.password;
    })
}
/* 로그인 비밀번호 일치 확인 */
function isFindPassword(userPassword) {
    return testAccount.findIndex(account => {
        return userPassword === account.password;
    })
}

/* 로그인 확인 */
export function handleSigninSubmit(event) {
    const {userEmail, userPassword} = inputAccount;

    event.preventDefault();
    if(isFindAccount(userEmail, userPassword) > -1) {
        alert('환영합니다.');
        form.submit();
        location.href= './folder.html'; 
    } else {
        /* 이메일 최종확인 */
        if(isFindEmail(userEmail) <= -1) {
            $('.email-box').classList.add('disaccord');
        }
        /* 비밀번호 최종확인 */ 
        if(isFindPassword(userPassword) <= -1) {
            $('.password-box').classList.add('disaccord');
        }
    }
};


