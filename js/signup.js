const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirm")
const pElementEmailError = document.createElement("p")
const pElementPasswordError = document.createElement("p")
const pElementPasswordConfirmError = document.createElement("p")

const [emailInnerInput, passwordInnerInput, passwordConfirmInnerInput] = document.getElementsByClassName("inner-input")
const loginForm = document.getElementById("login-form")

const [passwordEye, passwordConfirmEye] = document.getElementsByClassName("password-eye")


// 이메일 형식 체크 함수
const checkEmailForm = email => {
    const REGEXP_EMAIL_TEXT = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    return REGEXP_EMAIL_TEXT.test(email)
}

const checkPasswordForm = password => {
    const REGEXP_PASSWORD_TEXT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return REGEXP_PASSWORD_TEXT.test(password)
}


// 에러 메시지 삭제 함수
const clearErrorMessage = (createdTag) => {
    if (createdTag === email.parentElement.nextElementSibling){
        emailInnerInput.classList.remove("inner-input-error")
    } else if (createdTag === password.parentElement.nextElementSibling){
        passwordInnerInput.classList.remove("inner-input-error")
        passwordConfirmInnerInput.classList.remove("inner-input-error")
    } else if (createdTag === passwordConfirm.parentElement.nextElementSibling){
        passwordConfirmInnerInput.classList.remove("inner-input-error")
    }
    createdTag.remove()
}


// 에러 메시지 추가 함수
const addErrorMessage = (createdTag, errorText) => {
    createdTag.classList.add("inner-input-error-message")
    createdTag.textContent = errorText
    if (createdTag === pElementEmailError){
        email.parentNode.parentNode.append(createdTag)
        emailInnerInput.classList.add("inner-input-error")
    } else if (createdTag === pElementPasswordError){
        password.parentNode.parentNode.append(createdTag)
        passwordInnerInput.classList.add("inner-input-error")
    } else if (createdTag === pElementPasswordConfirmError){
        passwordConfirm.parentNode.parentNode.append(createdTag)
        passwordConfirmInnerInput.classList.add("inner-input-error")
    }
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
    }
}


// 비밀번호 확인
const setPasswordErrorMessage = e => {
    e.preventDefault()
    if (!password.value){
        addErrorMessage(pElementPasswordError, "비밀번호를 입력해주세요.")
    } else if (!checkPasswordForm(password.value)){
        addErrorMessage(pElementPasswordError, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
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
    }
}


// Form 전송 이벤트 함수
const submitLoginForm = e => {
    e.preventDefault()

    // 문제가 있는지 확인
    if (email.value && password.value && checkEmailForm(email.value) && checkPasswordForm(password.value) && password.value === passwordConfirm.value){
        location.href = "/pages/folder.html"
    } else {
        addErrorMessage(pElementEmailError, "이메일을 확인해주세요.")
        addErrorMessage(pElementPasswordError, "비밀번호를 확인해주세요.")
    }
}


// 비밀번호 눈 이미지 Toggle
const changeEyeImg = e => {
    e.preventDefault()
    if (e.target.src.includes("/images/eye-on.png")){
        e.target.src = "/images/eye-off.png"
        e.target.parentNode.parentNode.firstElementChild.setAttribute("type", "password")
    } else {
        e.target.src = "/images/eye-on.png"
        e.target.parentNode.parentNode.firstElementChild.setAttribute("type", "text")
    }
}

email.addEventListener("focusin", () => clearErrorMessage(pElementEmailError))
password.addEventListener("focusin", () => clearErrorMessage(pElementPasswordError))
email.addEventListener("focusout", setEmailErrorMessage)
password.addEventListener("focusout", setPasswordErrorMessage)
loginForm.addEventListener("submit", submitLoginForm)
email.addEventListener("invalid", e => e.preventDefault())

passwordConfirm.addEventListener("focusin", () => clearErrorMessage(pElementPasswordConfirmError))
passwordConfirm.addEventListener("focusout", setPasswordConfirmErrorMessage)



// 공통
passwordEye.addEventListener("click", changeEyeImg)
passwordConfirmEye.addEventListener("click", changeEyeImg)