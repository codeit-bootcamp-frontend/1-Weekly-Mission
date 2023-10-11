import { emailInput, passwordInput, confirmPasswordInput } from '../variables.js';
import { users } from '../user.js';
import makeMessage from '../makeMessage.js'
import { isValidPassword, isValidEmail } from '../validate.js';
import { checkPasswordConfirmation } from './confirmPassword.js';
import * as errorConstants from '../errorConstants.js';

export function checkInput (e) {
  const inputEvent = e.target;
  const existsUser = users.some((user) => user.email === emailInput.value);
  let errorMessage;
  

  if (inputEvent === emailInput){
    if (inputEvent.value.length === 0){
      errorMessage = errorConstants.EMPTY_EMAIL;
    } else if (!isValidEmail(inputEvent.value)){
      errorMessage = errorConstants.SHAPE_EMAIL;
    } else if (existsUser){
      errorMessage = errorConstants.USER_EMAIL;
    }
  } else if (inputEvent === passwordInput){
      if (inputEvent.value.length === 0){
        errorMessage = errorConstants.EMPTY_PASSWORD;
      } else if (!isValidPassword(inputEvent.value)){
        errorMessage = errorConstants.SHAPE_PASSWORD;
      }
  } else if (inputEvent === confirmPasswordInput) {
    errorMessage = checkPasswordConfirmation(passwordInput.value, inputEvent.value);
  }
  return makeMessage(inputEvent, errorMessage);
};