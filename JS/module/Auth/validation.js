import { inputEmail, errorEmail, inputPassword, errorPassword, inputPassword2, errorPassword2} from "./variables.js";
import { removeErrorStyle, errorStyle, EMAIL_EMPTY,EMAIL_NOT_VALID,EMAIL_OCCUPIED,PASSWORD_EMPTY,PASSWORD_NOT_SAME,PASSWORD_NOT_VALID } from "./errorStyle.js";
import { checkFormEmpty, checkEmailValid, checkPasswordValid,checkStringSame,checkEmailAvailable} from "./conditions.js";

export function emailValidationSignIn(){
  const email = inputEmail.value;
  if (!checkFormEmpty(email))
    return errorStyle(inputEmail, errorEmail,EMAIL_EMPTY)
  else if (!checkEmailValid(email)) {
    return errorStyle(inputEmail, errorEmail, EMAIL_NOT_VALID)
  } else {
    return true
  }
}

export function passwordValidationSignIn(){
  const password = inputPassword.value;
  if (!checkFormEmpty(password)){
  errorStyle(inputPassword, errorPassword, PASSWORD_EMPTY)
  return false
  }
  return true
}

export async function emailValidationSignUp() {
  const email = inputEmail.value;
  if (!checkFormEmpty(email)) {
    return errorStyle(inputEmail,errorEmail,EMAIL_EMPTY);
  } else if (!checkEmailValid(email)) {
    return errorStyle(inputEmail,errorEmail,EMAIL_NOT_VALID);
  } else if (!await checkEmailAvailable()) {
    return errorStyle(inputEmail,errorEmail,EMAIL_OCCUPIED);
  } else {
    removeErrorStyle(inputEmail, errorEmail);
    return true;
  }
}

export function passwordValidationSignUp() {
  const password = inputPassword.value;
  if (!checkFormEmpty(password)) {
    return errorStyle(inputPassword,errorPassword,PASSWORD_EMPTY);
  }
  if (!checkPasswordValid(password)) {
    return errorStyle(inputPassword,errorPassword,PASSWORD_NOT_VALID);
  }
  removeErrorStyle(inputPassword, errorPassword);
  return true;
}

export function password2ValidationSignUp() {
  const password = inputPassword.value;
  const password2 = inputPassword2.value;
  if (!checkFormEmpty(password2)) {
    return errorStyle(inputPassword2,errorPassword2,PASSWORD_EMPTY);
  } else if (!checkStringSame(password, password2)) {
    return errorStyle(inputPassword2,errorPassword2,PASSWORD_NOT_SAME);
  }
  removeErrorStyle(inputPassword2, errorPassword2);
  return true;
}

