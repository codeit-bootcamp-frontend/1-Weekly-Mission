import { emailCheck, domain } from './modules/constant.js'
import { errorOccur, errorDisappear, loginTryShowError, moveToFolderPage } from './modules/functions.js'
import { messages } from './modules/message.js'
import { emailInput, emailInputCheck, 
  passwordInput, passwordInputCheck, 
  formTag, eyeMarkInPassword } from './modules/tags.js'
import { saveAccessToken, getAccessToken } from './modules/localStorage.js'


// 로컬스토리지에 'accessToken'이 있으면 폴더 페이지로 넘어감
if (getAccessToken(`accessToken`)) {
  moveToFolderPage()
}


// 이메일 부분 //

function emailError() {
  if (!emailInput.value || !emailCheck(emailInput.value)) { 
    const message = !emailInput.value ? messages.email_empty_error  : messages.email_type_error
    errorOccur(emailInput, emailInputCheck, message)        
  } else {
    errorDisappear(emailInput,emailInputCheck)
  }
}

emailInput.addEventListener("focusout", emailError)


// 패스워드 부분 //
// 과제에서 요구된 조건을 만족시키고, 올바른 비밀번호 형식이 입력되었을 때 focusout하면 원래대로 돌아감
function passwordError () {
  if (!passwordInput.value) {
    errorOccur(passwordInput, passwordInputCheck, messages.password_empty_error)
  } else {
    errorDisappear(passwordInput, passwordInputCheck)
  }
}

passwordInput.addEventListener("focusout", passwordError)


// 로그인 시도 POST 전송//
async function loginTry(e) {

  e.preventDefault()

  if(!emailInput.value && !emailCheck(emailInput.value)) {

    loginTryShowError()

  } else {    
    try{

    const response = await fetch(`${domain}/api/sign-in`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
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

formTag.addEventListener("submit", loginTry)
window.addEventListener("keypress", (e) => e.code === 'Enter' && loginTry)


// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
function passwordToggle(e) {
  const PasswordType = e.target.parentElement.parentElement.children[1].type === "password"
  passwordInput.type =  (PasswordType ? "text" : "password")
  eyeMarkInPassword.src = (PasswordType ? "/assets/images/eye_on_mark.svg" : "/assets/images/eye_off_mark.svg" )
}

eyeMarkInPassword.addEventListener('click', passwordToggle)

