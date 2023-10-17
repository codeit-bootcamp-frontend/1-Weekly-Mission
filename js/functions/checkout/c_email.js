import { reg } from "../../constants/regExp.js";

export const regEmail = (obj) => {
  if (obj.name === 'email' && !reg.email.test(obj.value)) {
    obj.errorType = "typeError";
  }
  return obj
}