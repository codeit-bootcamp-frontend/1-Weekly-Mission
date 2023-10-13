const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const signButton = document.querySelector(".sign-form");
const passwordEye = document.querySelector("#password-toggle");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const passwordConfirmErrorMessage = document.querySelector(
  ".passwordCheck-error-message"
);

let eyeOn = false;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

const checkEmailValidation = (event) => {
  if (event.target.value === "") {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이메일을 입력해주세요";
    email.classList.add("border-red");
  } else if (!EMAIL_REGEX.test(event.target.value)) {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "올바른 이메일을 입력해주세요";
    email.classList.add("border-red");
  } else {
    emailErrorMessage.style.display = "none";
    email.classList.remove("border-red");
  }
};

const checkPasswordValidation = (event) => {
  if (event.target.value === "") {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
    password.classList.add("border-red");
  } else if (!PASSWORD_REGEX.test(event.target.value)) {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    password.classList.add("border-red");
  } else {
    passwordErrorMessage.style.display = "none";
    passwordCheck.classList.remove("border-red");
  }
};

const submitForm = (event) => {
  event.preventDefault();
  if (
    email.value === TEST_USER.email &&
    password.value === TEST_USER.password
  ) {
    location.href = "/pages/folder.html";
  } else {
    checkEmailError();
    checkPasswordError();
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

email.addEventListener("focusout", checkEmailValidation);
password.addEventListener("focusout", checkPasswordValidation);
passwordEye.addEventListener("click", () =>
  togglePassword(password, passwordEye)
);
signButton.addEventListener("submit", submitForm);
