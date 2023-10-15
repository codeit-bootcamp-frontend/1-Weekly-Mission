const $email = document.querySelector(".email-input");
const $password = document.querySelector(".password-input");
const $passwordConfirm = document.querySelector(".passwordConfirm-input");
const $passwordEye = document.querySelector("#password-toggle");
const $passwordConfirmEye = document.querySelector("#password-check-toggle");
const $emailErrorMessage = document.querySelector(".email-error-message");
const $passwordErrorMessage = document.querySelector(".password-error-message");
const $passwordConfirmErrorMessage = document.querySelector(
  ".passwordConfirm-error-message"
);
const $signForm = document.querySelector(".sign-form");

let eyeOn = false;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const API = "https://bootcamp-api.codeit.kr/api";

const checkEmailValidation = (event) => {
  if (event.target.value === "") {
    $emailErrorMessage.style.display = "block";
    $emailErrorMessage.textContent = "이메일을 입력해주세요";
    $email.classList.add("border-red");
    return false;
  } else if (!EMAIL_REGEX.test(event.target.value)) {
    $emailErrorMessage.style.display = "block";
    $emailErrorMessage.textContent = "올바른 이메일을 입력해주세요";
    $email.classList.add("border-red");
    return false;
  } else {
    $emailErrorMessage.style.display = "none";
    $email.classList.remove("border-red");
    return true;
  }
};

const checkPasswordValidation = (event) => {
  if (event.target.value === "") {
    $passwordErrorMessage.style.display = "block";
    $passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
    $password.classList.add("border-red");
    return false;
  } else if (!PASSWORD_REGEX.test(event.target.value)) {
    $passwordErrorMessage.style.display = "block";
    $passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    $password.classList.add("border-red");
    return false;
  } else {
    $passwordErrorMessage.style.display = "none";
    $passwordCheck.classList.remove("border-red");
    return true;
  }
};

const checkPasswordConfirmValidation = (event) => {
  if (event.target.value === password.value) {
    $passwordConfirmErrorMessage.style.display = "none";
    $passwordConfirm.classList.remove("border-red");
    return true;
  } else {
    $passwordConfirmErrorMessage.style.display = "block";
    $passwordConfirmErrorMessage.textContent = "비밀번호가 일치하지 않아요";
    $passwordConfirm.classList.add("border-red");
    return false;
  }
};

const togglePassword = (input, toggleButton) => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton
      .getElementsByTagName("img")[0]
      .setAttribute("src", "/assets/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton
    .getElementsByTagName("img")[0]
    .setAttribute("src", "/assets/eye-off.svg");
};

const submitForm = (event) => {
  event.preventDefault();
  const isVaildUser =
    email.value === TEST_USER.email && password.value === TEST_USER.password;
  if (isVaildUser) {
    location.href = "/pages/folder.html";
    return;
  }
};

$email.addEventListener("focusout", checkEmailValidation);
$password.addEventListener("focusout", checkPasswordValidation);
$passwordConfirm.addEventListener("focusout", checkPasswordConfirmValidation);
$passwordEye.addEventListener("click", () =>
  togglePassword(password, passwordEye)
);
$passwordConfirmEye.addEventListener("click", () =>
  togglePassword(passwordConfirm, passwordEye)
);
$signForm.addEventListener("submit", submitForm);
