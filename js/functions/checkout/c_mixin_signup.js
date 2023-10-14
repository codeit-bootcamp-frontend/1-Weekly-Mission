import { pipe } from "../default.js";
import { locator, isValue, printError, isError } from "./c_common.js";
import { regEmail } from "./c_email.js";
import { regPassword, savePassword, isMatchedPassword } from "./c_password.js";
import { common_preventDefault } from "./c_mixin_common.js";

// 버튼을 눌러 submit 했을때, 모든 input 태그를 검증하는 함수입니다.
// 내부에서 사용하는 함수가 달라서 signin 과 분리했습니다.
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
)