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
function addErrorTag (el, parent, message) {
  const SpanTag = createErrorTag();
  SpanTag.textContent = message;
  parent.appendChild(SpanTag);
  addErrorClass(el);
}

export { 
  isEmailValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull }