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

import { fetchPost } from "/apis/api.js"

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
const submitLoginForm = async (event) => {
  event?.preventDefault()

  const signinBody = {
    email: email.value,
    password: password.value,
  }

  try {
    const response = await fetchPost("/api/sign-in", signinBody)
    const { data } = response
    if (data) {
      window.localStorage.setItem("accessToken", data.accessToken)
      window.alert("로그인에 성공하셨습니다!")
      window.location.href = "/folder.html"
    }
  } catch {
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
