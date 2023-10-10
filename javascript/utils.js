import {REG_EXP} from './constant.js';

const inputs = $all('input'); /* 이메일, 비밀번호 input */
const form = $('form') /* form */


/* 요소 하나 선택 함수  */
function $(selector) {
    return document.querySelector(selector);
}

/* 요소 여러개 선택 함수 */
function $all(selector) {
    return document.querySelectorAll(selector);
}


/* 테스트 아이디&비번 */
const testAccount = [
    {
        email: "test@codeit.com",
        password: "codeit101"
    },
];

/* 입력값 테스트 아이디&비번 */
const inputAccount = {
    userEmail: "",
    userPassword: "",
    userPasswordCh:""
};

/* 각 input란 조건 확인 */
const isCheck = {
    checkEmail: false,
    checkPassword: false,
    reCheckPassword: false
}

/* 이메일 중복확인 & 로그인 이메일 일치 확인  */
function isFindEmail(email) {
    return testAccount.findIndex(account => {
        return email === account.email;
    })
}

/* 이메일 에러 메세지 */
function emailErrorMessage(email, emailBox) {
    if(!email.value.trim()) {
        emailBox.classList.add('empty');
        
    } else if(!REG_EXP.CHECK_EMAIL.test(email.value)) {
        emailBox.classList.add('wrong');

    } else if(emailBox.classList.contains('email-box-signup') 
    && isFindEmail(email.value) > -1) {
        emailBox.classList.add('already');
    }  else {
        isCheck.checkEmail = true;
    }
    
}

/* 비밀번호 에러 메세지 */
function passwordErrorMessage(password, passwordBox) {
    if(!password.value.trim()) {
        passwordBox.classList.add('empty');
    } else if(passwordBox.classList.contains('password-box-signup') 
    && !REG_EXP.CHECK_PASSWORD.test(password.value)) {
        passwordBox.classList.add('terms');
    } else {
        isCheck.checkPassword = true;
    }  
}

/* 비밀번호 재확인 에러 메세지 */
function passwordCheckErrorMessage(passwordCheck, passwordCheckBox) {
    if(!passwordCheck.value) {
        passwordCheckBox.classList.add('empty');
    }else if(passwordCheckBox.classList.contains('password-box-signup') 
    && inputAccount.userPassword !== passwordCheck.value) {
        passwordCheckBox.classList.add('check');
    } else {
        isCheck.reCheckPassword = true;
    }
}

/* focusout 될 시 입력값 저장 */
function hendleFocusOut(event) {
    const {target} = event; /* 이메일과 비밀번호 분해 */

    if(target.name === 'email') {
        $('.email-box').classList.remove('disaccord', 'empty', 'wrong', 'already'); 
        /* 아이디 입력확인 */
        emailErrorMessage(target, $('.email-box'));
        inputAccount.userEmail = target.value;
    } else if(target.name === 'password') {
        $('.password-box').classList.remove('empty', 'disaccord','terms'); 
        /* 비밀번호 입력확인 */
        passwordErrorMessage(target, $('.password-box'));
        inputAccount.userPassword = target.value;
    } else if (target.name === 'passwordCh') {
        $('.password-check-box').classList.remove('empty', 'check');
        /* 비밀번호 확인란 입력확인 */
        passwordCheckErrorMessage(target, $('.password-check-box'))
        
    }
}



export {
    $, 
    $all,
    inputs,
    form,
    testAccount, 
    inputAccount, 
    hendleFocusOut,
    isCheck,
    isFindEmail,
    passwordCheckErrorMessage,
};