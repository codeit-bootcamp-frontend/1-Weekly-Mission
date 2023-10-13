/**
 * 입력된 에러 메시지와 에러 스타일을 추가해주는 함수
 * @param {*} inputBox 에러 메시지를 추가할 input 태그
 * @param {*} msg 에러 메시지
 */
function addErrorMsg(inputBox, msg){
    const errorMsg = inputBox.closest(".input_box").lastElementChild;
    inputBox.classList.add('error_box');
    errorMsg.textContent = msg;
}
/**
 * 기존에 있는 에러 메시지과 에러 스타일을 삭제하는 함수
 */
function removeErrorMsg(event){
    const errorMsg = event.target.closest(".input_box").lastElementChild;
    event.target.classList.remove('error_box');
    errorMsg.textContent = "";
}
/**
 * 에러 메시지가 있는 input 태그가 있는지 확인하는 함수
 * @param {*} errorList 'error_msg' class인 div 태그들의 list
 */
function checkErrorMsg(errorList){
    return errorList.some(err => err.textContent !== "");
}

export {addErrorMsg, removeErrorMsg, checkErrorMsg};