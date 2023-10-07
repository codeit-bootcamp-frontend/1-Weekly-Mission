const idInput = $('#id-label');
const passwordInput = $('#password-label');
const loginButton = $('.login-btn');
const eyeImage = $('.eye-off');

const REG_ID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

function $(selector){
  return document.querySelector(selector);
}

// 클래스 추가 함수
function addError(element, className = 'input-error-msg'){
  element.classList.add(className);
}

// 에러 메세지 생성 함수
function displayUserInputError(element, input, message){
  input.after(element);
  element.textContent = message;
  addError(element);
  input.style.borderColor = 'var(--red)';
}

// 옳으면 에러 메세지 제거하는 함수
function clearUserInputError(element, input){
  element.textContent = '';
  input.style.borderColor = 'var(--gray-40)';
}


function handleIdError(event) {
  const idInput = $('#id-label');
  const idErrorMassageElem = document.createElement('span');

  if(!event.target.value){
    displayUserInputError(idErrorMassageElem, idInput, '이메일을 입력해주세요.');
    return;
  }else if(!REG_ID.test(event.target.value) && event.target.value.length > 0){
    displayUserInputError(idErrorMassageElem, idInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }

  clearUserInputError(idInput, idErrorMassageElem);
}

function handlePasswordEmptyError(event) {
  const passwordInput = $('#password-label');
  const pwErrorMassageElem = document.createElement('span');

  if(!event.target.value){
    displayUserInputError(pwErrorMassageElem, passwordInput, '비밀번호를 입력해주세요.');
    return;
  }

  clearUserInputError(passwordInput, pwErrorMassageElem);
}



function handleToggleEmail() {
  const idErrorMassageElem = document.createElement('span');

  if(idInput.value !== "test@codeit.com"){
    displayUserInputError(idErrorMassageElem, idInput, '이메일을 입력해주세요.');
    return;
  }

  clearUserInputError(idInput, idErrorMassageElem);
}

function handleTogglePassword() {
  const pwErrorMassageElem = document.createElement('span');

  if(passwordInput.value !== "codeit101"){
    displayUserInputError(pwErrorMassageElem, passwordInput, '비밀번호를 확인해주세요.');
    return;
  }

  clearUserInputError(passwordInput, pwErrorMassageElem);
}

function loginSuccess(event){
  event.preventDefault();
  alert('로그인 되었습니다.');
  location.href = "../folder.html";
}

function handleSignIn(event){
  if(idInput.value === "test@codeit.com" && passwordInput.value === "codeit101"){
    return loginSuccess();
  }

  //존재하지 않는 이메일일 때
  handleToggleEmail();

  //존재하지 않는 비밀번호일 때
  handleTogglePassword()
}


function handleToggleEye(){
  const passwordInput = $('#password-label');
  const eyeImage = $('.eye-off');

  const passwordType = passwordInput.getAttribute("type") === "password";
  const [inputType, eyeOnOff] = passwordType ? ["text", "eye-on"] : ["password", "eye-off"];

  passwordInput.setAttribute("type", inputType);
  eyeImage.setAttribute("src", `../assets/png/${eyeOnOff}.png`);
}


idInput.addEventListener("focusout", handleIdError);
passwordInput.addEventListener("focusout", handlePasswordEmptyError);
loginButton.addEventListener("click", handleSignIn);
eyeImage.addEventListener("click", handleToggleEye);