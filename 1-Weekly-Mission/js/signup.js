import {
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
} from "./index.js";

const $signForm = document.querySelector("#form");

// 이메일 정규식
const EMAIL_REGEX = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
// 비밀번호 정규식(영문, 숫자 포함 8자 이상)
const PASSWORD_REGEX = new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{8,}$");

// 이메일 입력
const setEmailErrorMessage = (e) => {
  e.preventDefault();

  if (!e.target.value) {
    // 아무것도 입력하지 않았을 때
    addError($emailErrMsg, "이메일을 입력해주세요.");
  } else if (!EMAIL_REGEX.test(e.target.value) && e.target.value.length > 0) {
    // 이메일 형식에 맞지 않을 때
    addError($emailErrMsg, "올바른 이메일 주소가 아닙니다.");
  } else if (e.target.value === "test@codeit.com") {
    addError($emailErrMsg, "이미 사용중인 이메일입니다.");
  } else {
    removeError($emailErrMsg);
  }
};

// 비밀번호 입력
const setPasswordErrorMessage = (e) => {
  e.preventDefault();

  if (!e.target.value) {
    // 아무것도 입력하지 않았을 때
    addError($passwordErrMsg, "비밀번호를 입력해주세요.");
  } else if (!PASSWORD_REGEX.test(e.target.value)) {
    addError(
      $passwordErrMsg,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  } else {
    removeError($passwordErrMsg);
  }
};

// 비밀번호 확인
const setCheckPasswordErrorMessage = (e) => {
  e.preventDefault();

  if (
    $passwordBox.value !== $passwordCheckBox.value &&
    $passwordCheckBox.value
  ) {
    // 비밀번호 input과 비밀번호 확인 input값이 다른 경우
    addError($passwordConfirmErrMsg, "비밀번호가 일치하지 않아요.");
  } else {
    removeError($passwordConfirmErrMsg);
  }
};

// form 전송
// const submitForm = (e) => {
//   e.preventDefault();
//   // 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우
//   if (
//     $emailBox.value &&
//     $passwordBox.value &&
//     $passwordCheckBox.value &&
//     !$emailErrMsg.value &&
//     !$passwordErrMsg.value &&
//     !$passwordConfirmErrMsg.value
//   ) {
//     location.href = "./folder.html";
//   }
//   // else {
//   //   setEmailErrorMessage(e);
//   //   setPasswordErrorMessage(e);
//   //   setCheckPasswordErrorMessage(e);
//   // }
// };

const submitForm = async (e) => {};

$emailBox.addEventListener("blur", setEmailErrorMessage);
$passwordBox.addEventListener("blur", setPasswordErrorMessage);
// 비밀번호 바꿔서 입력 시 오류 생성하도록
$passwordBox.addEventListener("blur", setCheckPasswordErrorMessage);
$passwordCheckBox.addEventListener("blur", setCheckPasswordErrorMessage);

$eyeButton.addEventListener("click", togglePassword);
$eyeButtonCheck.addEventListener("click", togglePassword);
$signForm.addEventListener("submit", submitForm);
