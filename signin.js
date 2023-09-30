const loginButton = document.getElementsByClassName("password-hide-btn")[0]
const loginForm = document.getElementById("login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const inputs = document.getElementsByClassName("inner-input")
const [TESTEMAIL, TESTPWD] = ["test@codeit.com", "codeit101"]
const EXPTEXT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let noEmail, emailErrorNoText, noPwd

const emailError = (bool, verify, check) => {
    console.log(check)
    if (bool && verify === undefined){
        noEmail = document.createElement("p")
        noEmail.classList.add("inner-input-error-message")
        noEmail.textContent = "이메일을 입력해주세요"
        email.parentNode.parentNode.append(noEmail)
        inputs[0].classList.add("inner-input-error")
    } else if (!bool && verify !== undefined && !check) {
        if (!noEmail){
            noEmail = document.createElement("p")
            noEmail.classList.add("inner-input-error-message")
            noEmail.textContent = "이메일을 입력해주세요"
            email.parentNode.parentNode.append(noEmail)
            inputs[0].classList.add("inner-input-error")
        }
        noEmail.textContent = "올바른 이메일 주소가 아닙니다."

        
    } else if (!bool && verify !== undefined && check) {
        noEmail.remove()
        noEmail = undefined
        inputs[0].classList.remove("inner-input-error")
    }
}

email.addEventListener("focusout", e => {
    e.preventDefault()
    if (e.target.value === "") emailError(true, noEmail, true)
    else if(e.target.value !== "") {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
        if (EXPTEXT.test(e.target.value) === false) emailError(false, noEmail, false)
        else emailError(false, noEmail, true)
    }
})