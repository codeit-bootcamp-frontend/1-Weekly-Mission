const signinForm = document.querySelector('form');
const emailWrap = document.querySelector('.signin__email__wrap');
const inputEmail = document.querySelector('.input--email');
const pwWrap = document.querySelector('.signin__pw__wrap');
const inputPw = document.querySelector('.input--pw');
const signinBtn = document.querySelector('.signin__btn')


/*-----로그인 유효성 검사-----*/

//이메일 유효성 검사
const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function validEmail(email){
  return (email.match(emailRegExp)!=null);
}

function createErrorSpanTag(){
  const spanTag = document.createElement('span');
  spanTag.classList = 'errorMsg';

  return spanTag;
}

function ifExistRemoveElement(range, element){
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


function checkEmail(e){
  ifExistRemoveElement(emailWrap, '.errorMsg');
  removeErrorClassName(inputEmail);

  const spanTag = createErrorSpanTag();
  const email = e.target.value;

  if (email == ''){
    spanTag.textContent = "이메일을 입력해주세요.";
    emailWrap.appendChild(spanTag);
    addErrorClassName(inputEmail);
    return;
  }
  
  if (validEmail(email) == false){
    spanTag.textContent = "올바른 이메일 주소가 아닙니다.";
    emailWrap.appendChild(spanTag);
    addErrorClassName(inputEmail);
  }
}

inputEmail.addEventListener('focusout', checkEmail);


//비밀번호 유효성 검사
function checkPw(e){
  ifExistRemoveElement(pwWrap, '.errorMsg');
  removeErrorClassName(inputPw);

  const spanTag = createErrorSpanTag();
  const password = e.target.value;

  if (password == ''){
    spanTag.textContent = "비밀번호를 입력해주세요.";
    pwWrap.appendChild(spanTag);
    addErrorClassName(inputPw);
  }
}

inputPw.addEventListener('focusout', checkPw);


//로그인 성공
const VALIDEMAIL = "test@codeit.com"
const VALIDPW = "codeit101"

function checkAccount(e){
  e.preventDefault()

  const email = inputEmail.value;
  const password = inputPw.value;

  if (email === VALIDEMAIL && password === VALIDPW){
    e.submit();
    return;
  }

  ifExistRemoveElement(emailWrap, '.errorMsg');
  ifExistRemoveElement(pwWrap, '.errorMsg');
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

signinForm.addEventListener('submit', checkAccount);

/*-----눈모양 아이콘 클릭에 따른 노출-----*/
const eye = document.querySelector(".input__eye");
let eyeStatus = "off"

function showPw(e){
  if (eyeStatus === "off"){
    eyeStatus = "on"
    inputPw.setAttribute('type', 'text');
    inputPw.style.letterSpacing = '0rem'
    e.target.setAttribute('src', "assets/img/eyeOn.svg");
    e.target.setAttribute('alt', "show password");
    return
  }

  eyeStatus = "off"
  inputPw.setAttribute('type', 'password');
  inputPw.style.letterSpacing = '0.375rem'
  e.target.setAttribute('src', "assets/img/eyeOff.svg");
  e.target.setAttribute('alt', "hide password");
}

eye.addEventListener('click', showPw)
