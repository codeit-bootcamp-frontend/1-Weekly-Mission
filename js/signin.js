const loginButton = document.getElementsByClassName("password-hide-btn")[0]
const loginForm = document.getElementById("login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const inputs = document.getElementsByClassName("inner-input")
const [TEST_EMAIL, TEST_PWD, EXPTEXT] = ["test@codeit.com", "codeit101", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
let noEmail, noPwd

const passwordEye = document.getElementsByClassName("password-eye")[0]
let passwordEyeToggle = false

const createTagP = document.createElement("p")


// email 에러 메세지
const emailError = (bool, verify, check) => {
    if (bool && verify === undefined){
        noEmail = document.createElement("p")
        noEmail.classList.add("inner-input-error-message")
        noEmail.textContent = "이메일을 입력해주세요."
        email.parentNode.parentNode.append(noEmail)
        inputs[0].classList.add("inner-input-error")
    } else if (!bool && !check) {
        if (!noEmail){
            noEmail = document.createElement("p")
            noEmail.classList.add("inner-input-error-message")
            noEmail.textContent = "이메일을 입력해주세요."
            email.parentNode.parentNode.append(noEmail)
            inputs[0].classList.add("inner-input-error")
        }
        noEmail.textContent = "올바른 이메일 주소가 아닙니다."

        
    } else if (!bool && check) {
        noEmail.remove()
        noEmail = undefined
        inputs[0].classList.remove("inner-input-error")
    } else if (bool && check) {
        noEmail.textContent = "이메일을 입력해주세요."
    }
}

// password 에러 메세지
const pwdError = (bool, verify) => {
    if (bool && verify === undefined){
        noPwd = document.createElement("p")
        noPwd.classList.add("inner-input-error-message")
        noPwd.textContent = "비밀번호를 입력해주세요."
        password.parentNode.parentNode.append(noPwd)
        inputs[1].classList.add("inner-input-error")
    }
    else if (!bool && verify !== undefined){
        noPwd.remove()
        noPwd = undefined
        inputs[1].classList.remove("inner-input-error")
    } else noPwd.textContent = "비밀번호를 입력해주세요."
}

// 이메일 이벤트 함수
email.addEventListener("focusout", e => {
    e.preventDefault()
    if (e.target.value === "") emailError(true, noEmail, true)
    else if(e.target.value !== "") {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
        if (EXPTEXT.test(e.target.value) === false) emailError(false, noEmail, false)
        else emailError(false, noEmail, true)
    }
})


// 비밀번호 이벤트 함수
password.addEventListener("focusout", e => {
    e.preventDefault()
    if (e.target.value === "") pwdError(true, noPwd)
    else pwdError(false, noPwd)
})

loginForm.addEventListener("submit", e => {
    e.preventDefault()

    // Errors
    // Email 부분
    if (email.value === undefined) emailError(true, noEmail, true)
    else if (email.value !== undefined){
        if (EXPTEXT.test(email.value) === false) emailError(false, noEmail, false)
        // else emailError(false, noEmail, true)
    }
    
    // Password 부분
    if (password.value === "") pwdError(true, noPwd)
    // else pwdError(false, noPwd)

    if (email.value === TEST_EMAIL && password.value === TEST_PWD) location.href = "../pages/folder.html"
    else {

        // 로그인 시도
        if (noEmail === undefined){
            noEmail = document.createElement("p")
            noEmail.classList.add("inner-input-error-message")
            email.parentNode.parentNode.append(noEmail)
            inputs[0].classList.add("inner-input-error")
        }
        noEmail.textContent = "이메일을 확인해주세요."

        if (noPwd === undefined){
            noPwd = document.createElement("p")
            noPwd.classList.add("inner-input-error-message")
            password.parentNode.parentNode.append(noPwd)
            inputs[1].classList.add("inner-input-error")
        }
        noPwd.textContent = "비밀번호를 확인해주세요."
    }

})


// 비밀번호 눈 표시 Toggle
const eyeOnOffToggleFunc = e => {
    e.preventDefault()
    if (passwordEyeToggle){
        passwordEye.setAttribute("src", "images/eye-off.png")
        password.setAttribute("type", "password")
    } else {
        passwordEye.setAttribute("src", "images/eye-on.png")
        password.setAttribute("type", "text")
    }
    passwordEyeToggle = !passwordEyeToggle
}


loginButton.addEventListener("click", e => e.preventDefault())
email.addEventListener("invalid", e => e.preventDefault())
passwordEye.addEventListener("click", eyeOnOffToggleFunc)