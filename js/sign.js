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
  const name = currentTarget.name;
  const $err = name === 'email' ? $errEm : name === 'password' ? $errPw : $errPwCh;
  const $label = name === 'email' ? $labelEm : name === 'password' ? $labelPw : $labelPwCh;
  const $inputPw = $inputs[1];
  const $inputPwCh = $inputs[2];
  if (!val) {
    // 메시지 띄우기
    const msg = name === 'email' ? "이메일을 입력해주세요." : "비밀번호를 입력해주세요.";
    // 메시지를 미리 추가해놓은 p태그로 전송
    $err.textContent = msg;
    $label.classList.add("err");
    currentTarget.classList.add("err-input");
  } else if (name === 'email' && !regEx.test(val)) {
    const msg = "올바른 이메일 주소가 아닙니다."
    $err.textContent = msg;
    $label.classList.add("err");
    currentTarget.classList.add("err-input");
    // 입력한 비밀번호와 확인값이 같은지 검증
  } else if ($inputPwCh && $inputPw.value !== $inputPwCh.value) {
    const msg = "비밀번호가 일치하지 않습니다."
    $errPwCh.textContent = msg;
    $labelPwCh.classList.add("err");
    $inputPwCh.classList.add("err-input");
  }
}

function resetErr(currentTarget) {
  const name = currentTarget.name;
  const $err = name === 'email' ? $errEm : name === 'password' ? $errPw : $errPwCh;
  const $label = name === 'email' ? $labelEm : name === 'password' ? $labelPw : $labelPwCh;
  $err.textContent = '';
  $label.classList.remove("err");
  currentTarget.classList.remove("err-input");
}

// 값을 확인하고 맞으면 /folder로 이동
$submit.addEventListener("click", checkValue);

function checkValue(event) {
  event.preventDefault();
  const emVal = $inputs[0].value;
  const pwVal = $inputs[1].value;
  const pwChVal = $inputs[2]?.value;
  const emCheck = emVal === 'test@codeit.com';
  const pwCheck = pwVal === 'codeit101';
  // 일치하면 이동, 값이 불일치하면 값 제거; 회원가입 페이지에서는 이동 X
  if (!$inputs[2]) {
    if (emCheck && pwCheck) {
      location.href = "./folder.html"
    } else if (emVal && pwVal) {
      $inputs[0].value = "";
      $inputs[1].value = "";
    }
    // 회원가입 페이지에서 비밀번호 === 비밀번호확인
  } else if (emCheck && pwVal === pwChVal) {
    $inputs[0].value = "";
    $inputs[1].value = "";
    $inputs[2].value = "";
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
  const $eye = event.currentTarget.firstElementChild;
  const $pw = event.currentTarget.previousElementSibling;
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

