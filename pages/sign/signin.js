import { emailCheck, domain } from './modules/constant.js'
import { error_occur, error_disappear, loginTryShowError, moveToFolderPage } from './modules/functions.js'
import { messages } from './modules/message.js'
import { email_input, email_input_check, 
  password_input, password_input_check, 
  formtag, eye_mark_in_password } from './modules/tags.js'
import { saveAccessToken, getAccessToken } from './modules/localStorage.js'


// 로컬스토리지에 'accessToken'이 있으면 폴더 페이지로 넘어감
if (getAccessToken(`accessToken`)) {
  moveToFolderPage()
}


// 이메일 부분 //

function email_error() {
  if (!email_input.value || !emailCheck(email_input.value)) { 
    const message = !email_input.value ? messages.email_empty_error  : messages.email_type_error
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


// 로그인 시도 POST 전송//
async function loginTry(e) {

  e.preventDefault()

  if(!email_input.value && !emailCheck(email_input.value)) {

    loginTryShowError()

  } else {    
    try{

    const response = await fetch(`${domain}/api/sign-in`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        email: email_input.value,
        password: password_input.value,
      })
    })
    
    const responseData = response.json()
    const statusCode = response.status

    if (statusCode === 200) {
      moveToFolderPage()
      saveAccessToken(responseData)                      //accessToken 로컬 스토리지 저장
      return
    } 
    if (statusCode === 400) {
      loginTryShowError()
      return
    }
    } catch (error) {
      console.log('로그인 시도 중 에러 발생!', error)
    }
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

