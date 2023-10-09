/**
 * 눈 아이콘과 input 태그의 type을 바꿔주는 함수
 * @param {*} target 눈 아이콘이 포함된 input 태그
 * @param {*} eyeIcon 눈 아이콘
 * @param {*} eye_on 현재 눈 아이콘의 상태를 나타내는 flag 변수
 */
function toggleEye(target, eyeIcon, eye_on){
    if(!eye_on){ 
        //off -> on
        eyeIcon.setAttribute('src', '/assets/images/eye-on.svg');
        target.setAttribute('type', '');
        target.setAttribute('placeholder', 'password');
        return 1;
    }
    else{
        //on -> off
        eyeIcon.setAttribute('src', '/assets/images/eye-off.svg');
        target.setAttribute('type', 'password');
        target.setAttribute('placeholder', '●●●●●●●●');
        return 0;
    }
}

export {toggleEye};