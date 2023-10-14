//에러 메세지 삭제 함수
function deleteErrorMsg(...msg) {
  for (const arg of msg) {
    const errorMsg = document.querySelector(arg);
    if (errorMsg) errorMsg.remove();
  }
}

//에러 메세지 생성 함수
function createErrorMsg(span, spanName, divName, inputName, msg, ...rest) {
  spanName = document.createElement(span);
  for (const el of rest) {
    spanName.classList.add(el);
  }
  spanName.innerText = msg;
  divName.append(spanName);
  inputName.style.border = '1px solid red';
}

export { deleteErrorMsg, createErrorMsg };
