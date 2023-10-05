const authInputs = document.querySelectorAll(".form__input-box");
const authEmail = document.querySelector("#form-email");
const authPassword = document.querySelector("#form-password");
const authPasswordCheck = document.querySelector("#form-password-check");
const authSubmit = document.querySelector(".form__submit");
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

const checkEmptyInput = (target) => {
  if (!target.value) {
    printErrorMsg({
      error: "emptyInput",
      type: target.type,
      target,
    });
  } else {
    removeErrorMsg(target);
  }
};

const validateEmail = (target) => {
  if (!target.value) {
    return;
  }

  if (!EMAIL_PATTERN.test(target.value)) {
    printErrorMsg({
      error: "invalidInput",
      type: target.type,
      target,
    });
  }
};

const validatePassword = (target) => {
  if (!target.value) {
    return;
  }
};

const togglePasswordVisibility = (event) => {
  event.preventDefault();
  if (authPassword.type === "password") {
    authPassword.type = "text";
    togglePasswordImg.src = "/public/icons/eye-on.svg";
  } else {
    authPassword.type = "password";
    togglePasswordImg.src = "/public/icons/eye-off.svg";
  }
};

const signin = (event) => {
  event.preventDefault();
  if (
    ACCOUNT.email === authEmail.value &&
    ACCOUNT.password === authPassword.value
  ) {
    location.href = "/pages/folder.html";
  } else {
    printErrorMsg({ error: "invalidLogin", type: "email", target: authEmail });
    printErrorMsg({
      error: "invalidLogin",
      type: "password",
      target: authPassword,
    });
  }
};

const initSignin = () => {
  for (const input of authInputs) {
    input.addEventListener("focusout", ({ target }) => checkEmptyInput(target));
  }

  authEmail.addEventListener("focusout", ({ target }) => validateEmail(target));
  authSubmit.addEventListener("click", signin);
  togglePasswordButton.addEventListener("click", togglePasswordVisibility);
};

const initSignup = () => {};

export { initSignin, initSignup };
