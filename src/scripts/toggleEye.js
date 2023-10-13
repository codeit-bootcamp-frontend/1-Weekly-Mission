/**
 * 눈 아이콘과 input 태그의 type을 바꿔주는 함수
 * @param {*} target 눈 아이콘이 포함된 input 태그
 * @param {*} eyeIcon 눈 아이콘
 * @param {*} isVisible 현재 비밀번호 문자열이 visible 상태인지 나타내는 flag
 */
function toggleEye(target, eyeIcon, isVisible){
    if(isVisible){
        //on -> off
        eyeIcon.setAttribute('src', '/assets/images/eye-off.svg');
        target.setAttribute('type', 'password');
        target.setAttribute('placeholder', '●●●●●●●●');
        return false;
    }
    else{
        //off -> on
        eyeIcon.setAttribute('src', '/assets/images/eye-on.svg');
        target.setAttribute('type', '');
        target.setAttribute('placeholder', 'password');
        return true;
    }
}

export {toggleEye};