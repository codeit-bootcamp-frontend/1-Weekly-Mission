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

import { fetchClient } from "./api.js";

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

const submitForm = async (e) => {
  e.preventDefault();

  try {
    const clientAccount = {
      email: $emailBox.value,
      password: $passwordBox.value,
    };

    const response = await fetchClient("sign-in", "POST", clientAccount);
    const { data } = await response.json();

    // 로그인 성공

    if (response.status === 200) {
      window.localStorage.setItem("accessToken", data.accessToken);
    }
  } catch (error) {
    // 로그인 오류
    addError($emailErrMsg, "이메일을 확인해주세요.");
    addError($passwordErrMsg, "비밀번호를 확인해주세요.");
  }
};

// 토큰 존재하면 바로 folder로 연결
if (localStorage.getItem("accessToken")) {
  location.href = "./folder.html";
}

$emailBox.addEventListener("blur", setEmailErrorMessage);
$passwordBox.addEventListener("blur", setPasswordErrorMessage);

$eyeButton.addEventListener("click", togglePassword);
$signForm.addEventListener("submit", submitForm);
