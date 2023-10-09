//에러 메세지 삭제 함수
function msgDelete(...msg) {
  for (const arg of msg) {
    const errorMsg = document.querySelector(arg);
    if (errorMsg) errorMsg.remove();
  }
}

//에러 메세지 생성 함수
function msgCreate(spanName, divName, inputName, msg) {
  spanName.innerText = msg;
  divName.append(spanName);
  inputName.style.border = '1px solid red';
}

export { msgDelete, msgCreate };
