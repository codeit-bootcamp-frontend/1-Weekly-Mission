import { emailInput, passwordInput } from '../valiable.js';
import makeMsg from '../makemsg.js'
import { isvalidPassword, isvalidEmail } from '../validate.js';



export function checkInput (e, err) {
  if (e.target === emailInput){
    if (e.target.value.length === 0){
      err = 'emptyEmail';
    } else if (!isvalidEmail(e.target.value)){
      err = 'shapeEmail';
    } 
  } else if (e.target === passwordInput){
      if (e.target.value.length === 0){
        err = 'emptyPassword';
      } else if (!isvalidPassword(e.target.value)){
        err = 'shapePassword';
      }
  } 
  return makeMsg(e.target, err);
};