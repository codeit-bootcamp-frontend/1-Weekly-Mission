const $authForm = document.querySelector(".form");
const $authInputs = document.querySelectorAll(".form__input-box");
const $authEmail = document.querySelector("#form-email");
const $authPassword = document.querySelector("#form-password");
const $authPasswordCheck = document.querySelector("#form-password-check");
const $togglePasswordButtons = document.querySelectorAll(
  ".form__password-toggle"
);

const ERROR_MSGS = {
  emptyInput: {
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
    text: "비밀번호를 입력해주세요.",
  },
  invalidInput: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    text: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    "password-check": "비밀번호가 일치하지 않아요.",
  },
  invalidLogin: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
  unavailableEmail: {
    email: "이미 사용 중인 이메일입니다.",
  },
};

const ACCOUNT = {
  email: "test@codeit.com",
  password: "codeit101",
};

const EMAIL_PATTERN =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const paintErrorMsg = ({ error, type, target }) => {
  target.classList.add("form__input-box--error");
  const $errorMsg = target.parentElement.querySelector(".error-msg");
  $errorMsg.textContent = ERROR_MSGS[error][type];
};

const removeErrorMsg = (target) => {
  target.classList.remove("form__input-box--error");
  const $errorMsg = target.parentElement.querySelector(".error-msg");
  $errorMsg.textContent = "";
};

const checkEmptyInput = (target) => {
  if (!target.value) {
    paintErrorMsg({
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
    paintErrorMsg({
      error: "invalidInput",
      type: target.type,
      target,
    });
  } else {
    removeErrorMsg(target);
  }
};

const validatePassword = (target) => {
  if (!target.value || !PASSWORD_PATTERN.test(target.value)) {
    paintErrorMsg({
      error: "invalidInput",
      type: target.type,
      target,
    });
  } else {
    removeErrorMsg(target);
  }
};

const isEmailAvailable = (target) => {
  if (!EMAIL_PATTERN.test(target.value)) {
    return;
  }

  if (target.value === ACCOUNT.email) {
    paintErrorMsg({
      error: "unavailableEmail",
      type: target.type,
      target,
    });
  } else {
    removeErrorMsg(target);
  }
};

const checkPasswordMatch = () => {
  if (!$authPassword.value || !$authPasswordCheck.value) {
    return;
  }

  if ($authPassword.value !== $authPasswordCheck.value) {
    paintErrorMsg({
      error: "invalidInput",
      type: "password-check",
      target: $authPasswordCheck,
    });
  } else {
    removeErrorMsg($authPasswordCheck);
  }
};

const togglePasswordVisibility = (event) => {
  event.preventDefault();

  const $passwordInput =
    event.currentTarget.parentElement.querySelector(".form__input-box");
  const $togglePasswordImg = event.currentTarget.parentElement.querySelector(
    ".form__password-toggle img"
  );

  if ($passwordInput.type === "password") {
    $passwordInput.type = "text";
    $togglePasswordImg.src = "/public/icons/eye-on.svg";
  } else {
    $passwordInput.type = "password";
    $togglePasswordImg.src = "/public/icons/eye-off.svg";
  }
};

const handleSigninSubmit = (event) => {
  event.preventDefault();

  if (
    $authEmail.value === ACCOUNT.email &&
    $authPassword.value === ACCOUNT.password
  ) {
    location.href = "/pages/folder.html";
  } else {
    paintErrorMsg({ error: "invalidLogin", type: "email", target: $authEmail });
    paintErrorMsg({
      error: "invalidLogin",
      type: "password",
      target: $authPassword,
    });
  }
};

const handleSignupSubmit = (event) => {
  event.preventDefault();

  checkEmptyInput($authEmail);
  validateEmail($authEmail);
  validatePassword($authPassword);
  isEmailAvailable($authEmail);
  checkPasswordMatch();

  for (const $input of $authInputs) {
    if ($input.classList.contains("form__input-box--error")) {
      return;
    }
  }
  location.href = "/pages/folder.html";
};

const initSignin = () => {
  for (const $input of $authInputs) {
    $input.addEventListener("focusout", ({ target }) =>
      checkEmptyInput(target)
    );
    $input.addEventListener(
      "keypress",
      (event) => event.code === "Enter" && handleSigninSubmit(event)
    );
  }

  $authEmail.addEventListener("focusout", ({ target }) =>
    validateEmail(target)
  );
  $togglePasswordButtons[0].addEventListener("click", togglePasswordVisibility);
  $authForm.addEventListener("submit", handleSigninSubmit);
};

const initSignup = () => {
  for (const $input of $authInputs) {
    $input.addEventListener(
      "keypress",
      (event) => event.code === "Enter" && handleSignupSubmit(event)
    );
  }

  $authEmail.addEventListener("focusout", ({ target }) =>
    checkEmptyInput(target)
  );
  $authEmail.addEventListener("focusout", ({ target }) =>
    validateEmail(target)
  );
  $authPassword.addEventListener("focusout", ({ target }) =>
    validatePassword(target)
  );
  $authEmail.addEventListener("focusout", ({ target }) =>
    isEmailAvailable(target)
  );
  $authPassword.addEventListener("focusout", ({ target }) =>
    checkPasswordMatch(target)
  );
  $authPasswordCheck.addEventListener("focusout", checkPasswordMatch);
  for (const $togglePasswordButton of $togglePasswordButtons) {
    $togglePasswordButton.addEventListener("click", togglePasswordVisibility);
  }
  $authForm.addEventListener("submit", handleSignupSubmit);
};

export { initSignin, initSignup };
