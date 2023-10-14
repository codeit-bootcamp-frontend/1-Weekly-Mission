import {$all} from './utils.js';

export const eyeIcons = $all('.fa-solid'); /* 눈 아이콘 */


/* 눈 아이콘 & 패스워드 속성 변경 */
export function handleReplaceIcon(event) {
    const {target} = event;
   
    if(target.classList.contains('fa-eye-slash')){
        target.classList.replace('fa-eye-slash', 'fa-eye');
        target.previousElementSibling.setAttribute('type','text'); /* 타겟 이전요소 */
        return;
    } 
    
    target.classList.replace('fa-eye', 'fa-eye-slash');
    target.previousElementSibling.setAttribute('type','password');
}

