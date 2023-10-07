// 함수형 프로그래밍 실험입니다.
// curry 함수는 두 개 이상의 인자를 받는 다른 함수를 받아서
// 첫번째 인자만 받고 대기하도록 함수를 반환합니다.
// 비유하자면, 커리의 국물을 끓여놓고 다른 토핑이 들어오기를 기다리는 상태입니다.
const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// 선언한 html class를 모아두고, 필요할때 수정합니다.
const htmlClasses = [
  [".form__label", "labels"],
  [".form__input", "inputs"],
  [".form__input-btn", "buttons"],
  [".form__img", "imgs"],
  [".form__err", "ps"],
  [".form__submit", "submits"]
]

class Dom {
  constructor(arr) {
    Object.assign(this, arr.reduce((acc, cur) => this.elementFromClassToId(acc, ...cur), {}));
  } /* 위의 reduce의 작동은 아래와 같습니다.
elementFromClassToId($dom, ".form__label", "labels")
elementFromClassToId($dom, ".form__input", "inputs")
elementFromClassToId($dom, ".form__input-btn", "buttons")
elementFromClassToId($dom, ".form__err", "ps")
elementFromClassToId($dom, ".form__submit", "submits")
*/
  // HTML태그의 클래스명을 받아서 id로 태그를 추가하는 함수입니다.
  elementFromClassToId(obj, className, collentionName) {
    const tags = document.querySelectorAll(className)
    obj[collentionName] = tags;
    for (const tag of tags) {
      obj[tag.id] = tag;
    }
    return obj
  }
  // 태그의 id 속성을 이용해서 짝이 맞는 label, p태그를 찾아가는 locator 함수
  // label까지 색이 변하는 것이 UX 시각적 확인이 빠른 것 같아서 label에도 색을 추가했습니다.
  // 반환하는 res 객체의 메소드를 이용해서 오류 메시지를 출력, 삭제합니다.
  // Dom 객체의 메소드이므로 switch문의 this === $dom,
  // res 객체의 메소드의 this는 res객체 입니다.
  locator = (tag) => {
    const res = {};
    res.id = tag.id;
    res.tag = tag;
    res.classAdd = function (errType) {
      this.p.textContent = variable[errType][this.id];
      this.label.classList.add(variable.errClass);
      this.tag.classList.add(variable.errClass);
    }
    res.classRemove = function () {
      this.p.textContent = "";
      this.label.classList.remove(variable.errClass);
      this.tag.classList.remove(variable.errClass);
    }
    switch (tag.id) {
      case this.inputEm.id:
        res.label = this.labelEm
        res.p = this.pEm
        break;
      case this.inputPw.id:
        res.label = this.labelPw
        res.p = this.pPw
        break;
      case this.inputCh?.id:
        res.label = this.labelCh
        res.p = this.pCh
        break;
      case this.buttonPw.id:
        res.input = this.inputPw
        res.img = this.imgPw
        break;
      case this.buttonCh.id:
        res.input = this.inputCh
        res.img = this.imgCh
        break;
      case this.buttonSub.id:
        res.inputs = this.inputs
        break;
    }
    return res
  }
}
const $dom = new Dom(htmlClasses)
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

// 여러가지 변수를 모으고, 꺼내서 사용하도록 하였습니다.
const variable = {
  // 에러 메시지를 객체로 정리
  emptyError: {
    [$dom.inputEm.id]: "이메일을 입력해주세요.",
    [$dom.inputPw.id]: "비밀번호를 입력해주세요.",
    [$dom.inputCh?.id]: "비밀번호를 확인해주세요."
  },
  typeError: {
    [$dom.inputEm.id]: "올바른 이메일 주소가 아닙니다.",
    [$dom.inputPw.id]: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    [$dom.inputCh?.id]: "비밀번호가 일치하지 않아요."
  },
  invaildError: {
    [$dom.inputEm.id]: "이메일을 확인해주세요.",
    [$dom.inputPw.id]: "비밀번호를 확인해주세요."
  },
  occupiedError: {
    [$dom.inputEm.id]: "이미 사용 중인 이메일입니다."
  },
  // 이메일과 비밀번호 형식, 정규표현식을 이용한 검증
  reg: {
    [$dom.inputEm.id]: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    [$dom.inputPw.id]: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  },
  // 검증용 계정을 객체로 정리했습니다.
  devAccount: {
    [$dom.inputEm.id]: "test@codeit.com",
    [$dom.inputPw.id]: "codeit101"
  },
  errClass: 'err',
  activeClass: 'active',
  imgs: {
    on: "assets/sign-eye-on.svg",
    off: "assets/sign-eye-off.svg",
  },
  // 이동할 페이지
  nextPage: './folder.html',
  // 현재 있는 페이지를 구분하는 변수, $dom.inputCh는 signup에만 존재
  isSignup: !!$dom.inputCh,
  userPw: '',
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

