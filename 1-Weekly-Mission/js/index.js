// 가독성 위해 HTML tag 담는 변수 앞에 $ 붙임
const $emailBox = document.querySelector("#email");
const $passwordBox = document.querySelector("#password");
const $passwordCheckBox = document.querySelector("#password_check");
const $eyeButton = document.querySelector(".eye_off");
const $eyeButtonCheck = document.querySelector(".eye_off_check");

const $emailErrMsg = document.querySelector("#email_error");
const $passwordErrMsg = document.querySelector("#password_error");
const $passwordConfirmErrMsg = document.querySelector("#password_check_error");

// 에러 메시지 추가
const addError = (target, ErrorMessage) => {
  target.classList.add("print_error_message");
  target.textContent = ErrorMessage;

  if (target === $emailErrMsg) {
    $emailBox.classList.add("error_border");
  } else if (target === $passwordErrMsg) {
    $passwordBox.classList.add("error_border");
  } else if (target === $passwordConfirmErrMsg) {
    $passwordCheckBox.classList.add("error_border");
  }
};

// 에러 메시지 삭제
const removeError = (target) => {
  if (target === $emailErrMsg) {
    $emailBox.classList.remove("error_border");
  } else if (target === $passwordErrMsg) {
    $passwordBox.classList.remove("error_border");
  } else if (target === $passwordConfirmErrMsg) {
    $passwordCheckBox.classList.remove("error_border");
  }
  target.textContent = "";
};

// 눈모양 버튼 클릭 시 비밀번호 toggle
const togglePassword = (e) => {
  e.preventDefault();
  const $parentElement = e.target.parentElement;

  if (
    $parentElement.previousElementSibling.getAttribute("type") === "password"
  ) {
    $parentElement.previousElementSibling.setAttribute("type", "text");
    e.target.setAttribute("src", "./image/eye-on.svg");
  } else if (
    $parentElement.previousElementSibling.getAttribute("type") === "text"
  ) {
    $parentElement.previousElementSibling.setAttribute("type", "password");
    e.target.setAttribute("src", "./image/eye-off.svg");
  }
};

export {
  addError,
  removeError,
  togglePassword,
  $emailBox,
  $passwordBox,
  $passwordCheckBox,
  $eyeButton,
  $eyeButtonCheck,
  $emailErrMsg,
  $passwordErrMsg,
  $passwordConfirmErrMsg,
};
