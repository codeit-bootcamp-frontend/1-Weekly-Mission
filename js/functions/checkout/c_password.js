import { reg } from "../../constants/regExp.js";
let userPw

export const regPassword = (obj) => {
  if (obj.name === 'password' && !reg.password.test(obj.value)) {
    obj.errorType = "typeError";
  }
  return obj
}

// 비밀번호 일치 확인을 위해서, 비밀번호 input 태그에서 입력값을 저장합니다.
// res 객체에 저장하면, 해당 이벤트가 끝나면 객체가 사라지므로 변수를 이용했습니다.
// scope 문제가 있어서, 전역변수로 userPw을 선언하였습니다.
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