const form = document.querySelector('.form')
const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')

const VERIFIED_EMAIL = 'test@codeit.com'
const VERIFIED_PASSWORD = 'codeit101'

const ERROR_INPUT_STYLE = 'errorInput'
const ERROR_CONTENT_STYLE = 'errorContent'

form.addEventListener('submit', function (e) {
  e.preventDefault()
  loginCheck()
})

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
  errorContent.className = ERROR_CONTENT_STYLE
  errorContent.innerText = ''
}

// 이메일 유효성 검사
function emailValidation() {
  const standard = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  standard.test(emailInput.value)
    ? deleteErrorStyle(emailInput)
    : setErrorStyle(emailInput, '올바른 이메일 주소가 아닙니다.')
}

// 이메일 값이 없을 경우
function emailCheck() {
  if (emailInput.value.length === 0) {
    setErrorStyle(emailInput, '이메일을 입력해주세요.')
  }
}

// 비밀번호 값이 없을 경우
function passwordCheck() {
  passwordInput.value.length === 0
    ? setErrorStyle(passwordInput, '비밀번호를 입력해주세요.')
    : deleteErrorStyle(passwordInput)
}

// 정해진 이메일과 패스워드
function loginCheck() {
  emailInput.value === VERIFIED_EMAIL &&
  passwordInput.value === VERIFIED_PASSWORD
    ? (location.href = '/folder.html')
    : setErrorStyle(emailInput, '이메일을 확인해주세요.')
  setErrorStyle(passwordInput, '비밀번호를 확인해주세요.')
}

emailInput.addEventListener('focusout', emailValidation)
emailInput.addEventListener('focusout', emailCheck)
passwordInput.addEventListener('focusout', passwordCheck)
