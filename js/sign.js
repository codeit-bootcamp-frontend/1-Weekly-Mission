const $eyes = document.querySelectorAll(".eye");
const $inputs = document.querySelectorAll(".form__input");
const [$errEm, $errPw, $errPwCh] = document.querySelectorAll(".form__err")
const [$labelEm, $labelPw, $labelPwCh] = document.querySelectorAll(".form__label")
// RFC 5322 방식을 이용한 이메일 형식 정규표현식
const regEx = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

// 기본 : 빈 입력값, 입력값 형태 확인, /folder로 이동하기
for (let i = 0; i < $inputs.length; i++) {
  $inputs[i].addEventListener("keypress", preventEnter)
  $inputs[i].addEventListener("focusout", certify)
  $inputs[i].addEventListener("focusin", certify)
}

function preventEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

function certify({ currentTarget, type }) {
  // focusout 메시지 띄우기
  if (type === "focusout") {
    const val = currentTarget.value;
    insertErr(val, currentTarget);
    return;
  }
  // focusin 메시지 지우기
  if (currentTarget.classList.contains("err-input")) {
    const type = currentTarget.type;
    const $err = type === 'email' ? $errEm : $errPw;
    const $label = type === 'email' ? $labelEm : $labelPw;
    $err.textContent = '';
    $label.classList.toggle("err");
    currentTarget.classList.toggle("err-input");
  }
}

function insertErr(val, currentTarget) {
  const type = currentTarget.type;
  const $err = type === 'email' ? $errEm : $errPw;
  const $label = type === 'email' ? $labelEm : $labelPw;
  if (!val) {
    // 메시지 띄우기
    const msg = type === 'email' ? "이메일을 입력해주세요." : "비밀번호를 입력해주세요.";
    // 메시지를 미리 추가해놓은 p태그로 전송
    $err.textContent = msg;
    $label.classList.toggle("err");
    currentTarget.classList.toggle("err-input");
  } else if (type === 'email' && !regEx.test(val)) {
    const msg = "올바른 이메일 주소가 아닙니다."
    $err.textContent = msg;
    $label.classList.toggle("err");
    currentTarget.classList.toggle("err-input");
  }
}

// 값을 확인하고 맞으면 /folder로 이동
function checkValue() {

}

// 심화 : 비밀번호 숨기기 기능
for (let i = 0; i < $eyes.length; i++) {
  $eyes[i].addEventListener("click", (event) => {
    showpw(event, i);
  });
  $eyes[i].addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === "Space") {
      showpw(event, i);
    }
  });
}
function showpw(event, i) {
  event.preventDefault();
  const $pw = document.querySelectorAll(".password")[i];
  $pw.classList.toggle("active");
  if ($pw.classList.contains("active")) {
    $eyes[i].setAttribute("src", "assets/sign-eye-on.svg");
    $pw.setAttribute("type", "text");
  } else {
    $eyes[i].setAttribute("src", "assets/sign-eye-off.svg");
    $pw.setAttribute("type", "password");
  }
  $pw.focus();
}

