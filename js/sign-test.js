// 함수형 프로그래밍 실험입니다.
// curry 함수는 두 개 이상의 인자를 받는 다른 함수가 첫번째 인자만 받고 대기하도록 만듭니다.
// 커리의 국물을 끓여놓고 다른 토핑이 들어오기를 기다리는 상태입니다.
const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// 선언한 html class를 모아두고, 필요할때 수정합니다.
const htmlClasses = [
  [".form__label", "labels"],
  [".form__input", "inputs"],
  [".form__input-btn", "buttons"],
  [".form__err", "ps"],
  [".form__submit", "submits"]
]
// HTML태그의 클래스명을 받아서 id로 태그를 추가하는 함수입니다.
const elementFromClassToId = function (obj, className, collentionName) {
  const tags = document.querySelectorAll(className)
  obj[collentionName] = tags;
  for (const tag of tags) {
    obj[tag.id] = tag;
  }
  return obj
}
const $dom = htmlClasses.reduce((acc, cur) => elementFromClassToId(acc, ...cur), {})
/* 위의 reduce의 작동은 아래와 같습니다.
elementFromClassToId($dom, ".form__label", "labels")
elementFromClassToId($dom, ".form__input", "inputs")
elementFromClassToId($dom, ".form__input-btn", "buttons")
elementFromClassToId($dom, ".form__err", "ps")
elementFromClassToId($dom, ".form__submit", "submits")
*/
/* 생성되는 $dom 객체입니다.
$dom = {
buttonCh: button#buttonCh.form__input-btn.form__input-btn--absolute
buttonPw: button#buttonPw.form__input-btn.form__input-btn--absolute
buttonSub: button#buttonSub.form__submit.margin-top30
inputCh: input#inputCh.form__input.password
inputEm: input#inputEm.form__input
inputPw: input#inputPw.form__input.password
pCh: p#pCh.form__err
pEm: p#pEm.form__err
pPw: p#pPw.form__err
}
*/

// 태그의 name 속성을 이용해서 짝이 맞는 label, p태그를 찾아가는 locator 함수
// 반환하는 res 객체의 메소드를 이용해서 오류 메시지를 출력, 삭제합니다.
// $dom 객체의 메소드이므로 switch문의 this === $dom,
// res 객체의 메소드의 this는 res객체 입니다.
$dom.locator = function (tag) {
  const res = {};
  res.name = tag.name;
  res.tag = tag;
  res.classAdd = function (errType) {
    this.p.textContent = variable[errType][this.name];
    this.label.classList.add(variable.errName);
    this.tag.classList.add(variable.errName);
  }
  res.classRemove = function () {
    this.p.textContent = "";
    this.label.classList.remove(variable.errName);
    this.tag.classList.remove(variable.errName);
  }
  switch (tag.name) {
    case this.inputEm.name:
      res.label = this.labelEm
      res.p = this.pEm
      break;
    case this.inputPw.name:
      res.label = this.labelPw
      res.p = this.pPw
      break;
    case this.inputCh.name:
      res.label = this.labelCh
      res.p = this.pCh
      break;
    case this.buttonSub.name:
      break;
  }
  return res
}

// 여러가지 변수를 모으고, 꺼내서 사용하도록 하였습니다.
const variable = {
  emptyError: {
    [$dom.inputEm.name]: "이메일을 입력해주세요.",
    [$dom.inputPw.name]: "비밀번호를 입력해주세요.",
    [$dom.inputCh?.name]: "비밀번호를 확인해주세요."
  },
  typeError: {
    [$dom.inputEm.name]: "올바른 이메일 주소가 아닙니다.",
    [$dom.inputPw.name]: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    [$dom.inputCh?.name]: "비밀번호가 일치하지 않아요."
  },
  invaildError: {
    [$dom.inputEm.name]: "이메일을 확인해주세요.",
    [$dom.inputPw.name]: "비밀번호를 확인해주세요."
  },
  occupiedError: {
    [$dom.inputEm.name]: "이미 사용 중인 이메일입니다."
  },
  reg: {
    [$dom.inputEm.name]: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    [$dom.inputPw.name]: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  },
  devAccount: {
    [$dom.inputEm.name]: "test@codeit.com",
    [$dom.inputPw.name]: "codeit101"
  },
  errName: 'err',
  nextPage: './folder.html',
  isSignup: !!$dom.inputCh,
  userPw: '',
}

// 현재 있는 페이지를 구분하는 변수, $dom.inputCh는 signup에만 존재
const isSignup = !!$dom.inputCh

// 이동할 페이지
const nextPage = './folder.html'

