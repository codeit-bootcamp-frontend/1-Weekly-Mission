import { emailCheck, passwordCheck, domain} from './modules/constant.js'
import { error_occur, error_disappear, signupTryShowError } from './modules/functions.js'
import { messages } from './modules/message.js'
import { email_input, email_input_check, password_input, password_input_check, password_repeat_input, password_repeat_input_check, formtag, eye_mark_in_password, eye_mark_in_password_repeat } from './modules/tags.js'




// 이메일 부분 - 이메일 입력값이 비었거나, 형식에 맞지 않을때 에러메시지 출력 //
function email_error() {
  if (!email_input.value || !emailCheck(email_input.value)) {     
    const message = !email_input.value ? messages.email_empty_error : messages.email_type_error
    error_occur(email_input, email_input_check, message)    
  } else {
    error_disappear(email_input,email_input_check)
  }
}

// 입력한 이메일이 중복인지 아닌지 POST를 보내 중복일 시 에러 메세지 출력
async function isDuplicatedEmail () {
  try {
    const response = await fetch(`${domain}/api/check-email`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({
        email: email_input.value,
      })
    })

    const statusCode = response.status

    if (statusCode === 409) {
      error_occur(email_input, email_input_check, messages.email_duplicate_error)
      return true
    } 
    if (statusCode === 200) {
      error_disappear(email_input, email_input_check)
      return false
    }
  } catch (error) {
    console.log('이메일 중복 여부 검사중 에러 발생!', error)
  }
}

email_input.addEventListener("focusout", email_error)
email_input.addEventListener("focusout", isDuplicatedEmail )





// 패스워드 부분 //
function password_error () {
  if (!password_input.value || !passwordCheck(password_input.value)) {
    const message = !password_input.value ? messages.password_empty_error : messages.password_type_error
    error_occur(password_input, password_input_check, message)    
  } else {
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

// 회원가입을 위한 모든 양식을 갖췄는지 확인
async function signupReady () {
  return emailCheck(email_input.value) && passwordCheck(password_input.value) && 
  password_input.value === password_repeat_input.value &&  await isDuplicatedEmail()===false
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
          email: email_input.value,
          password: password_input.value
        })
      }) 
      
      const statusCode = response.status
      

      if (statusCode === 200) {
        window.location.href = '/pages/folder/folder.html'
        return
      }          
    } else {
      signupTryShowError()
    }
  } catch (error) {
    console.log("회원가입 시도중 에러 발생", error)
  }
}

formtag.addEventListener("submit", singupTry)
formtag.addEventListener("keypress", (e) => e.code === 'Enter' && singupTry)




// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
function password_toggle(e) {
  const PasswordType = e.target.parentElement.parentElement.children[1].type === "password"
  password_input.type =  PasswordType ? "text" : "password"
  password_repeat_input.type = PasswordType ? "text" : "password"
  eye_mark_in_password.src = PasswordType ? "/assets/images/eye_on_mark.svg" : "/assets/images/eye_off_mark.svg";
  eye_mark_in_password_repeat.src = PasswordType ? "/assets/images/eye_on_mark.svg" : "/assets/images/eye_off_mark.svg";
}

eye_mark_in_password.addEventListener('click', password_toggle)
eye_mark_in_password_repeat.addEventListener('click', password_toggle)





