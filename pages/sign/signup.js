import { emailCheck, passwordCheck, domain} from './modules/constant.js'
import { errorOccur, errorDisappear, signupTryShowError, moveToFolderPage, postAPI } from './modules/functions.js'
import { messages } from './modules/message.js'
import { emailInput, emailInputCheck, passwordInput, passwordInputCheck, passwordRepeatInput, passwordRepeatInputCheck, formTag, eyeMarkInPassword, eyeMarkInPasswordRepeat } from './modules/tags.js'
import { saveAccessToken, getAccessToken } from './modules/localStorage.js'


// 로컬스토리지에 'accessToken'이 있으면 폴더 페이지로 넘어감
if (getAccessToken(`accessToken`)) {
  moveToFolderPage()
}


// 이메일 부분 - 이메일 입력값이 비었거나, 형식에 맞지 않을때 에러메시지 출력 //
function emailError() {
  if (!emailInput.value || !emailCheck(emailInput.value)) {     
    const message = !emailInput.value ? messages.email_empty_error : messages.email_type_error
    errorOccur(emailInput, emailInputCheck, message)    
  } else {
    errorDisappear(emailInput,emailInputCheck)
  }
}

// 입력한 이메일이 중복인지 아닌지 POST를 보내 중복일 시 에러 메세지 출력
async function isDuplicatedEmail () {
  try {
    const response = await postAPI (`${domain}/api/check-email`, emailInput.value, passwordInput.value)

    const statusCode = response.status

    if (statusCode === 409) {
      errorOccur(emailInput, emailInputCheck, messages.email_duplicate_error)
      return true
    } 
    if (statusCode === 200) {
      errorDisappear(emailInput, emailInputCheck)
      return false
    }
  } catch (error) {
    console.log('이메일 중복 여부 검사중 에러 발생!', error)
  }
}

emailInput.addEventListener("focusout", emailError)
emailInput.addEventListener("focusout", isDuplicatedEmail )





// 패스워드 부분 //
function passwordError () {
  if (!passwordInput.value || !passwordCheck(passwordInput.value)) {
    const message = !passwordInput.value ? messages.password_empty_error : messages.password_type_error
    errorOccur(passwordInput, passwordInputCheck, message)    
  } else {
    errorDisappear(passwordInput, passwordInputCheck)
  }
}

passwordInput.addEventListener("focusout", passwordError)


// 패스워드 확인 부분 //
function password_repeat_error () {
  if (passwordInput.value != passwordRepeatInput.value) {
    errorOccur(passwordRepeatInput, passwordRepeatInputCheck, messages.password_repeat_invalid_error)
  } else if (!passwordInput.value) {
    errorOccur(passwordRepeatInput, passwordRepeatInputCheck, messages.password_repeat_empty_error)
  } else {
    errorDisappear(passwordRepeatInput, passwordRepeatInputCheck)
  }
}

passwordRepeatInput.addEventListener('focusout',password_repeat_error)




// 회원가입 시도 //

// 회원가입을 위한 모든 양식을 갖췄는지 확인
async function signupReady () {
  return emailCheck(emailInput.value) && passwordCheck(passwordInput.value) && 
  passwordInput.value === passwordRepeatInput.value &&  await isDuplicatedEmail()===false
}

// 회원가입 시도 POST 전송 //
async function singupTry (e) {  
  try {
    e.preventDefault()     
    
    if (await signupReady()) {   
      const response= await fetch(`${domain}/api/sign-up`, {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value
        })
      }) 

      const responseData = response.json()
      const statusCode = response.status
      

      if (statusCode === 200) {
        moveToFolderPage()
        saveAccessToken(responseData)                      //accessToken 로컬 스토리지 저장
        console.log()
        return
      }          
    } else {
      signupTryShowError()
    }
  } catch (error) {
    console.log("회원가입 시도중 에러 발생", error)
  }
}

formTag.addEventListener("submit", singupTry)
formTag.addEventListener("keypress", (e) => e.code === 'Enter' && singupTry)




// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
function password_toggle(e) {
  const PasswordType = e.target.parentElement.parentElement.children[1].type === "password"
  passwordInput.type =  PasswordType ? "text" : "password"
  passwordRepeatInput.type = PasswordType ? "text" : "password"
  eyeMarkInPassword.src = PasswordType ? "/assets/images/eye_on_mark.svg" : "/assets/images/eye_off_mark.svg";
  eyeMarkInPasswordRepeat.src = PasswordType ? "/assets/images/eye_on_mark.svg" : "/assets/images/eye_off_mark.svg";
}

eyeMarkInPassword.addEventListener('click', password_toggle)
eyeMarkInPasswordRepeat.addEventListener('click', password_toggle)





