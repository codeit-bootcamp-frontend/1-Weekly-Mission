import createTextInput from './components/textInput.js';
import submitForm  from './feature/submitForm.js';
import signService  from './api/signService.js';
import toggleEye from './components/toggleEye.js'

const isSignUpPage = document.title === 'Linkbrary-회원가입'

const emailInput = createTextInput({
  $root: document.getElementById('email-box'),
  empthyErrorMessage: '이메일을 입력해주세요.',
  invalidErrorMessage: '올바른 이메일 주소가 아닙니다.',
  validate(value) {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
    return emailRegex.test(value)
  },
  signService: signService(),
  isSignUpPage,
})

const passwordInput = createTextInput({
  $root: document.getElementById('password-box'),
  empthyErrorMessage: '비밀번호를 입력해주세요.',
  invalidErrorMessage: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  validate(value){
    const passwordRegex = /[a-z0-9]{8,}/i
    return passwordRegex.test(value)
  },
  isSignUpPage,
})


const toggleEyeButton = toggleEye({
  $inputBoxes: document.querySelectorAll('.input-box')
})

const signInForm = submitForm({
  $root: document.getElementById('auth-form'),
  inputs: [emailInput, passwordInput],
  signService: signService(),
  errorMessage: {
    email: '이메일을 확인해주세요.',
    password: '비밀번호를 확인해주세요.'
  },
  isSignUpPage
})

signInForm.init()
emailInput.init()
passwordInput.init()
toggleEyeButton.init()

