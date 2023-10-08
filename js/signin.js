import {
  email,
  password,
  loginForm,
  pElementEmailError,
  pElementPasswordError,
} from "./member.js" // import variables

import {
  changeEyeImg,
  checkEmailForm,
  clearErrorMessage,
  addErrorMessage,
} from "./member.js" // import functions

const passwordEye = document.getElementsByClassName("password-eye")[0]

// 이메일 확인
const setEmailErrorMessage = (e) => {
  e.preventDefault()
  if (!email.value) {
    addErrorMessage(pElementEmailError, "이메일을 입력해주세요.")
  } else if (!checkEmailForm(email.value)) {
    addErrorMessage(pElementEmailError, "올바른 이메일 주소가 아닙니다.")
  } else {
    clearErrorMessage(pElementEmailError)
  }
}

// 비밀번호 확인
const setPasswordErrorMessage = (e) => {
  e.preventDefault()
  if (!password.value) {
    addErrorMessage(pElementPasswordError, "비밀번호를 입력해주세요.")
  } else {
    clearErrorMessage(pElementPasswordError)
  }
}

const pressEnter = (e) => {
  if (e.key === "Enter") {
    submitLoginForm(e)
  }
}

// Form 전송 이벤트 함수
const submitLoginForm = (event) => {
  event?.preventDefault()
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    try {
      location.href = "/pages/folder.html"
    } catch (err) {
      throw new Error("Can't redirect to folder page")
    }
  } else {
    addErrorMessage(pElementEmailError, "이메일을 확인해주세요.")
    addErrorMessage(pElementPasswordError, "비밀번호를 확인해주세요.")
  }
}

password.addEventListener("focusout", setPasswordErrorMessage)
email.addEventListener("focusout", setEmailErrorMessage)

loginForm.addEventListener("submit", submitLoginForm)
loginForm.addEventListener("keydown", pressEnter)

email.addEventListener("invalid", (e) => e.preventDefault())
passwordEye.addEventListener("click", changeEyeImg)
