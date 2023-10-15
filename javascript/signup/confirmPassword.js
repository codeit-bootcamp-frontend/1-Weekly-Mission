import * as errorConstants from '../errorConstants.js'

export function checkPasswordConfirmation(password, confirmPassword){
  if (confirmPassword.length === 0) {
    return errorConstants.EMPTY_PASSWORD;
  } else if (confirmPassword !== password) {
    return errorConstants.SAME_PASSWORD;
  }
  return null;
};
