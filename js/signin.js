const loginForm = document.getElementById("login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const inputs = document.getElementsByClassName("inner-input")

const passwordEye = document.getElementsByClassName("password-eye")[0]
let passwordEyeToggle = false

const createEmailError = document.createElement("p")
const createPasswordError = document.createElement("p")


const validateEmailForm = email => {
    const REGEXP_TEXT = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")
    return REGEXP_TEXT.test(email)
}

const clearErrorMessage = (createdTag) => {
    if (createdTag === email.parentElement.nextElementSibling){
        inputs[0].classList.remove("inner-input-error")
        createdTag.remove()
    } else if (createdTag === password.parentElement.nextElementSibling){
        inputs[1].classList.remove("inner-input-error")
        createdTag.remove()
    }
}


const addErrorMessage = (createdTag, errorText) => {
    createdTag.classList.add("inner-input-error-message")
    createdTag.textContent = errorText
    if (createdTag === createEmailError){
        email.parentNode.parentNode.append(createdTag)
        inputs[0].classList.add("inner-input-error")
    } else if (createdTag === createPasswordError){
        password.parentNode.parentNode.append(createdTag)
        inputs[1].classList.add("inner-input-error")
    }
}

// email 에러 메세지
const emailValidation = e => {
    e.preventDefault()
    if (!email.value){
        addErrorMessage(createEmailError, "이메일을 입력해주세요.")
    } else if (!validateEmailForm(email.value)){
        addErrorMessage(createEmailError, "올바른 이메일 주소가 아닙니다.")
    }
}

// 비밀번호 이벤트 함수
const passwordValidation = e => {
    e.preventDefault()
    if (!password.value){
        addErrorMessage(createPasswordError, "비밀번호를 입력해주세요.")
    }
}

// Form 전송 이벤트 함수
const loginSubmitFunc = e => {
    e.preventDefault()
    const [TEST_EMAIL, TEST_PWD] = ["test@codeit.com", "codeit101"]

    if (email.value === TEST_EMAIL && password.value === TEST_PWD){
        location.href = "../pages/folder.html"
    } else {
        addErrorMessage(createEmailError, "이메일을 확인해주세요.")
        addErrorMessage(createPasswordError, "비밀번호를 확인해주세요.")
    }
}


// 비밀번호 눈 표시 Toggle
const eyeOnOffToggleFunc = e => {
    e.preventDefault()
    if (passwordEyeToggle){
        passwordEye.setAttribute("src", "../images/eye-off.png")
        password.setAttribute("type", "password")
    } else {
        passwordEye.setAttribute("src", "../images/eye-on.png")
        password.setAttribute("type", "text")
    }
    passwordEyeToggle = !passwordEyeToggle
}


// return 으로 접근
email.addEventListener("focusin", () => clearErrorMessage(createEmailError))
password.addEventListener("focusin", () => clearErrorMessage(createPasswordError))

// 이름으로 접근
email.addEventListener("focusout", emailValidation)
password.addEventListener("focusout", passwordValidation)
loginForm.addEventListener("submit", loginSubmitFunc)
email.addEventListener("invalid", e => e.preventDefault())
passwordEye.addEventListener("click", eyeOnOffToggleFunc)