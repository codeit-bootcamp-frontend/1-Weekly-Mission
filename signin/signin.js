import {
  $email,
  $password,
  $form,
  $pwInvisible,
  $emailErrorMsg,
  $passwordErrorMsg,
  showEmailError,
  deleteEmailError,
  showPasswordError,
  deletePasswordError,
  togglePwVisibility,
} from "../assets/js/sign_common.js";

// HTML tag를 담는 변수는 앞에 $를 붙임
$emailErrorMsg.classList.add("email-error-msg");
$passwordErrorMsg.classList.add("password-error-msg");
$email.after($emailErrorMsg);
$password.after($passwordErrorMsg);

const checkEmailInput = (event) => {
  // 이메일 validation 정규표현식
  const EMAIL_REG_EXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  event.preventDefault();
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    showEmailError("void");
  } else if (!EMAIL_REG_EXP.test(event.target.value)) {
    // 이메일 정규표현식 test시 false값 출력의 경우
    showEmailError("typo");
  } else {
    deleteEmailError();
  }
};

const checkPasswordInput = (event) => {
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    showPasswordError("void");
  } else {
    deletePasswordError();
  }
};

const checkAdminAccount = async () => {
  const codeitAccount = {
    email: $email.value,
    password: $password.value,
  };
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(codeitAccount),
  });
  const responseStatus = response.status;
  const result = await response.json();
  const accessToken = result.data.accessToken;
  if (responseStatus === 200) {
    // admin 계정으로 로그인 시 'folder/' 로 이동
    window.location.href = "../folder/index.html";
    window.localStorage.setItem("accessToken", accessToken);
  } else {
    showEmailError("wrong");
    showPasswordError("wrong");
  }
};

const emailInputEventHandler = (event) => {
  event.preventDefault();
  checkEmailInput(event);
};

const passwordInputEventHandler = (event) => {
  checkPasswordInput(event);
};

const formSubmitEventHandler = (event) => {
  event.preventDefault();
  checkAdminAccount();
};

const pwInvisibleEventHandler = (event) => {
  togglePwVisibility(event);
};

$email.addEventListener("blur", emailInputEventHandler);
$password.addEventListener("blur", passwordInputEventHandler);
$form.addEventListener("submit", formSubmitEventHandler);
$pwInvisible.addEventListener("click", pwInvisibleEventHandler);
