import {$, inputAccount} from '../utils.js';
import { API_URL } from '../config/apiurl.js';

if(window.localStorage.getItem("user")) {
    location.href= './folder.html'; 
}

/* 회원가입 조건 */
function isCheckSignUp(userEmail, userPassword, userPasswordCh) {
    return userEmail !== "" && userPassword !== "" && userPasswordCh !== "" && userPassword === userPasswordCh;
}
/* 회원가입 시 비밀번호에 문제 있을 경우 */
function isCheckSignUpPassword(userPassword, userPasswordCh) {
    return userPassword === "" || userPassword !== userPasswordCh;
}


/* 회원가입 확인 */
export async function handleSignUpSubmit(event){
    const {userEmail, userPassword, userPasswordCh} = inputAccount;

    const userData = {
        email: userEmail,
        password: userPassword
    };

    event.preventDefault();
    try {
        const response = await fetch(`${API_URL}sign-up`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
    
        })
        if(response.ok && isCheckSignUp(userEmail, userPassword, userPasswordCh)) {
            const result = await response.json();
            const {accessToken} = result.data;
            window.localStorage.setItem("user", accessToken) /* 로컬스토리지 저장 */

            alert('회원가입 완료되었습니다.');
            location.href= './folder.html'; 
        } else {
            if(userEmail === "") {
                $('.email-box').classList.add('disaccord');
            }
            if(isCheckSignUpPassword(userPassword, userPasswordCh)) {
                $('.password-box').classList.add('disaccord');
            }
        }
    } catch(error) {
        console.error(error);
    }
    
    
}


