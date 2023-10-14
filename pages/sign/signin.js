import { emailCheck, domain } from './modules/constant.js'
import { error_occur, error_disappear } from './modules/functions.js'
import { messages } from './modules/message.js'
import { email_input, email_input_check, 
  password_input, password_input_check, 
  formtag, eye_mark_in_password } from './modules/tags.js'



// 이메일 부분 //
// 과제에서 요구된 조건을 만족시키고, 올바른 이메일 형식이 입력되었을 때 focusout하면 원래대로 돌아감
function email_error () {  
  if (!email_input.value) {
    error_occur(email_input, email_input_check, messages.email_empty_error)
  } else if (!emailCheck(email_input.value)) {
    error_occur(email_input, email_input_check, messages.email_type_error)
  } else {
    error_disappear(email_input, email_input_check)
  }
}

function email_error2() {

  if (!email_input.value || !emailCheck(email_input.value)) { 
    const message = !email_input.value ? messages.email_empty_error : messages.email_type_error

    error_occur(email_input, email_input_check, message)    
  } else {
    error_disappear(email_input,email_input_check)
  }
}

email_input.addEventListener("focusout", email_error)


// 패스워드 부분 //
// 과제에서 요구된 조건을 만족시키고, 올바른 비밀번호 형식이 입력되었을 때 focusout하면 원래대로 돌아감
function password_error () {
  if (!password_input.value) {
    error_occur(password_input, password_input_check, messages.password_empty_error)

  } else {
    error_disappear(password_input, password_input_check)
  }
}

password_input.addEventListener("focusout", password_error)


// 로그인 시도 //
function loginTry(e) {
  e.preventDefault()
  if (email_input.value && emailCheck(email_input.value)) {
    fetch(`${domain}/api/sign-in`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        email: email_input.value,
        password: password_input.value,
      })
    })
    .then((response) => response.status)
    .then((statusCode) => {
      if (statusCode === 200) {
        window.location.href = "/pages/folder/folder.html"
        return
      } 
      if (statusCode === 400) {
        error_occur(email_input, email_input_check, messages.email_check_error)
        error_occur(password_input, password_input_check, messages.password_check_error)
        return
      }
    })
    .catch((error) => console.log('로그인 시도 중 에러 발생!', error))
  } else {
    error_occur(email_input, email_input_check, messages.email_check_error)
    error_occur(password_input, password_input_check, messages.password_check_error)
  }
}

formtag.addEventListener("submit", loginTry)
window.addEventListener("keypress", (e) => e.code === 'Enter' && loginTry)


// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
function password_toggle(e) {
  const PasswordType = e.target.parentElement.parentElement.children[1].type === "password"
  password_input.type =  (PasswordType ? "text" : "password")
  eye_mark_in_password.src = (PasswordType ? "/assets/images/eye_on_mark.svg" : "/assets/images/eye_off_mark.svg" )
}

eye_mark_in_password.addEventListener('click', password_toggle)

