const eye = document.querySelector('.fa-solid'); /* 눈 아이콘 */
const passwordType = document.querySelector('#password'); /* 패스워드속성 */

/* 눈 아이콘 & 패스워드 속성 변경 */
function replaceIcon() {
    if(eye.classList.contains('fa-eye-slash')){
        eye.classList.replace('fa-eye-slash', 'fa-eye');
        passwordType.setAttribute('type','text');
    } else {
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        passwordType.setAttribute('type','password');
    }
}

eye.addEventListener('click', replaceIcon);