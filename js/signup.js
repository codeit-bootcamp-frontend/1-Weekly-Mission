import { email, password, passwordConfirm, loginForm, pElementEmailError, pElementPasswordError, pElementPasswordConfirmError } from "./member.js"
import { changeEyeImg, checkEmailForm, clearErrorMessage, addErrorMessage } from "./member.js"

const [passwordEye, passwordConfirmEye] = document.getElementsByClassName("password-eye")


// 비밀번호 형식 체크 함수
const checkPasswordForm = password => {
    const REGEXP_PASSWORD_TEXT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return REGEXP_PASSWORD_TEXT.test(password)
}


// 이메일 확인
const setEmailErrorMessage = e => {
    e.preventDefault()
    if (!email.value){
        addErrorMessage(pElementEmailError, "이메일을 입력해주세요.")
    } else if (!checkEmailForm(email.value)){
        addErrorMessage(pElementEmailError, "올바른 이메일 주소가 아닙니다.")
    } else if (email.value === "test@codeit.com"){
        addErrorMessage(pElementEmailError, "이미 사용중인 이메일입니다.")
    } else {
        clearErrorMessage(pElementEmailError)
    }
}


// 비밀번호 확인
const setPasswordErrorMessage = e => {
    e.preventDefault()
    if (!password.value){
        addErrorMessage(pElementPasswordError, "비밀번호를 입력해주세요.")
    } else if (!checkPasswordForm(password.value)){
        addErrorMessage(pElementPasswordError, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
    } else {
        clearErrorMessage(pElementPasswordError)
    }

    
    if (password.value === passwordConfirm.value){
        clearErrorMessage(pElementPasswordConfirmError)
    }
}

// 비밀번호 재확인
const setPasswordConfirmErrorMessage = e => {
    e.preventDefault()
    if (password.value !== passwordConfirm.value){
        addErrorMessage(pElementPasswordConfirmError, "비밀번호가 일치하지 않아요.")
    } else if (password.value === passwordConfirm.value){
        clearErrorMessage(pElementPasswordConfirmError)
    }
}


// const pressEnter = e => {
//     if (e.keyCode === 13) {
//         submitLoginForm()
//     }
// }


// Form 전송 이벤트 함수
const submitLoginForm = event => {
    event.preventDefault()
    
    if (email.value 
        && password.value 
        && checkEmailForm(email.value) 
        && checkPasswordForm(password.value) 
        && password.value === passwordConfirm.value)
    {
        try {
            location.href = "/pages/folder.html"
        } catch (error) {
            throw new Error("Can't reload to folder page")
        }
        
    } else {
        addErrorMessage(pElementEmailError, "이메일을 확인해주세요.")
        addErrorMessage(pElementPasswordError, "비밀번호를 확인해주세요.")
    }
}




email.addEventListener("focusout", setEmailErrorMessage)
password.addEventListener("focusout", setPasswordErrorMessage)

loginForm.addEventListener("submit", submitLoginForm)
// loginForm.addEventListener("keydown", pressEnter)

email.addEventListener("invalid", e => e.preventDefault())
passwordConfirm.addEventListener("focusout", setPasswordConfirmErrorMessage)



// 공통
passwordEye.addEventListener("click", changeEyeImg)
passwordConfirmEye.addEventListener("click", changeEyeImg)