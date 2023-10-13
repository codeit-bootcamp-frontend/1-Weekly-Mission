/**
 * 눈 아이콘과 input 태그의 type을 바꿔주는 함수
 * @param {*} target 눈 아이콘이 포함된 input 태그
 * @param {*} eyeIcon 눈 아이콘
 * @param {*} isClosed 현재 눈 아이콘이 close 상태인지 나타내는 flag
 */
function toggleEye(target, eyeIcon, isClosed){
    if(isClosed){
        //off -> on
        eyeIcon.setAttribute('src', '/assets/images/eye-on.svg');
        target.setAttribute('type', '');
        target.setAttribute('placeholder', 'password');
        return false;
    }
    else{
        //on -> off
        eyeIcon.setAttribute('src', '/assets/images/eye-off.svg');
        target.setAttribute('type', 'password');
        target.setAttribute('placeholder', '●●●●●●●●');
        return true;
    }
}

export {toggleEye};