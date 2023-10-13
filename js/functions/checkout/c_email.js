import { reg } from "../../constants/regExp.js";
import { dev } from "../../constants/account.js";

export const regEmail = (obj) => {
  if (obj.name === 'email' && !reg.email.test(obj.value)) {
    obj.errorType = "typeError";
  }
  return obj
}

export const isAvailableEmail = (obj) => {
  if (obj.name === 'email' && obj.value === dev.email) {
    obj.errorType = "occupiedError"
  }
  return obj
}

export const isVaildEmail = (obj) => {
  if (obj.value !== dev.email) obj.errorType = 'invaildError';
  return obj
}