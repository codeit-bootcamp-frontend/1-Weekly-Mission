import {
  ERROR_EMAIL_EMPTY,
  ERROR_EMAIL_VALIDATION,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_NOTCORRECT,
  ERROR_PASSWORD_VALIDATION,
} from '../constants/authMessage.js'
import { ERROR_CONTENT_STYLE, ERROR_INPUT_STYLE } from '../constants/common.js'
import EmailDoubleCheck from '../libs/apis/email.js'
import Signin from '../libs/apis/signin.js'
import Signup from '../libs/apis/signup.js'
import { existError } from './error.js'

const form = document.querySelector('.form')
const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')
const passwordInputTwo = document.querySelector('.passwordInputTwo')

const emailInputSignin = document.querySelector('.emailInputSignin')
const emailInputSignup = document.querySelector('.emailInputSignup')
const passwordInputSignup = document.querySelector('.passwordInputSignup')

// 경고 스타일
function setErrorStyle(input, message) {
  const eachParent = input.parentElement
  const errorContent = eachParent.querySelector('span')
  const errorInput = eachParent.querySelector('input')

  errorInput.classList.add(ERROR_INPUT_STYLE)
  errorContent.className = ERROR_CONTENT_STYLE
  errorContent.innerText = message
}

// 경고 스타일 삭제
function deleteErrorStyle(input) {
  const eachParent = input.parentElement
  const errorContent = eachParent.querySelector('span')
  const errorInput = eachParent.querySelector('input')

  errorInput.classList.remove(ERROR_INPUT_STYLE)
  errorContent.className = ''
  errorContent.innerText = ''
}

// 이메일 유효성 검사
function emailValidation() {
  const standard = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  standard.test(emailInput.value)
    ? deleteErrorStyle(emailInput)
    : setErrorStyle(emailInput, ERROR_EMAIL_VALIDATION)
}

// 비밀번호 유효성 검사
function passwordValidation() {
  const standard = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  standard.test(passwordInputSignup.value)
    ? deleteErrorStyle(passwordInput)
    : setErrorStyle(passwordInput, ERROR_PASSWORD_VALIDATION)
}

// 이메일 값이 없을 경우
function emailCheck() {
  if (emailInput.value.length === 0) {
    setErrorStyle(emailInput, ERROR_EMAIL_EMPTY)
  }
}

// 비밀번호 값이 없을 경우
function passwordCheck() {
  passwordInput.value.length === 0
    ? setErrorStyle(passwordInput, ERROR_PASSWORD_EMPTY)
    : deleteErrorStyle(passwordInput)
}

// 비밀번호와 비밀번호 확인 값이 같은지
function passwordCorrect() {
  passwordInputSignup.value === passwordInputTwo.value
    ? deleteErrorStyle(passwordInputTwo)
    : setErrorStyle(passwordInputTwo, ERROR_PASSWORD_NOTCORRECT)
}

// 존재하는 이메일
function existEmail() {
  // 5주차
  // emailInputSignup.value === VERIFIED_EMAIL ? setErrorStyle(emailInputSignup, ERROR_EMAIL_EXIST)
  //   : deleteErrorStyle(emailInputSignup)

  EmailDoubleCheck(emailInputSignup.value)
}

// 정해진 이메일과 비밀번호
function loginCheck() {
  // 5주차
  // emailInput.value === VERIFIED_EMAIL &&
  // passwordInput.value === VERIFIED_PASSWORD ? (deleteErrorStyle(emailInput),
  //     deleteErrorStyle(passwordInput),
  //     (location.href = '/folder.html'))
  //   : (setErrorStyle(emailInput, ERROR_EMAIL_CHECK),
  //     setErrorStyle(passwordInput, ERROR_PASSWORD_CHECK))

  let auth = {
    email: emailInput.value,
    password: passwordInput.value,
  }

  Signin(auth.email, auth.password)
}

// 회원가입 버튼 클릭 시 잘못된 부분 확인
function signupSubmit() {
  let auth = {
    email: emailInputSignup.value,
    password: passwordInputSignup.value,
  }

  existEmail()
  emailValidation()
  emailCheck()
  passwordCheck()
  passwordValidation()

  existError(ERROR_CONTENT_STYLE) ? '' : Signup(auth.email, auth.password)
}

// 이벤트 리스너
form.addEventListener('submit', function (e) {
  e.preventDefault()
  emailInputSignin && loginCheck()
  passwordInputSignup && passwordCorrect()
  emailInputSignup && signupSubmit()
})

emailInput.addEventListener('focusout', emailValidation)
emailInput.addEventListener('focusout', emailCheck)

passwordInput.addEventListener('focusout', passwordCheck)
passwordInputSignup &&
  passwordInputSignup.addEventListener('focusout', passwordValidation)
