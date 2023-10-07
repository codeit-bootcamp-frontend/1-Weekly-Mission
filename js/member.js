const email = document.getElementById("email")
const password = document.getElementById("password")
const loginForm = document.getElementById("login-form")
const pElementEmailError = document.createElement("p")
const pElementPasswordError = document.createElement("p")
const pElementPasswordConfirmError = document.createElement("p")
const passwordConfirm = document.getElementById("password-confirm")
const [emailInnerInput, passwordInnerInput, passwordConfirmInnerInput] =
  document.getElementsByClassName("inner-input")

// 에러 메시지 삭제 함수
const clearErrorMessage = (createdTag) => {
  if (createdTag === email.parentElement.nextElementSibling) {
    emailInnerInput.classList.remove("inner-input-error")
  } else if (createdTag === password.parentElement.nextElementSibling) {
    passwordInnerInput.classList.remove("inner-input-error")
    passwordConfirmInnerInput?.classList.remove("inner-input-error")
  } else if (createdTag === passwordConfirm?.parentElement.nextElementSibling) {
    passwordConfirmInnerInput?.classList.remove("inner-input-error")
  }
  createdTag.remove()
}

// 에러 메시지 추가 함수
const addErrorMessage = (createdTag, errorText) => {
  createdTag.classList.add("inner-input-error-message")
  createdTag.textContent = errorText

  if (createdTag === pElementEmailError) {
    email.parentNode.parentNode.append(createdTag)
    emailInnerInput.classList.add("inner-input-error")
  } else if (createdTag === pElementPasswordError) {
    password.parentNode.parentNode.append(createdTag)
    passwordInnerInput.classList.add("inner-input-error")
  } else if (createdTag === pElementPasswordConfirmError) {
    passwordConfirm?.parentNode.parentNode.append(createdTag)
    passwordConfirmInnerInput?.classList.add("inner-input-error")
  }
}

// 이메일 형식 체크 함수
let checkEmailForm = (email) => {
  const REGEXP_EMAIL_TEXT =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  return REGEXP_EMAIL_TEXT.test(email)
}

// 비밀번호 눈 이미지 Toggle
const changeEyeImg = (e) => {
  e.preventDefault()
  if (e.target.src.includes("/images/eye-on.png")) {
    e.target.src = "/images/eye-off.png"
    e.target.parentNode.parentNode.firstElementChild.setAttribute(
      "type",
      "password"
    )
  } else {
    e.target.src = "/images/eye-on.png"
    e.target.parentNode.parentNode.firstElementChild.setAttribute(
      "type",
      "text"
    )
  }
}

export { checkEmailForm, changeEyeImg, clearErrorMessage, addErrorMessage } // export functions
export {
  email,
  password,
  passwordConfirm,
  loginForm,
  pElementEmailError,
  pElementPasswordError,
  pElementPasswordConfirmError,
} // export variables
