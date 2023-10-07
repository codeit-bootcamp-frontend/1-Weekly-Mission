import { USER_DATA } from "./userData.js";

function isNotEmailEmpty(email){
  const isNotEmpty = !(email.length === 0);
  return isNotEmpty ? true : false
}

function isValidEmail(email){
  const EMAIL_REGEX = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
  const isValid = EMAIL_REGEX.test(email.trim());
  return isValid ? true : false
}

function isEmailAvailable(email){
  const usersID = []
  for (let i in USER_DATA){
    usersID.push(USER_DATA[i].Email)
  }
  const isAvailable = !(usersID.includes(email))
  return isAvailable ? true : false
}

export {isNotEmailEmpty, isValidEmail , isEmailAvailable}


