import { pipe } from "../default";
import { locator, isValue, printError, isError } from "./c_common";
import { regEmail, isAvailableEmail } from "./c_email";
import { regPassword, isMatchedPassword } from "./c_password";
import { common_password } from "./c_mixin_common";

export const signup_allCheck = (obj) => {
  for (const $input of obj.inputs) {
    switch ($input.name) {
      case 'email':
        signup_email($input);
        break;
      case 'password':
        common_password($input);
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

export const signup_passwordCheck = pipe(
  locator,
  isValue,
  printError,
  regPassword,
  printError,
  isMatchedPassword,
  printError
)

export const signup_sumbit = pipe(
  locator,
  signup_allCheck,
  isError,
  goToFolder
)

