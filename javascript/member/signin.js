import {
    $, 
    inputs,
    form,
    testAccount, 
    inputAccount, 
    hendleFocusOut,
    isFindEmail,
} from '../utils.js';

/* 로그인 계정 일치 확인 */
function isFindAccount(email, password) {
    return testAccount.findIndex(account => {
        return email === account.email && password === account.password;
    })
}
/* 로그인 비밀번호 일치 확인 */
function isFindPassword(password) {
    return testAccount.findIndex(account => {
        return password === account.password;
    })
}

/* 로그인 확인 */
function handleSubmit(event) {
    const emailBox = $('.email-box'); /* 이메일 메세지*/
    const passwordBox = $('.password-box'); /* 비밀번호 메세지 */

    const {email, password} = inputAccount;

    event.preventDefault();
    if(isFindAccount(email, password) > -1) {
        alert('환영합니다.');
        form.submit();
        location.href= './folder.html'; 
    } else {
        /* 이메일 최종확인 */
        if(isFindEmail(email) <= -1) {
            emailBox.classList.add('disaccord');
        }
        /* 비밀번호 최종확인 */ 
        if(isFindPassword(password) <= -1) {
            passwordBox.classList.add('disaccord');
        }
    }
};


for (let input of inputs) {
    input.addEventListener('focusout', hendleFocusOut);
}

form.addEventListener('submit',handleSubmit);