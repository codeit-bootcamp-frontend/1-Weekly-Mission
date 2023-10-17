// HTML tag를 담는 변수는 앞에 $를 붙임
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");
const $form = document.querySelector("form");
const $pwInvisible = document.querySelector(".password-invisible");
const $doubleCheckPw = document.querySelector("#doublecheck-pw");
const $doubleCheckPwInvisible = document.querySelector(
  ".doublecheck-pw-invisible"
);

const $emailErrorMsg = document.createElement("div");
const $passwordErrorMsg = document.createElement("div");
const $doubleCheckPwErrorMsg = document.createElement("div");

// togglePwVisibility() 에서 쓰임
let isPwVisible = false;
let isDoubleCheckPwVisible = false;

const showEmailError = (type) => {
  if (type === "void") {
    $emailErrorMsg.textContent = "이메일을 입력해주세요.";
  } else if (type === "typo") {
    $emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (type === "already") {
    $emailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
  } else if (type === "wrong") {
    $emailErrorMsg.textContent = "이메일을 확인해주세요.";
  }
  $email.classList.add("error-border");
};

const deleteEmailError = () => {
  $emailErrorMsg.textContent = "";
  $email.classList.remove("error-border");
};

const showPasswordError = (type) => {
  if (type === "again") {
    $passwordErrorMsg.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (type === "diff") {
    $passwordErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
    $doubleCheckPwErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
    $doubleCheckPw.classList.add("error-border");
  } else if (type === "void") {
    $passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
  } else if (type === "voidDC") {
    $doubleCheckPwErrorMsg.textContent = "비밀번호를 입력해주세요.";
    $doubleCheckPw.classList.add("error-border");
  } else if (type === "wrong") {
    $passwordErrorMsg.textContent = "비밀번호를 확인해주세요.";
  }
  $password.classList.add("error-border");
};

const deletePasswordError = () => {
  $passwordErrorMsg.textContent = "";
  $password.classList.remove("error-border");
};

// 비밀번호란의 비번 보이기 토글버튼
const togglePwVisibility = (event) => {
  // 비밀번호 input의 비밀번호 가리기 toggle
  if (event.target === $pwInvisible && !isPwVisible) {
    // 비밀번호 보이게 하기
    $pwInvisible.setAttribute("src", "../assets/images/svg/eye-on.svg");
    $password.setAttribute("type", "text");
    isPwVisible = true;
  } else if (event.target === $pwInvisible && isPwVisible) {
    // 비밀번호 가리기
    $pwInvisible.setAttribute("src", "../assets/images/svg/eye-off.svg");
    $password.setAttribute("type", "password");
    isPwVisible = false;
  }
  // 비밀번호 확인 input의 비밀번호 확인 가리기 toggle
  if (event.target === $doubleCheckPwInvisible && !isDoubleCheckPwVisible) {
    // 비밀번호 보이게 하기
    $doubleCheckPwInvisible.setAttribute(
      "src",
      "../assets/images/svg/eye-on.svg"
    );
    $doubleCheckPw.setAttribute("type", "text");
    isDoubleCheckPwVisible = true;
  } else if (
    event.target === $doubleCheckPwInvisible &&
    isDoubleCheckPwVisible
  ) {
    // 비밀번호 가리기
    $doubleCheckPwInvisible.setAttribute(
      "src",
      "../assets/images/svg/eye-off.svg"
    );
    $doubleCheckPw.setAttribute("type", "password");
    isDoubleCheckPwVisible = false;
  }
};

export {
  $email,
  $password,
  $form,
  $pwInvisible,
  $emailErrorMsg,
  $passwordErrorMsg,
  $doubleCheckPw,
  $doubleCheckPwErrorMsg,
  $doubleCheckPwInvisible,
  showEmailError,
  deleteEmailError,
  showPasswordError,
  deletePasswordError,
  togglePwVisibility,
};
