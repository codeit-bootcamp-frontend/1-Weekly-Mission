//TEST USER
const TEST_USER = {
  email: "test@codeit.com",
  pw: "codeit101"
}

//이메일 유효 형식 검사
const EMAIL_REGEXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function isEmailValid(email){
  return (email.match(EMAIL_REGEXP)!=null);
}

//에러 태그 생성
function createErrorTag(){
  const spanTag = document.createElement('span');
  spanTag.classList = 'error';

  return spanTag;
}

//에러 클래스 추가
function addErrorClass(element) {
  element.classList.add('input__error');
}

//input__error 클래스 있으면 제거
function removeErrorClass(element) {
  if (element.classList.contains('input__error')){
    element.classList.remove('input__error')};
}
  
//특정 범위 내 요소 있으면 제거
function removeElementOrNull(range, element){
if (range.querySelector(element)){
  let temp = range.querySelector(element);
  temp.remove();
  }
}

//ErrorTag
function addErrorTag (el, insertionPoint, message) {
  const SpanTag = createErrorTag();
  SpanTag.textContent = message;
  insertionPoint.appendChild(SpanTag);
  addErrorClass(el);
}

/*-----눈모양 아이콘 클릭에 따른 노출-----*/
function togglePw(e){
  const pwIcon = e.target
  const inputBox = e.target.previousElementSibling

  pwIcon.classList.toggle("active")
  let isShowPw = pwIcon.classList.contains("active")

  const pwInputType = (isShowPw) ? 'text' : 'password';
  inputBox.setAttribute('type', pwInputType)

  const pwIconPath = (isShowPw) ? "assets/img/icon-eye-on.svg" : "assets/img/icon-eye-off.svg";
  pwIcon.setAttribute('src', pwIconPath)
  
  const pwLetterSpacing = (isShowPw) ? '0rem' : '0.375rem';
  inputBox.style.letterSpacing = pwLetterSpacing

  const pwIconAltText = (isShowPw) ? "show password" : "hide password";
  pwIcon.setAttribute('alt', pwIconAltText)
}

export { 
  TEST_USER,
  isEmailValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull,
  togglePw
}