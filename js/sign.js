const $eyes = document.querySelectorAll(".form__input-btn");
const $inputs = document.querySelectorAll(".form__input");
const [$errEm, $errPw, $errPwCh] = document.querySelectorAll(".form__err")
const [$labelEm, $labelPw, $labelPwCh] = document.querySelectorAll(".form__label");
const $submit = document.querySelector(".form__submit");
// RFC 5322 방식을 이용한 이메일 형식 정규표현식
const regEx = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
// 기본 : 빈 입력값, 입력값 형태 확인, /folder로 이동하기
for (let i = 0; i < $inputs.length; i++) {
  $inputs[i].addEventListener("focusout", certify);
  $inputs[i].addEventListener("focusin", certify);
}

function certify({ currentTarget, type }) {
  // focusout 메시지 띄우기
  if (type === "focusout") {
    insertErr(currentTarget);
    return;
  }
  // focusin 메시지 지우기
  if (currentTarget.classList.contains("err-input")) {
    resetErr(currentTarget);
    return;
  }
}

function insertErr(currentTarget) {
  const val = currentTarget.value;
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

function resetErr(currentTarget) {
  const type = currentTarget.type;
  const $err = type === 'email' ? $errEm : $errPw;
  const $label = type === 'email' ? $labelEm : $labelPw;
  $err.textContent = '';
  $label.classList.toggle("err");
  currentTarget.classList.toggle("err-input");
}

// 값을 확인하고 맞으면 /folder로 이동
$submit.addEventListener("click", checkValue);

function checkValue(event) {
  event.preventDefault();
  const emVal = $inputs[0].value;
  const pwVal = $inputs[1].value;
  const emCheck = emVal === 'test@codeit.com';
  const pwCheck = pwVal === 'codeit101';
  // 일치하면 이동, 값이 불일치하면 값 제거;
  if (emCheck && pwCheck) {
    location.href = "./folder.html"
  } else if (emVal && pwVal) {
    $inputs[0].value = "";
    $inputs[1].value = "";
  }
}

// 심화 : 비밀번호 숨기기 기능
$eyes.forEach((el) => {
  el.addEventListener("click", eyeEvent);
  el.addEventListener("keypress", eyeEvent);
})

function eyeEvent(event) {
  const type = event.type;
  const key = event.key;
  if (type === "click" || key === "Enter" || key === " ") {
    showpw(event);
    return;
  }
}

function showpw(event) {
  event.preventDefault();
  const $eye = event.currentTarget
  const $pw = document.querySelector(".password");
  $pw.classList.toggle("active");
  if ($pw.classList.contains("active")) {
    $eye.setAttribute("src", "assets/sign-eye-on.svg");
    $pw.setAttribute("type", "text");
  } else {
    $eye.setAttribute("src", "assets/sign-eye-off.svg");
    $pw.setAttribute("type", "password");
  }
  $pw.focus();
}

