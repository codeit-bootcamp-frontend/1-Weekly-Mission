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
    // } else if (e.target.value === "test@codeit.com") {
    //   addError($emailErrMsg, "이미 사용중인 이메일입니다.");
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

const submitForm = async (e) => {
  e.preventDefault();

  if (
    $emailBox.value &&
    $passwordBox.value &&
    $passwordCheckBox.value &&
    !$emailErrMsg.textContent &&
    !$passwordErrMsg.textContent &&
    !$passwordConfirmErrMsg.textContent
  ) {
    try {
      const firstResponse = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: $emailBox.value,
          }),
        }
      );

      const firstResponseStatus = firstResponse.status;
      if (firstResponseStatus === 409) {
        // 사용할 수 없는 중복된 이메일 오류
        addError($emailErrMsg, "이미 사용중인 이메일입니다.");
      } else if (firstResponseStatus === 200) {
        // 중복되지 않은 이메일 확인
        const secondResponse = await fetch(
          "https://bootcamp-api.codeit.kr/api/sign-up",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: $emailBox.value,
              password: $passwordBox.value,
            }),
          }
        );

        const secondResponseStatus = secondResponse.status;
        const result = await secondResponse.json();
        const accessToken = result.data.accessToken;

        if (secondResponseStatus === 200) {
          // 회원가입 성공
          window.location.href = "./folder.html";
          window.localStorage.setItem("accessToken", accessToken);
          setTimeout(() => {
            localStorage.removeItem("accessToken");
          }, 5000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

// 토큰 존재하면 바로 folder로 연결
// if (localStorage.getItem("accessToken")) {
//   location.href = "./folder.html";
// }

$emailBox.addEventListener("blur", setEmailErrorMessage);
$passwordBox.addEventListener("blur", setPasswordErrorMessage);
// 비밀번호 바꿔서 입력 시 오류 생성하도록
$passwordBox.addEventListener("blur", setCheckPasswordErrorMessage);
$passwordCheckBox.addEventListener("blur", setCheckPasswordErrorMessage);

$eyeButton.addEventListener("click", togglePassword);
$eyeButtonCheck.addEventListener("click", togglePassword);

$signForm.addEventListener("submit", submitForm);