// 검증용 계정을 객체로 정리했습니다.
const devAccount = {
  [$dom.inputEm.name]: "test@codeit.com",
  [$dom.inputPw.name]: "codeit101"
}
// 이메일과 비밀번호 형식, 정규표현식을 이용한 검증
const reg = {
  [$dom.inputEm.name]: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  [$dom.inputPw.name]: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
}
// 에러 메시지를 객체로 정리
const [emptyError, typeError, invaildError, occupiedError] = [
  'emptyError', 'typeError', 'invaildError', 'occupiedError'
]
const errors = {
  [emptyError]: {
    [$dom.inputEm.name]: "이메일을 입력해주세요.",
    [$dom.inputPw.name]: "비밀번호를 입력해주세요.",
    [$dom.inputCh?.name]: "비밀번호를 확인해주세요."
  },
  [typeError]: {
    [$dom.inputEm.name]: "올바른 이메일 주소가 아닙니다.",
    [$dom.inputPw.name]: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    [$dom.inputCh?.name]: "비밀번호가 일치하지 않아요."
  },
  [invaildError]: {
    [$dom.inputEm.name]: "이메일을 확인해주세요.",
    [$dom.inputPw.name]: "비밀번호를 확인해주세요."
  },
  [occupiedError]: {
    [$dom.inputEm.name]: "이미 사용 중인 이메일입니다."
  }
}


const locator = ((obj) => (tag) => {
  const res = {};
  res.name = tag.name;
  res.tag = tag;
  // 해당 input 태그와 에러타입에 따라서 다른 메시지를 출력합니다.
  res.classAdd = function (errType) {
    this.p.textContent = variable[errType][this.name];
    this.label.classList.add(variable.errName);
    this.tag.classList.add(variable.errName);
  }
  res.classRemove = function () {
    this.p.textContent = "";
    this.label.classList.remove(variable.errName);
    this.tag.classList.remove(variable.errName);
  }
  switch (tag.name) {
    case obj.inputEm.name:
      res.label = obj.labelEm
      res.p = obj.pEm
      break;
    case obj.inputPw.name:
      res.label = obj.labelPw
      res.p = obj.pPw
      break;
    case obj.inputCh.name:
      res.label = obj.labelCh
      res.p = obj.pCh
      break;
    case obj.buttonSub.name:
      break;
  }
  return res
})($dom);

// focusout 시, 값 확인 함수
const checkout = curry((f, { currentTarget: $input }) => {
  //값이 없을때
  if (!$input.value) {
    f($input).classAdd(emptyError);
    return;
  }
  // 이메일 형태 확인, 회원가입 페이지 이메일 중복 확인
  if ($input.name === $dom.inputEm.name) {
    reg[$input.name].test($input.value) ? null : f($input).classAdd(typeError);
    isSignup && $input.value === devAccount[$dom.inputEm.name] ? f($input).classAdd(occupiedError) : null;
  }
  // 비밀번호 형태 확인
  if ($input.name === $dom.inputPw.name) {
    userPw = $input.value;
    $input.name === $dom.inputPw.name &&
      reg[$input.name].test(userPw) ? null : f($input).classAdd(typeError);
  }
  // 회원가입 페이지 비밀번호 일치 확인
  if ($input.name === $dom.inputCh?.name) {
    $input.value === userPw ? null : f($input).classAdd(typeError);
  }
})

// 에러 메시지 초기화 함수, 첫번째 인자로 위치를 지정하는 함수를 받습니다.
// 가독성을 위해 currentTarget을 $input으로 직관적인 변수로 바꾸었습니다.
const reset = curry((f, { currentTarget: $input }) => {
  f($input).classRemove();
})

// 모든 input 태그 값을 조회해서 에러가 있는지 확인하는 함수
const isError = (f, $inputs) => {
  for (const $input of $inputs) {
    checkout(f, { currentTarget: $input })
    if ($input.classList.contains("err")) {
      return true
    }
  }
}

// submit 시, 값 검증 함수
const vaildate = curry((f, event) => {
  event.preventDefault();
  const [emValue, pwValue, ChValue] = Array.from($dom.inputs).map(($input) => $input.value);
  const emCheck = emValue === devAccount[$dom.inputEm.name];
  const pwCheck = pwValue === devAccount[$dom.inputPw.name];
  // 오류가 생기면 페이지 이동 X
  if (isError(f)) return;
  location.href = nextPage
  if (emCheck && pwCheck) {
    location.href = nextPage
  } else if (emValue && pwValue) {
    emCheck ? null : insertErr(f($dom.inputEm), invaildError)
    pwCheck ? null : insertErr(f($dom.inputPw), invaildError)
  }

})

// checkout, reset 함수는 locator 함수를 받은채로 대기합니다. (curry 함수의 효과)
// HTML에 의존적인 sibling, parent 등을 사용하지 않았습니다.
// HTML 구조가 변하면 locator 함수를 바꿔주는 것으로 유지보수가 되도록 의도했습니다.
// 이벤트리스너가 reset(locator)(event)의 형식으로 실행합니다.
for (const $input of $dom.inputs) {
  $input.addEventListener("focusout", checkout($dom.locator));
  $input.addEventListener("focusin", reset($dom.locator));
}
$dom.buttonSub.addEventListener("click", vaildate($dom.locator))