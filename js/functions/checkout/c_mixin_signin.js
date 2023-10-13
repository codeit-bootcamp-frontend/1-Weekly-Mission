import { pipe } from "../default.js";
import { isValue, printError, locator } from "./c_common.js";
import { regEmail } from "./c_email.js";
import { common_preventDefault } from "./c_mixin_common.js";


const signin_allCheck = (obj) => {
  for (const $input of obj.inputs) {
    switch ($input.name) {
      case 'email':
        signin_email($input);
        break;
      case 'password':
        signin_password($input);
        break;
    }
  }
  return obj
}

export const signin_email = pipe(
  locator,
  isValue,
  printError,
  regEmail,
  printError
)

export const signin_password = pipe(
  locator,
  isValue,
  printError
)

export const signin_submit = pipe(
  locator,
  common_preventDefault,
  signin_allCheck,
)