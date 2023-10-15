import signService from '../api/signService';

export default function validate() {
  let isValid = false  
  let errorMessage= '' 
  function emailValidate(value ,isSignUpPage) {
    if(value === '') {
      errorMessage = '이메일을 입력해주세요.'
    }
    return {isValid, errorMessage}
  }

  function passwordValidate(value) {

  }

  function checkPasswordValidate(pwdValue, checkpwdValue) {

  }

  return {
    emailValidate,
    passwordValidate,
    checkPasswordValidate
  }
}

