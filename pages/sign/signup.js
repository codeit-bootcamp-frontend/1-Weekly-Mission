import { emailCheck, passwordCheck } from './modules/regex.js'
import { error_occur, error_disappear } from './modules/functions.js'
import { messages } from './modules/message.js'
import { email_input, email_input_check, password_input, password_input_check, password_repeat_input, password_repeat_input_check, formtag, eye_mark_in_password, eye_mark_in_password_repeat } from './modules/tags.js'


// 이메일 부분 //
function email_error () {
  
  if (!email_input.value) {
    error_occur(email_input, email_input_check, messages.email_empty_error)
  } else if (!emailCheck(email_input.value)) {
    error_occur(email_input, email_input_check, messages.email_type_error)
  } else if (email_input.value === "test@codeit.com") {
    error_occur(email_input, email_input_check, messages.email_duplicate_error)
  } else {
    error_disappear(email_input, email_input_check)
  }
}

email_input.addEventListener("focusout", email_error)


// 패스워드 부분 //
function password_error () {
  if (!password_input.value) {
    error_occur(password_input, password_input_check, messages.password_empty_error)
  } else if (!passwordCheck(password_input.value)) {
    error_occur(password_input, password_input_check, messages.password_type_error)
  }  else {
    error_disappear(password_input, password_input_check)
  }
}

password_input.addEventListener("focusout", password_error)


// 패스워드 확인 부분 //
function password_repeat_error () {
  if (password_input.value != password_repeat_input.value) {
    error_occur(password_repeat_input, password_repeat_input_check, messages.password_repeat_error)
  } else if (!password_input.value) {
    error_occur(password_repeat_input, password_repeat_input_check, messages.password_repeat_empty_error)
  } else {
    error_disappear(password_repeat_input, password_repeat_input_check)
  }
}

password_repeat_input.addEventListener('focusout',password_repeat_error)


// 회원가입 시도 //
function signup_submit_check (e) {
    if (email_input.value != "test@codeit.com" && emailCheck(email_input.value) && passwordCheck(password_input.value) && password_input.value === password_repeat_input.value ) {
    formtag.action = "/pages/folder/folder.html"
  } else {   
    e.preventDefault() 
    error_occur(email_input, email_input_check, messages.email_check_error)
    error_occur(password_input, password_input_check, messages.password_check_error)
    error_occur(password_repeat_input, password_repeat_input_check, messages.password_check_error)
  }
}

formtag.addEventListener("submit", signup_submit_check)
formtag.addEventListener("keypress", (e) => e.code === 'Enter' && signup_submit_check())


// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
function password_toggle(e) {
    if (e.target.parentElement.parentElement.children[1].type === "password") {
      password_input.type = "text"
      password_repeat_input.type ="text"
      eye_mark_in_password.src = "/assets/images/eye_on_mark.svg" 
      eye_mark_in_password_repeat.src = "/assets/images/eye_on_mark.svg"
    } else {    
      password_input.type = "password"
      password_repeat_input.type ="password"
      eye_mark_in_password.src = "/assets/images/eye_off_mark.svg" 
      eye_mark_in_password_repeat.src = "/assets/images/eye_off_mark.svg"    
    }
}

eye_mark_in_password.addEventListener('click', password_toggle)
eye_mark_in_password_repeat.addEventListener('click', password_toggle)

