import {$, inputAccount} from '../utils.js';
import { API_URL } from '../config/apiurl.js';

if(window.localStorage.getItem("user")) {
    location.href= './folder.html'; 
}

/* 로그인 확인 */
export async function handleSigninSubmit(event) {
    const {userEmail, userPassword} = inputAccount;

    const userData = {
        email: userEmail,
        password: userPassword
    }

    event.preventDefault();
    try {
        const response = await fetch(`${API_URL}sign-in`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
    
        })
        if(response.ok) {
            const result = await response.json();
            const {accessToken} = result.data;
            window.localStorage.setItem("user", accessToken) /* 로컬스토리지 저장 */

            alert('환영합니다.');
            location.href= './folder.html'; 
        } else {
            $('.email-box').classList.add('disaccord');
            $('.password-box').classList.add('disaccord');
        }
    } catch (error) {
        console.error(error)
    }
};


