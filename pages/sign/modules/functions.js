import { messages } from './message.js'
import { emailInput, emailInputCheck, passwordInput, passwordInputCheck, passwordRepeatInput, passwordRepeatInputCheck } from './tags.js'

//에러 메세지 발생 시 사용할 함수//
function errorOccur (input, input_check, message) {
  input.classList.add("error_box")
  input_check.classList.add("check_message")
  input_check.innerHTML = message
}

//에러 메세지 소멸 시 사용할 함수(조건 만족 시)//
function errorDisappear (input, input_check) {
  input.classList.remove("error_box")
  input_check.classList.remove("check_message")
  input_check.innerHTML = ""
}

//잘못된 로그인 시도 시 출력되는 에러메세지 
function loginTryShowError() {
  errorOccur(emailInput, emailInputCheck, messages.email_check_error)
  errorOccur(passwordInput, passwordInputCheck, messages.password_check_error)
}

//잘못된 회원가입 시도 시 출력되는 에러메세지
function signupTryShowError() {
  errorOccur(emailInput, emailInputCheck, messages.email_check_error)
  errorOccur(passwordInput, passwordInputCheck, messages.password_check_error)
  errorOccur(passwordRepeatInput, passwordRepeatInputCheck, messages.password_check_error)
}

//폴더 페이지로 접근하는 함수
function moveToFolderPage () {
  window.location.href = '/pages/folder/folder.html'
} 

//export
export { errorOccur, errorDisappear, loginTryShowError, signupTryShowError, moveToFolderPage}