import { EMAIL_PATTERN, PASSWORD_PATTERN } from "./regexp.js";

const ERROR_CLASS_NAME = "items__input--error";

const TEST_ACCOUNT = {
  email: "test@codeit.com",
  pw: "codeit101",
};

const REDIRECT_PATH = "/folder";

const VALUE_EMPTY = "";

const EYE_ICON_PATH = {
  eye_on: "../assets/eye-on.svg",
  eye_off: "../assets/eye-off.svg",
};

const isEmpty = (emailValue) => emailValue === VALUE_EMPTY;

const isValidEmail = (email) => EMAIL_PATTERN.test(email);

const isValidPassword = (password) => PASSWORD_PATTERN.test(password);

export {
  ERROR_CLASS_NAME,
  TEST_ACCOUNT,
  REDIRECT_PATH,
  VALUE_EMPTY,
  EYE_ICON_PATH,
  isEmpty,
  isValidEmail,
  isValidPassword,
};
