import { validateEmailPattern, validatePasswordPattern } from "./validation.js";
import {
  paintErrorMessage,
  removeErrorMessage,
  ERROR_INPUT_STYLE,
} from "./paintError.js";
import { requestAPI } from "./service.js";

const authForm = document.querySelector(".form");
const authInputs = document.querySelectorAll(".form__input-box");
const authEmail = document.querySelector("#form-email");
const authPassword = document.querySelector("#form-password");
const authPasswordCheck = document.querySelector("#form-password-check");
const togglePasswordButtons = document.querySelectorAll(
  ".form__password-toggle"
);

const ACCOUNT = {
  email: "test@codeit.com",
  password: "codeit101",
};

const checkEmptyInput = (target) => {
  if (!target.value) {
    paintErrorMessage({
      error: "emptyInput",
      type: target.type,
      target,
    });
  } else {
    removeErrorMessage(target);
  }
};

const validateEmail = (target) => {
  if (!target.value) {
    return;
  }

  if (!validateEmailPattern(target.value)) {
    paintErrorMessage({
      error: "invalidInput",
      type: target.type,
      target,
    });
  } else {
    removeErrorMessage(target);
  }
};

const validatePassword = (target) => {
  if (!target.value || !validatePasswordPattern(target.value)) {
    paintErrorMessage({
      error: "invalidInput",
      type: target.type,
      target,
    });
  } else {
    removeErrorMessage(target);
  }
};

const checkEmailAvailability = (target) => {
  if (!validateEmailPattern(target.value)) {
    return;
  }

  if (target.value === ACCOUNT.email) {
    paintErrorMessage({
      error: "unavailableEmail",
      type: target.type,
      target,
    });
  } else {
    removeErrorMessage(target);
  }
};

const checkPasswordMatch = () => {
  if (!authPassword.value || !authPasswordCheck.value) {
    return;
  }

  if (authPassword.value !== authPasswordCheck.value) {
    paintErrorMessage({
      error: "invalidInput",
      type: "passwordCheck",
      target: authPasswordCheck,
    });
  } else {
    removeErrorMessage(authPasswordCheck);
  }
};

const togglePasswordVisibility = (event) => {
  const passwordInput =
    event.currentTarget.parentElement.querySelector(".form__input-box");
  const togglePasswordImg = event.currentTarget.parentElement.querySelector(
    ".form__password-toggle img"
  );

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordImg.src = "/public/icons/eye-on.svg";
  } else {
    passwordInput.type = "password";
    togglePasswordImg.src = "/public/icons/eye-off.svg";
  }
};

const redirect = async () => {
  location.href = "/pages/folder.html";
};

const handleSigninSubmit = async (event) => {
  event.preventDefault();

  const account = { email: authEmail.value, password: authPassword.value };

  try {
    const signinResponse = await requestAPI("sign-in", account);
    if (signinResponse.status === 400) {
      throw new Error("invalidCredentials");
    }
    redirect();
  } catch (error) {
    if (error.message === "invalidCredentials") {
      paintErrorMessage({
        error: "invalidLogin",
        type: "email",
        target: authEmail,
      });
      paintErrorMessage({
        error: "invalidLogin",
        type: "password",
        target: authPassword,
      });
    } else {
      alert("Error");
    }
  }
};

const handleSignupSubmit = (event) => {
  event.preventDefault();

  checkEmptyInput(authEmail);
  validateEmail(authEmail);
  validatePassword(authPassword);
  checkEmailAvailability(authEmail);
  checkPasswordMatch();

  const isValidForm = ![...authInputs].some((input) =>
    input.classList.contains(ERROR_INPUT_STYLE)
  );

  if (isValidForm) {
    redirect();
  }
};

const initSignin = () => {
  for (const input of authInputs) {
    input.addEventListener("focusout", ({ target }) => checkEmptyInput(target));
  }

  authEmail.addEventListener("focusout", ({ target }) => validateEmail(target));
  togglePasswordButtons[0].addEventListener("click", togglePasswordVisibility);
  authForm.addEventListener("submit", handleSigninSubmit);
};

const initSignup = () => {
  authEmail.addEventListener("focusout", ({ target }) =>
    checkEmptyInput(target)
  );
  authEmail.addEventListener("focusout", ({ target }) => validateEmail(target));
  authPassword.addEventListener("focusout", ({ target }) =>
    validatePassword(target)
  );
  authEmail.addEventListener("focusout", ({ target }) =>
    checkEmailAvailability(target)
  );
  authPassword.addEventListener("focusout", ({ target }) =>
    checkPasswordMatch(target)
  );
  authPasswordCheck.addEventListener("focusout", checkPasswordMatch);
  for (const togglePasswordButton of togglePasswordButtons) {
    togglePasswordButton.addEventListener("click", togglePasswordVisibility);
  }
  authForm.addEventListener("submit", handleSignupSubmit);
};

export { initSignin, initSignup };
