import { emailInput, passwordInput } from '../variables.js';
import makeMessage from '../makeMessage.js'
import { isValidPassword, isValidEmail } from '../validate.js';
import * as errorConstants from '../errorConstants.js';

export function checkInput(e){
  const inputTarget = e.target;
  let errorMessage;

  if (inputTarget === emailInput){
    if (inputTarget.value.length === 0){
      errorMessage = errorConstants.EMPTY_EMAIL;
    } else if (!isValidEmail(inputTarget.value)){
      errorMessage = errorConstants.SHAPE_EMAIL;
    } 
  } else if (inputTarget === passwordInput){
      if (inputTarget.value.length === 0){
        errorMessage = errorConstants.EMPTY_PASSWORD;
      } else if (!isValidPassword(inputTarget.value)){
        errorMessage = errorConstants.SHAPE_PASSWORD;
      }
  } 
  return makeMessage(inputTarget, errorMessage);
};