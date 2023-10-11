import { pipe } from "../default.js";
import { locator, isValue, printError, isError } from "./c_common.js";
import { regEmail, isAvailableEmail } from "./c_email.js";
import { regPassword, savePassword, isMatchedPassword } from "./c_password.js";
import { common_preventDefault } from "./c_mixin_common.js";

export const signup_allCheck = (obj) => {
  for (const $input of obj.inputs) {
    switch ($input.name) {
      case 'email':
        signup_email($input);
        break;
      case 'password':
        signup_password($input);
        break;
      case 'passwordCheck':
        signup_passwordCheck($input);
        break;
    }
  }
  return obj
}

export const signup_email = pipe(
  locator,
  isValue,
  printError,
  regEmail,
  printError,
  isAvailableEmail,
  printError
)

export const signup_password = pipe(
  locator,
  isValue,
  printError,
  regPassword,
  printError,
  savePassword,
)

export const signup_passwordCheck = pipe(
  locator,
  isValue,
  printError,
  isMatchedPassword,
  printError
)

export const signup_sumbit = pipe(
  locator,
  common_preventDefault,
  signup_allCheck,
  isError,
  // goToFolder
)