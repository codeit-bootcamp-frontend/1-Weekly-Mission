function $(selector){
  return document.querySelector(selector);
}

// 클래스 추가 함수
function addClass(element, className = 'input-error-msg'){
  element.classList.add(className);
}

// 태그 생성 함수
function createElement (tagName = 'span') {
  return document.createElement(tagName);
}
//const createElement = () => document.createElement(tagName);

function isValidUserInput(email) {
  return email.length > 0 && !REG_EXP.EMAIL.test(email);
}

//이메일, 비밀번호 맞는지 확인하는 함수
function isCorrectUser(email, password) {
  return DB_USERS.findIndex((dbUser) => {
    return dbUser.email === email && dbUser.password === password;
  })
}

export {
  $,
  addClass,
  createElement,
  isCorrectUser,
}