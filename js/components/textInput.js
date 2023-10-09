import { isSignUpPassword, isDuplication } from './signUp.js' 

export default function textInput({$root, empthyErrorMessage, invalidErrorMessage, validate, isSignUpPage }) {
  const $input = $root.querySelector('.text-input')
  const $inputBox = $root.querySelector('.input-box')
  const $errorMessage = $root.querySelector('.error-message')

  function init(){
    $input.addEventListener('focusout',(e) => {
      const inputValue = e.target.value
      isValid = validate(inputValue)
      toggleErorr(isValid)
      $errorMessage.textContent = insertErrorMessage(isValid, inputValue)
      console.log(isValid)
    });
  };

  function toggleErorr(isValid) {
    $inputBox.classList.toggle('error-input-box', !isValid && isSignUpPassword(isSignUpPage, $input))
  };

  function insertErrorMessage(isValid, inputValue){
    if(inputValue === '') {
      return empthyErrorMessage
    };
    if(isDuplication(isSignUpPage, inputValue)) {
      return '이미 사용 중인 이메일입니다.'
    }
    if(!isValid && isSignUpPassword(isSignUpPage, $input)) {
      return invalidErrorMessage
    };
    return '';
  };


  function isValid() {
    return validate($input.value)
  };

  function getData() {
    return {
      id: $input.getAttribute('name'),
      value: $input.value,
    };
  };

  function getErrorMessage() {
    return {
      name: $input.getAttribute('name'),
      $errorMessage,
    }
  }

  return {
    init,
    isValid,
    getData,
    getErrorMessage,
  };
};
