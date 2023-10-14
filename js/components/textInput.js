import { isSignUpPassword } from './signUp.js' 

export default function createTextInput({$root, empthyErrorMessage, invalidErrorMessage, validate, signService,isSignUpPage }) {
  const $input = $root.querySelector('.text-input')
  const $inputBox = $root.querySelector('.input-box')
  const $errorMessage = $root.querySelector('.error-message')

  function init(){
    $input.addEventListener('focusout',async(e) => {
      const inputValue = e.target.value
      let duplication = false
      if(isSignUpPage){
        const res  = await signService.login({email: inputValue},'check-email')
        duplication = !res.ok
      }
      isValid = validate(inputValue) && !duplication
      toggleErorr(isValid)
      $errorMessage.textContent = insertErrorMessage(isValid, inputValue, duplication)
    });
  };

  function toggleErorr(isValid) {
    $inputBox.classList.toggle('error-input-box', !isValid && isSignUpPassword(isSignUpPage, $input))
  };

  function insertErrorMessage(isValid, inputValue, duplication){
    if(inputValue === '') {
      return empthyErrorMessage
    };
    if(duplication) {
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

  function getInputElement() {
    return $input
  }

  return {
    init,
    isValid,
    getData,
    getErrorMessage,
    getInputElement,
  };
};
