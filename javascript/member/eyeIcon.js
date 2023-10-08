import {$, $all} from './utils.js';

const eyeIcon = $('.fa-solid'); /* 눈 아이콘 */
const passwordInput = $('#password'); /* 패스워드 */

/* 눈 아이콘 & 패스워드 속성 변경 */
function replaceIcon() {
    if(eyeIcon.classList.contains('fa-eye-slash')){
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
        passwordInput.setAttribute('type','text');
        return;
    } 
    eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    passwordInput.setAttribute('type','password');
}

eyeIcon.addEventListener('click', replaceIcon);