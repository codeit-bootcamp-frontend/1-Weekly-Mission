import {
  addError,
  removeError,
  togglePassword,
  $emailBox,
  $passwordBox,
  $eyeButton,
  $emailErrMsg,
  $passwordErrMsg,
} from "./index.js";

const $signForm = document.querySelector("#form");
// 이메일 정규식
const EMAIL_REGEX = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// 이메일 입력
const setEmailErrorMessage = (e) => {
  e.preventDefault();

  if (!e.target.value) {
    // 아무것도 입력하지 않았을 때
    addError($emailErrMsg, "이메일을 입력해주세요.");
  } else if (!EMAIL_REGEX.test(e.target.value) && e.target.value.length > 0) {
    // 이메일 형식에 맞지 않을 때
    addError($emailErrMsg, "올바른 이메일 주소가 아닙니다.");
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
  } else {
    removeError($passwordErrMsg);
  }
};

// form 전송
// const submitForm = (e) => {
//   e.preventDefault();
//   // 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우
//   if (
//     $emailBox.value === "test@codeit.com" &&
//     $passwordBox.value === "codeit101"
//   ) {
//     location.href = "./folder.html";
//   } else {
//     addError($emailErrMsg, "이메일을 확인해주세요.");
//     addError($passwordErrMsg, "비밀번호를 확인해주세요.");
//   }
// };

const submitForm = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: $emailBox.value,
        password: $passwordBox.value,
      }),
    });

    const result = await response.json();
    const accessToken = result.data.accessToken;

    window.location.href = "./folder.html";
    window.localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
    addError($emailErrMsg, "이메일을 확인해주세요.");
    addError($passwordErrMsg, "비밀번호를 확인해주세요.");
  }
};

$emailBox.addEventListener("blur", setEmailErrorMessage);
$passwordBox.addEventListener("blur", setPasswordErrorMessage);

$eyeButton.addEventListener("click", togglePassword);
$signForm.addEventListener("submit", submitForm);
