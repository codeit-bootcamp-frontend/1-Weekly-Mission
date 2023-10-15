import {REG_EXP} from './constant.js';
import { API_URL } from './config/apiurl.js';

/* 요소 하나 선택 함수  */
function $(selector) {
    return document.querySelector(selector);
}

/* 요소 여러개 선택 함수 */
function $all(selector) {
    return document.querySelectorAll(selector);
}


/* 입력값 테스트 아이디&비번 */
const inputAccount = {
    userEmail: "",
    userPassword: "",
    userPasswordCh:""
};


/* 이메일 중복확인 & 로그인 이메일 일치 확인  */
async function isFindEmail(userEmail) {
    const userEmailData = {
        email : userEmail
    };
    try {
        const response = await fetch(`${API_URL}check-email` ,{
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(userEmailData)
        });
        if(response.ok){
            return false;
        } else {
            return true;
        }
        
    } catch (error) {
        console.error(error)
    }
    
}

/* 페이지 위치 확인(회원가입 페이지일 때 true) */
function isLocation() {
    return location.pathname.includes('signup');
}



/* 이메일 에러 메세지 */
async function emailErrorMessage(email, emailBox) {
    if(!email.trim()) {
        emailBox.classList.add('empty');
    } else if(!REG_EXP.CHECK_EMAIL.test(email)) {
        emailBox.classList.add('wrong');
    } else if(isLocation() && await isFindEmail(email)) {
        emailBox.classList.add('already');
    } 

    inputAccount.userEmail = emailBox.classList.length <= 2 ? email : "" ;
}


/* 비밀번호 에러 메세지 */
function passwordErrorMessage(password, passwordBox) {
    if(!password.trim()) {
        passwordBox.classList.add('empty');
    } else if(isLocation() && !REG_EXP.CHECK_PASSWORD.test(password)) {
        passwordBox.classList.add('terms');
    } 
    inputAccount.userPassword = passwordBox.classList.length <=2 ? password : "";
}

/* 비밀번호 재확인 에러 메세지 */
function passwordCheckErrorMessage(passwordCheck, passwordCheckBox) {
    if(!passwordCheck.trim()) {
        passwordCheckBox.classList.add('empty');
    }else if(inputAccount.userPassword !== passwordCheck) {
        passwordCheckBox.classList.add('check');
    }

    inputAccount.userPasswordCh  = passwordCheckBox.classList.length <= 2 ? passwordCheck : "";
}

/* focusout & input에 입력될 시 실행*/
function hendleEvent(event) {
    const {id, value} = event.target; /* input의 id값,value 값 분해 */
  
    if(id === 'email') {
        $('.email-box').classList.remove('disaccord', 'empty', 'wrong', 'already'); 
        /* 아이디 입력확인 */
        emailErrorMessage(value, $('.email-box'));
    
    } else if(id === 'password') {
        $('.password-box').classList.remove('empty', 'disaccord','terms'); 
        /* 비밀번호 입력확인 */
        passwordErrorMessage(value, $('.password-box'));
        
    } else if (id === 'password-check') {
        $('.password-check-box').classList.remove('empty', 'check');
        /* 비밀번호 재입력확인 */
        passwordCheckErrorMessage(value, $('.password-check-box'))
    }
}



export {
    $, 
    $all,
    isLocation,
    inputAccount, 
    hendleEvent,
    isFindEmail,
    passwordErrorMessage,
    passwordCheckErrorMessage,
};