const emailInput = document.querySelector('#email-form');
const emailSpan = document.createElement('span');
const passwordInput = document.querySelector('#password-form');
const passwordSpan = document.createElement('span');
const eyeButton = document.querySelector('.eye-image');
const loginButton = document.querySelector('.login-button')



/*--이메일 형식확인하는 함수--*/
function isvalidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/*--이메일 input에 정확하지 않은 값을 넣고 focusout한 경우--*/
function emailInputAdd (e) {
  if (e.target.value.length === 0) {
    emailSpan.textContent = "이메일을 입력해주세요.";
  } else if (!isvalidEmail(e.target.value)) {
    emailSpan.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailSpan.textContent = '';
  }

  if (emailSpan.textContent) {
    emailInput.className = 'inputEvent';
    emailSpan.classList.add('inputSpan');
  }

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
    e.target.className ='inputEvent';
    passwordSpan.classList.add('inputSpan');
  }

  e.target.parentElement.append(passwordSpan);
}


/*--비밀번호 input에 focusin한 경우 초기화시켜주기--*/
function passwordInputDelete(e) {
  if ((e.target.parentElement.lastElementChild) === passwordSpan) {
    passwordSpan.classList.remove('inputSpan');
    e.target.parentElement.lastElementChild.remove();
  }
}


/*--eye-button 클릭으로 비밀번호가 보이면서 눈뜬 아이콘이되고, 비밀번호가 숨겨지면서 눈감은 아이콘이뜸 --*/
function eyeButtonClick() {
  if (passwordInput.type === 'password'){
    passwordInput.setAttribute('type', 'text');
    eyeButton.setAttribute('src', "../images/eye-on.svg")
  } else {
    passwordInput.setAttribute('type', 'password');
    eyeButton.setAttribute('src', "../images/eye-off.svg")
  }
}

/*-- /folder로 제출하기--*/
const account = {
  email: 'test@codeit.com',
  password: 'codeit101'
} 

function login(e){
  if ((emailInput.value === account.email) && (passwordInput.value === account.password)){
    e.target.setAttribute('href', '/folder')
  }
  e.preventDefault();
}
///띄어쓰기 하면 안되는지 확인(-)



emailInput.addEventListener('focusout', emailInputAdd);
emailInput.addEventListener('focusin', emailInputDelete);
passwordInput.addEventListener('focusout', passwordInputAdd);
passwordInput.addEventListener('focusin', passwordInputDelete);
eyeButton.addEventListener('click', eyeButtonClick);
loginButton.addEventListener('submit', login);