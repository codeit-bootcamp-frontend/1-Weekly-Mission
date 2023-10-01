const emailInput = document.querySelector('#email-form');
const emailSpan = document.createElement('span');
const passwordInput = document.querySelector('#password-form');
const passwordSpan = document.createElement('span');
const eyeButtonImage = document.querySelector('.eye-image');
const loginButton = document.querySelector('.login-button')



/*--이메일 형식확인하는 함수--*/
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/*--이메일 input에 정확하지 않은 값을 넣고 focusout한 경우--*/
function emailInputAdd (e) {
  if (e.target.value.length === 0) {
    emailSpan.textContent = "이메일을 입력해주세요.";
  } else if (!isValidEmail(e.target.value) && (e.target.value.length >= 1)) {
    emailSpan.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailSpan.textContent = '';
  }

  if (emailSpan.textContent) {
    emailInput.classList.add('InputEvent');
  }

  emailSpan.classList.add('inputSpan');
  emailInput.after(emailSpan);
}

/*--이메일 input에 focusin한 경우 초기화시켜주기--*/
function emailInputDelete (e) {
  if ((e.target.nextElementSibling) === emailSpan) {
    emailSpan.classList.remove('inputSpan');
    e.target.nextElementSibling.remove();
  }
}


/*--비밀번호 input에 정확하지 않은 값을 넣고 foucusout한 경우--*/
function passwordInputAdd (e) {
  if (e.target.value.length === 0) {
    passwordSpan.textContent = "비밀번호를 입력해주세요."; 
  } else {
    passwordSpan.textContent = '';
  }

  if (passwordSpan.textContent) {
    e.target.classList.add('InputEvent');
  }

  passwordSpan.classList.add('inputSpan');
  e.target.parentElement.append(passwordSpan);
}


/*--비밀번호 input에 focusin한 경우 초기화시켜주기--*/
function passwordInputDelete (e) {
  if ((e.target.parentElement.lastElementChild) === passwordSpan) {
    passwordSpan.classList.remove('inputSpan');
    e.target.parentElement.lastElementChild.remove();
  }
}


/*--eye-button 클릭으로 비밀번호가 보이면서 눈뜬 아이콘이되고, 비밀번호가 숨겨지면서 눈감은 아이콘이뜸 --*/
function eyeButtonClick() {
  if (passwordInput.type === 'password'){
    passwordInput.setAttribute('type', 'text');
    eyeButtonImage.setAttribute('src', "../images/eye-on.svg")
  } else {
    passwordInput.setAttribute('type', 'password');
    eyeButtonImage.setAttribute('src', "../images/eye-off.svg")
  }
}

/*-- /folder로 제출하기--*/
function login(){
  if ((emailInput.value === 'test@codeit.com') && (passwordInput.value === 'codeit101')){
    e.target.setAttribute('href', '/folder')
  }
}




emailInput.addEventListener('focusout', emailInputAdd);
emailInput.addEventListener('focusin', emailInputDelete);
passwordInput.addEventListener('focusout', passwordInputAdd);
passwordInput.addEventListener('focusin', passwordInputDelete);
eyeButtonImage.addEventListener('click', eyeButtonClick);
loginButton.addEventListener('submit', login);