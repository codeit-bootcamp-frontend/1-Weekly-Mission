const signinForm = document.querySelector('form');
const emailWrap = document.querySelector('.signin__email__wrap');
const inputEmail = document.querySelector('.input--email');
const pwWrap = document.querySelector('.signin__pw__wrap');
const inputPw = document.querySelector('.input--pw');
const signinBtn = document.querySelector('.signin__btn')


/*-----로그인 유효성 검사-----*/

//이메일 유효성 검사
const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function isEmailValid(email){
  return (email.match(emailRegExp)!=null);
}

function createErrorSpanTag(){
  const spanTag = document.createElement('span');
  spanTag.classList = 'errorMsg';

  return spanTag;
}

function removeElementOrNull(range, element){
  if (range.querySelector(element)){
    let temp = range.querySelector(element);
    temp.remove();
  }
}

function addErrorClassName(element) {
  element.classList.add('input__error');
}

function removeErrorClassName(element) {
  if (element.classList.contains('input__error')){
    element.classList.remove('input__error')};
}


function validateEmailInput(e){
  removeElementOrNull(emailWrap, '.errorMsg');
  removeErrorClassName(inputEmail);

  const spanTag = createErrorSpanTag();
  const email = e.target.value;

  if (email == ''){
    spanTag.textContent = "이메일을 입력해주세요.";
    emailWrap.appendChild(spanTag);
    addErrorClassName(inputEmail);
    return;
  }
  
  if (isEmailValid(email) == false){
    spanTag.textContent = "올바른 이메일 주소가 아닙니다.";
    emailWrap.appendChild(spanTag);
    addErrorClassName(inputEmail);
  }
}

inputEmail.addEventListener('focusout', validateEmailInput);


//비밀번호 유효성 검사
function validatePwInput(e){
  removeElementOrNull(pwWrap, '.errorMsg');
  removeErrorClassName(inputPw);

  const spanTag = createErrorSpanTag();
  const password = e.target.value;

  if (password == ''){
    spanTag.textContent = "비밀번호를 입력해주세요.";
    pwWrap.appendChild(spanTag);
    addErrorClassName(inputPw);
  }
}

inputPw.addEventListener('focusout', validatePwInput);


//로그인 성공
const TEST_USER = {
  email: "test@codeit.com",
  pw: "codeit101"
}

function submitForm(e){
  e.preventDefault()

  const email = inputEmail.value;
  const password = inputPw.value;

  if (email === TEST_USER.email && password === TEST_USER.pw){
    e.submit();
    return;
  }

  removeElementOrNull(emailWrap, '.errorMsg');
  removeElementOrNull(pwWrap, '.errorMsg');
  removeErrorClassName(inputEmail);
  removeErrorClassName(inputPw);

  const emailSpanTag = createErrorSpanTag();
  emailSpanTag.textContent = "이메일을 확인해주세요.";
  emailWrap.appendChild(emailSpanTag);
  addErrorClassName(inputEmail);

  const pwSpanTag = createErrorSpanTag();
  pwSpanTag.textContent = "비밀번호를 확인해주세요.";
  pwWrap.appendChild(pwSpanTag);
  addErrorClassName(inputPw);
}

signinForm.addEventListener('submit', submitForm);

/*-----눈모양 아이콘 클릭에 따른 노출-----*/
const eye = document.querySelector(".input__eye");
let isShowPw = false

function togglePw(e){
  const showPwBtn = e.target

  isShowPw = !isShowPw

  const pwInputType = (isShowPw) ? 'text' : 'password';
  inputPw.setAttribute('type', pwInputType)

  const pwIconPath = (isShowPw) ? "assets/img/icon-eye-on.svg" : "assets/img/icon-eye-off.svg";
  showPwBtn.setAttribute('src', pwIconPath)
  
  const pwLetterSpacing = (isShowPw) ? '0rem' : '0.375rem';
  inputPw.style.letterSpacing = pwLetterSpacing

  const pwIconAltText = (isShowPw) ? "show password" : "hide password";
  showPwBtn.setAttribute('alt', pwIconAltText)
}

eye.addEventListener('click', togglePw)