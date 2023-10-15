import {
  reset,
  eyeOnOff,
  displayError,
  checkerEmail,
  postInputs,
  isIncludePassword,
} from "./util.js";

const $emailInput = document.querySelector("#email");

/* postInputs 함수를 이용하여 중복되는 이메일 체크하고 싶었으나, 계속 오류가 생겨 어쩔 수 없이
    이와 같이 구현하였습니다. 이 문제를 해결하는 방법이 궁금합니다.*/

function checkerUsingEmail(e) {
  postInputs("https://bootcamp-api.codeit.kr/api/check-email", {
    email: $emailInput.value,
  })
    .then((response) => {
      if (response.status === 409) {
        displayError(e, "중복되는 이메일입니다.");
      } else {
        return;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const $passwordInput = document.querySelector("#password");
const passArray = [...$passwordInput.value];

function isValidPassword(e) {
  if (!isIncludePassword(passArray)) {
    displayError(e, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
  }
}

const $rePasswordInput = document.querySelector("#rePassword");

function matchPassword(e) {
  if ($passwordInput.value === $rePasswordInput.value) {
    return;
  }
  displayError(e, "비밀번호가 일치하지 않아요");
}

const $eyeOff2 = document.querySelector(".eye-button.second");

const $signBtn = document.querySelector(".cta");

async function signUpAftercheckingError(e) {
  const $errorTextList = document.querySelectorAll("warning-text");

  if ($errorTextList.length !== 0) {
    return;
  }

  if (e.key === "Enter" || e.type === "click") {
    e.preventDefault();

    const userProfiles = {
      email: $emailInput.value,
      password: $passwordInput.value,
    };

    postInputs("https://bootcamp-api.codeit.kr/api/sign-up", userProfiles)
      .then(async (response) => {
        if (response.ok) {
          const { data } = await response.json();
          localStorage.setItem("access-token", data.accessToken);
          const link = "../folder.html";
          window.location.assign(link);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

$emailInput.addEventListener("focusout", checkerEmail);
$emailInput.addEventListener("change", checkerUsingEmail);
$emailInput.addEventListener("focusin", reset);

$passwordInput.addEventListener("focusout", isValidPassword);
$passwordInput.addEventListener("focusin", reset);

$rePasswordInput.addEventListener("focusout", matchPassword);
$rePasswordInput.addEventListener("focusin", reset);

$signBtn.addEventListener("click", signUpAftercheckingError);
$rePasswordInput.addEventListener("keypress", signUpAftercheckingError);
$eyeOff2.addEventListener("click", eyeOnOff);
