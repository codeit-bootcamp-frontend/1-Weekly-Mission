import { pipe } from "../default.js";
import { isValue, printError, locator } from "./c_common.js";
import { regEmail } from "./c_email.js";
import { common_preventDefault } from "./c_mixin_common.js";

// 버튼을 눌러 submit 했을때, 모든 input 태그를 검증하는 함수입니다.
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

// 이메일을 입력하는 input 태그에 focusout 했을때,
// 값 확인 -> 이메일 형태 확인 순으로 검증합니다.
export const signin_email = pipe(
  locator,
  isValue,
  printError,
  regEmail,
  printError
)

// 비밀번호을 입력하는 input 태그에 focusout 했을때,
// 값 확인 -> 비밀번호 형태 확인 순으로 검증합니다.
export const signin_password = pipe(
  locator,
  isValue,
  printError
)

// 버튼을 눌러 submit 했을때,
// 새로고침 현상을 막고, 모든 input 태그의 값을 확인하는 함수입니다.
export const signin_submit = pipe(
  locator,
  common_preventDefault,
  signin_allCheck,
)