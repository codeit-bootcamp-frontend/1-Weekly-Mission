//에러 메세지 발생 시 사용할 함수//
function error_occur (input, input_check, message) {
  input.classList.add("error_box")
  input_check.classList.add("check_message")
  input_check.innerHTML = message
}

//에러 메세지 소멸 시 사용할 함수(조건 만족 시)//
function error_disappear (input, input_check) {
  input.classList.remove("error_box")
  input_check.classList.remove("check_message")
  input_check.innerHTML = ""
}













//export
export { error_occur, error_disappear }