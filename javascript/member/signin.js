import {$, $all} from './utils.js';

const inputs = $all('input'); /* 이메일, 비밀번호 input */
const form = $('form') /* form */


/* 정규표현식 */
const CHECK_EMAIL = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; /* 이메일 체크*/


/* 테스트 아이디&비번 */
const testAccount = {
    email: "test@codeit.com",
    password: "codeit101"
};

/* 입력값 테스트 아이디&비번 */
const inputAccount = {
    email: "",
    password: ""
};

/* 이메일 에러 메세지 */
function emailErrorMessage(email, emailBox) {
    if(!email.value) {
        emailBox.classList.add('empty');
        return ;
    }
    if(!CHECK_EMAIL.test(email.value)) {
        emailBox.classList.add('wrong');
        return;
    } 
    
}
/* 비밀번호 에러 메세지 */
function passwordErrorMessage(password, passwordBox) {
    if(!password.value) {
        passwordBox.classList.add('empty');
        return;
    } 
    
}

/* focusout 될 시 입력값 저장 */
function hendleFocusOut(event) {
    const emailBox = $('.email-box'); /* 이메일 메세지*/
    const passwordBox = $('.password-box'); /* 비밀번호 메세지 */

    const {target = target.name} = event; /* 이메일과 비밀번호 분해 */

    if(target.name === 'email') {
        emailBox.classList.remove('disaccord', 'empty', 'wrong'); /* 제거 */
        /* 아이디 입력확인 */
        emailErrorMessage(email, emailBox)
        inputAccount.email = email.value;
    } else {
        passwordBox.classList.remove('empty', 'disaccord'); /* 제거 */
        /* 비밀번호 입력확인 */
        passwordErrorMessage(password, passwordBox)
        inputAccount.password = password.value;
    }
}


/* 로그인 확인 */
function handleSubmit(event) {
    const emailBox = $('.email-box'); /* 이메일 메세지*/
    const passwordBox = $('.password-box'); /* 비밀번호 메세지 */
    
    event.preventDefault();
    if(inputAccount.email === testAccount.email && inputAccount.password === testAccount.password) {
        alert('환영합니다.');
        form.submit();
        location.href= './folder.html'; 
        /* form의 action 속성을 사용하면 이메일/비번 쿼리문으로 전달되어서 location.href 사용 */
    } else {
        /* 이메일 최종확인 */
        if(inputAccount.email !== testAccount.email) {
            emailBox.classList.add('disaccord');
        }
        /* 비밀번호 최종확인 */ 
        if(inputAccount.password !== testAccount.password) {
            passwordBox.classList.add('disaccord');
        }
    }
};


for (let input of inputs) {
    input.addEventListener('focusout', hendleFocusOut);
}

form.addEventListener('submit',handleSubmit);