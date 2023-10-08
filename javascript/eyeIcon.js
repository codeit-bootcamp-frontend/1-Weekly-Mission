import {$, $all} from './utils.js';

const eyeIcons = $all('.fa-solid'); /* 눈 아이콘 */

/* 눈 아이콘 위치 확인 */
function isClassName(className) {
    if(className.classList.contains("fa-solid-passwordCh")) {
        const passwordCheckInput = $('#password-check');
        return passwordCheckInput;
    }
    if(!className.classList.contains("fa-solid-passwordCh")) {
        const passwordInput = $('#password');
        return passwordInput;
    }
    
}

/* 눈 아이콘 & 패스워드 속성 변경 */
function handleReplaceIcon(event) {
    const {target} = event;
    
    if(target.classList.contains('fa-eye-slash')){
        target.classList.replace('fa-eye-slash', 'fa-eye');
        isClassName(target).setAttribute('type','text');
        return;
    } 
    
    target.classList.replace('fa-eye', 'fa-eye-slash');
    isClassName(target).setAttribute('type','password');
}

for (let eyeIcon of eyeIcons) {
    eyeIcon.addEventListener('click', handleReplaceIcon);
}