const form = document.querySelector('.form')
const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')

const VERIFIED_EMAIL = 'test@codeit.com'
const VERIFIED_PASSWORD = 'codeit101'

const WARNING_INPUT_STYLE = 'warningInput'
const WARNING_CONTENT_STYLE = 'warningContent'

form.addEventListener('submit', function (e) {
  e.preventDefault()
  loginCheck()
})

// 경고 스타일
function warningStyle(input, message) {
  const eachParent = input.parentElement
  const warningContent = eachParent.querySelector('span')
  const warningInput = eachParent.querySelector('input')

  warningInput.classList.add(WARNING_INPUT_STYLE)
  warningContent.className = WARNING_CONTENT_STYLE
  warningContent.innerText = message
}

// 경고 스타일 삭제
function noneWarningStyle(input) {
  const eachParent = input.parentElement
  const warningContent = eachParent.querySelector('span')
  const warningInput = eachParent.querySelector('input')

  warningInput.classList.remove(WARNING_INPUT_STYLE)
  warningContent.className = WARNING_CONTENT_STYLE
  warningContent.innerText = ''
}

// 이메일
function emailCheck() {
  const standard = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (standard.test(emailInput.value)) {
    noneWarningStyle(emailInput)
  } else {
    warningStyle(emailInput, '올바른 이메일 주소가 아닙니다.')
  }

  // 값이 없을 경우
  if (emailInput.value.length === 0) {
    warningStyle(emailInput, '이메일을 입력해주세요.')
  }
}

// 비밀번호
function passwordCheck() {
  if (passwordInput.value.length === 0) {
    warningStyle(passwordInput, '비밀번호를 입력해주세요.')
  }
}

// 정해진 이메일과 패스워드
function loginCheck() {
  if (
    emailInput.value === VERIFIED_EMAIL &&
    passwordInput.value === VERIFIED_PASSWORD
  ) {
    location.href = '/folder.html'
  } else {
    warningStyle(emailInput, '이메일을 확인해주세요.')
    warningStyle(passwordInput, '비밀번호를 확인해주세요.')
  }
}

emailInput.addEventListener('focusout', emailCheck)
passwordInput.addEventListener('focusout', passwordCheck)
