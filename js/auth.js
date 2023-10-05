const formInputs = document.querySelectorAll(".form__input-box");
const formEmail = document.querySelector("#form-email");
const formPassword = document.querySelector("#form-password");
const formSubmit = document.querySelector(".form__submit");
const togglePasswordButton = document.querySelector(".form__password-toggle");
const togglePasswordImg = document.querySelector(".form__password-toggle img");

const ERROR_MSGS = {
  emptyInput: {
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
    text: "비밀번호를 입력해주세요.",
  },
  invalidInput: {
    email: "올바른 이메일 주소가 아닙니다.",
  },
  invalidLogin: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
};

const ACCOUNT = {
  email: "test@codeit.com",
  password: "codeit101",
};

const EMAIL_PATTERN =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const init = () => {
  for (const input of formInputs) {
    input.addEventListener("focusout", checkEmptyInput);
  }

  formEmail.addEventListener("focusout", validateEmail);
  formSubmit.addEventListener("click", signin);
  togglePasswordButton.addEventListener("click", togglePasswordVisibility);
};

const printErrorMsg = ({ error, type, target }) => {
  target.classList.add("form__input-box__error");
  const errorMsg = target.parentElement.querySelector(".error-msg");
  errorMsg.textContent = ERROR_MSGS[error][type];
  errorMsg.style.display = "block";
  target.after(errorMsg);
};

const removeErrorMsg = (target) => {
  target.classList.remove("form__input-box__error");
  const errorMsg = target.parentElement.querySelector(".error-msg");
  errorMsg.style.display = "none";
};

const checkEmptyInput = (event) => {
  if (!event.target.value) {
    printErrorMsg({
      error: "emptyInput",
      type: event.target.type,
      target: event.target,
    });
  } else {
    removeErrorMsg(event.target);
  }
};

const validateEmail = (event) => {
  if (!event.target.value) {
    return;
  }

  if (!EMAIL_PATTERN.test(event.target.value)) {
    printErrorMsg({
      error: "invalidInput",
      type: event.target.type,
      target: event.target,
    });
  }
};

const signin = (event) => {
  event.preventDefault();
  if (
    ACCOUNT.email === formEmail.value &&
    ACCOUNT.password === formPassword.value
  ) {
    location.href = "/pages/folder.html";
  } else {
    printErrorMsg({ error: "invalidLogin", type: "email", target: formEmail });
    printErrorMsg({
      error: "invalidLogin",
      type: "password",
      target: formPassword,
    });
  }
};

const togglePasswordVisibility = (event) => {
  event.preventDefault();
  if (formPassword.type === "password") {
    formPassword.type = "text";
    togglePasswordImg.src = "/public/icons/eye-on.svg";
  } else {
    formPassword.type = "password";
    togglePasswordImg.src = "/public/icons/eye-off.svg";
  }
};

init();
