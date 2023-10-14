import { emailCheck, passwordCheck, domain} from './modules/constant.js'
import { error_occur, error_disappear } from './modules/functions.js'
import { messages } from './modules/message.js'
import { email_input, email_input_check, password_input, password_input_check, password_repeat_input, password_repeat_input_check, formtag, eye_mark_in_password, eye_mark_in_password_repeat } from './modules/tags.js'


// 입력한 이메일이 중복인지 아닌지 확인 함수
async function isDuplicatedEmail () {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
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



// 이메일 부분 //
function email_error () {
  
  if (!email_input.value) {
    error_occur(email_input, email_input_check, messages.email_empty_error)
  } else if (!emailCheck(email_input.value)) {
    error_occur(email_input, email_input_check, messages.email_type_error)
  } else {
    error_disappear(email_input, email_input_check)
  }
}

email_input.addEventListener("focusout", isDuplicatedEmail )
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


async function signupReady () {
  return emailCheck(email_input.value) && passwordCheck(password_input.value) && 
  password_input.value === password_repeat_input.value &&  await isDuplicatedEmail()===false
}

async function singupTry (e) {  
  try {
    e.preventDefault()  
    
    if (await signupReady()) {   

      const response= await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
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
      }     
    } else {
      error_occur(email_input, email_input_check, messages.email_check_error)
      error_occur(password_input, password_input_check, messages.password_check_error)
      error_occur(password_repeat_input, password_repeat_input_check, messages.password_check_error)
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

