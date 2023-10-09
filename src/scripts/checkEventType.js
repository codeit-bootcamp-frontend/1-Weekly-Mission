/**
 * event type이 submit이면 직접 type에 맞는 input 태그를 찾아주는 함수
 * @param {*} type 'email' / 'pw' / 'pwCheck' 값이 들어온다.
 */
function checkSubmitEvent(event, type){
    if(event.type == 'submit'){
        if(type === 'email') return event.target.children[0].children[0];
        else if(type === 'pw') return event.target.children[1].children[0].children[0];
        else return event.target.children[2].children[0].children[0];
    }
    else return event.target
}

export {checkSubmitEvent};