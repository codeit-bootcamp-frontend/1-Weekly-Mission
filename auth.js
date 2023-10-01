(function (){
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const checkPassword = document.querySelector('#check-password')
  const eventArr = [email, password, checkPassword]
  const eyeButtons = document.querySelectorAll('.eye-button')
  const form = document.querySelector('.auth-form')
  let emailValidation = false
  let pwdValidation = false
  let checkpwdValidation = false
  let test = {
    email: 'test@codeit.com',
    password: 'codeit101'
  }

  function handleInputFocusOut(e) {
    isValid(e.target)
    addMessage(e.target)
  }

  function addDiv(target, message) {
    const div = document.createElement('div')
    div.classList.add('error-message')
    div.textContent = `${message}`
    target.parentElement.classList.add('error-input-box')
    target.parentElement.after(div)
  }

  function addMessage(target) {
    if(target.id === 'email') {
      if(target.value === '') {
        addDiv(target, '이메일을 입력해주세요.')
      }else if(!emailValidation){
        addDiv(target, '올바른 이메일 주소가 아닙니다.')
      }else if(test.email == target.value && checkPassword != null) {
        addDiv(target, '이미 사용 중인 이메일입니다.')
        emailValidation = false
      }
    }else if(target.id === 'password') {
      if(target.value === '') {
        addDiv(target, '비밀번호를 입력해주세요.')
      }else if(!pwdValidation ){
        addDiv(target, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.')
      }
    }else if(target.id === 'check-password') {
      if(!checkpwdValidation) {
        addDiv(target, '비밀번호가 일치하지 않아요.')
      }
    }
  }

  function isValid(target) {
    const emailRegex = /[a-zA-Z0-9]+\@[a-z0-9]+\.+[a-z]/g
    const passwordRegex = /[a-zA-Z+0-9]{8}/g
    if(target.id == 'email') {
      emailValidation = emailRegex.test(target.value)
    }else if(target.id == 'password') {
      pwdValidation = passwordRegex.test(target.value)
      if(checkPassword != null){
        checkpwdValidation = password.value == checkPassword.value
      }
    }else if(target.id == 'check-password') {
      checkpwdValidation = password.value == checkPassword.value
    }
  }

  function removeDiv(e) {
    console.log('삭제')
    let errorMessage = e.target.parentElement.nextElementSibling
    if (errorMessage.className == 'error-message'){
      errorMessage.previousElementSibling.classList.remove('error-input-box')
      errorMessage.remove()
    }
  }

  // 비밀번호를 비밀번호 확인의 내용으로 변경하는 경우
  function handleCheckpwddError () {
    if(pwdValidation && checkpwdValidation) {
      const errorMessages = document.querySelectorAll('.error-message')
      const checkpwdError = errorMessages[errorMessages.length - 1]
      checkpwdError.remove()
      checkPassword.parentElement.classList.remove('error-input-box')
    }
  }

  function handleClickEye(e) {
    let target
    if(e.target.className == 'eye-button'){
      target = e.target.firstChild
    }else {
      target = e.target
    }
    const input = target.parentElement.previousElementSibling
    target.classList.toggle('on')
    if(target.className == 'on') {
      target.src = ('/assets/imgs/eye-on.svg')
      input.setAttribute('type', 'text')
    }else{
      target.src = ('/assets/imgs/eye-off.svg')
      input.setAttribute('type', 'password')
    }
  }

  function handleSubmit(e) {
    if(authIsValid()){
      location.href = '/pages/folder.html'
      e.preventDefault()
    }else {
      alert('이메일과 비밀번호를 확인하세요')
      e.preventDefault()
    }
  }
  
  function authIsValid (e){
    const validation = emailValidation && pwdValidation && checkpwdValidation
    if(checkPassword == null){
      if(email.value == test.email && password.value == test.password){
        return true
      }else {
        return false
      }
    }else {
      if(validation) {
        return true
      }
    }
    return false
  }

  for(let ele of eventArr){
    if(ele !== null){
      ele.addEventListener('focusout', handleInputFocusOut)
      ele.addEventListener('focusin',  removeDiv)
    }
  }

  for(let button of eyeButtons){
    button.addEventListener('click', handleClickEye)
  }

  password.addEventListener('focusout', handleCheckpwddError)
  form.addEventListener('submit', handleSubmit)
})()