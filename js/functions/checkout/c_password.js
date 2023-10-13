import { reg } from "../../constants/regExp.js";
let userPw

export const regPassword = (obj) => {
  if (obj.name === 'password' && !reg.password.test(obj.value)) {
    obj.errorType = "typeError";
  }
  return obj
}

export const savePassword = (obj) => {
  if (obj.name === 'password') userPw = obj.value;
  return obj
}

export const isMatchedPassword = (obj) => {
  if (obj.name === 'passwordCheck' && obj.value !== userPw) {
    obj.errorType = "invaildError"
  }
  return obj
}