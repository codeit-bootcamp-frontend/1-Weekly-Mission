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

export const isVaildPassword = (obj) => {
  if (obj.value !== dev.password) obj.errorType = 'invaildError';
  return obj
}