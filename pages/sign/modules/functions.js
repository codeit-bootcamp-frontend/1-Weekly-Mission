import { messages } from './message.js'
import { email_input, email_input_check, password_input, password_input_check, password_repeat_input, password_repeat_input_check, formtag, eye_mark_in_password, eye_mark_in_password_repeat } from './tags.js'

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

//잘못된 로그인 시도 시 출력되는 에러메세지 
function loginTryShowError() {
  error_occur(email_input, email_input_check, messages.email_check_error)
  error_occur(password_input, password_input_check, messages.password_check_error)
}

//잘못된 회원가입 시도 시 출력되는 에러메세지
function signupTryShowError() {
  error_occur(email_input, email_input_check, messages.email_check_error)
  error_occur(password_input, password_input_check, messages.password_check_error)
  error_occur(password_repeat_input, password_repeat_input_check, messages.password_check_error)
}


//export
export { error_occur, error_disappear, loginTryShowError, signupTryShowError }