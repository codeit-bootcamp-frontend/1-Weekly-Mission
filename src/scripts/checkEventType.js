/**
 * event type이 submit이면 직접 type에 맞는 input 태그를 찾아주는 함수
 * @param {*} type 'email' / 'pw' / 'pwCheck' 값이 들어온다.
 */
function checkSubmitEvent(event, type){
    const [inputEmail, inputPw, inputPwCheck] = document.querySelectorAll('input');
    if(event.type == 'submit'){
        if(type === 'email') return inputEmail;
        else if(type === 'pw') return inputPw;
        else return inputPwCheck;
    }
    else return event.target
}

export {checkSubmitEvent};