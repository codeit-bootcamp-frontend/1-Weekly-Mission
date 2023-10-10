import { Dom } from './class/dom.js'

import { log, curry, reduce, go, pipe } from './functions/default.js'

import { dev } from './constants/account.js'
import { htmlClasses, errClass, activeClass, imgs } from './constants/cssClass.js'
import { email, password, passwordCheck } from './constants/errorMessage.js'
import { reg } from './constants/regExp.js'
import { userPw } from './constants/signEtc.js'

const $dom = new Dom(htmlClasses)
console.log($dom)

const locator = (tag) => {
  const res = {};
  res.id = tag.id;
  res.tag = tag;
  res.classAdd = function (errType) {
    this.p.textContent = variable[errType][this.name];
    this.label.classList.add(variable.errClass);
    this.tag.classList.add(variable.errClass);
  }
  res.classRemove = function () {
    this.p.textContent = "";
    this.label.classList.remove(variable.errClass);
    this.tag.classList.remove(variable.errClass);
  }
  switch (tag.name) {
    case $dom.inputEm.name:
      res.label = $dom.labelEm
      res.p = $dom.pEm
      break;
    case $dom.inputPw.name:
      res.label = $dom.labelPw
      res.p = $dom.pPw
      break;
    case $dom.inputCh?.name:
      res.label = $dom.labelCh
      res.p = $dom.pCh
      break;
    case $dom.buttonPw.name:
      res.input = $dom.inputPw
      res.img = $dom.imgPw
      break;
    case $dom.buttonCh?.name:
      res.input = $dom.inputCh
      res.img = $dom.imgCh
      break;
    case $dom.buttonSub.name:
      res.inputs = $dom.inputs
      break;
  }
  return res
}


// focusout 시, 값 확인 함수
const checkout = curry((f, { currentTarget: $input }) => {
  //값이 없을때
  if (!$input.value) {
    f($input).classAdd('emptyError');
    return;
  }
  // 이메일 형태 확인, 회원가입 페이지 이메일 중복 확인
  if ($input.id === $dom.inputEm.id) {
    variable.reg[$input.id].test($input.value) ? null : f($input).classAdd('typeError');
    variable.isSignup && $input.value === variable.devAccount[$dom.inputEm.id] ? f($input).classAdd('occupiedError') : null;
  }
  // 비밀번호 형태 확인
  if ($input.id === $dom.inputPw.id) {
    userPw = $input.value;
    $input.id === $dom.inputPw.id &&
      variable.reg[$input.id].test(userPw) ? null : f($input).classAdd('typeError');
  }
  // 회원가입 페이지 비밀번호 일치 확인
  if ($input.id === $dom.inputCh?.id) {
    $input.value === userPw ? null : f($input).classAdd('typeError');
  }
})

// 에러 메시지 초기화 함수, 첫번째 인자로 위치를 지정하는 함수를 받습니다.
// 가독성을 위해 currentTarget을 $input으로 직관적인 변수로 바꾸었습니다.
const reset = curry((f, { currentTarget: $input }) => {
  f($input).classRemove();
})

// 모든 input 태그 값을 조회해서 에러가 있는지 확인하는 함수
const isError = (f, { currentTarget: target }) => {
  return Array.from(f(target).inputs)
    .map($input => { checkout(f, { currentTarget: $input }); return $input })
    .some($input => $input.classList.contains(variable.errClass))
}

// submit 시, 값 검증 함수
const vaildate = curry((f, event) => {
  event.preventDefault();
  const [emValue, pwValue] = Array.from($dom.inputs).map(($input) => $input.value);
  const emCheck = emValue === variable.devAccount[$dom.inputEm.id];
  const pwCheck = pwValue === variable.devAccount[$dom.inputPw.id];
  // 오류가 생기면 페이지 이동 X
  if (isError(f, event)) return;
  // 유효한 회원가입이면 이동
  if (variable.isSignup) {
    location.href = variable.nextPage
    return;
  }
  // 테스트 계정과 동일하면 로그인
  if (emValue && pwValue) {
    emCheck ? null : f($dom.inputEm).classAdd('invaildError')
    pwCheck ? null : f($dom.inputPw).classAdd('invaildError')
  }
  if (emCheck && pwCheck) {
    location.href = variable.nextPage
  }
})

// 비밃번호 보여주는 함수
const pwOnoff = curry((f, event) => {
  event.preventDefault();
  const $img = f(event.currentTarget).img
  const $input = f(event.currentTarget).input;
  $input.classList.toggle(variable.activeClass);
  if ($input.classList.contains(variable.activeClass)) {
    $img.setAttribute("src", variable.imgs.on);
    $input.setAttribute("type", "text");
  } else {
    $img.setAttribute("src", variable.imgs.off);
    $input.setAttribute("type", "password");
  }
  // 사용자 편의를 위해 바로 input 태그로 focuse를 넣었습니다.
  $input.focus();
})


// checkout, reset 함수는 $dom.locator 함수를 받은채로 대기합니다. (curry 함수의 효과)
// HTML에 의존적인 sibling, parent 등을 사용하지 않았습니다.
// HTML 구조가 변하면 locator 함수를 바꿔주는 것으로 유지보수가 되도록 의도했습니다.
// 이벤트리스너가 checkout($dom.locator)(event)의 형식으로 실행합니다.
for (const $input of $dom.inputs) {
  $input.addEventListener("focusout", checkout($dom.locator));
  $input.addEventListener("focusin", reset($dom.locator));
}
$dom.buttonSub.addEventListener("click", vaildate($dom.locator))

for (const $button of $dom.buttons) {
  $button.addEventListener("click", pwOnoff($dom.locator));
  $button.addEventListener("keypress", pwOnoff($dom.locator));
}

