import { emailInput, passwordInput, repasswordInput } from '../valiable.js';
import { users } from '../user.js';
import makeMsg from '../makemsg.js'
import { isvalidPassword, isvalidEmail } from '../validate.js';




export function checkInput (e) {
  const findUser = users.some((user) => user.email === emailInput.value);
  var err;

  if (e.target === emailInput){
    if (e.target.value.length === 0){
      err = 'emptyEmail';
    } else if (!isvalidEmail(e.target.value)){
      err = 'shapeEmail';
    } else if (findUser){
      err = 'userEmail'; 
    }
  } else if (e.target === passwordInput){
      if (e.target.value.length === 0){
        err = 'emptyPassword';
      } else if (!isvalidPassword(e.target.value)){
        err = 'shapePassword';
      }
  } else if (e.target === repasswordInput){
      if (e.target.value.length === 0){
        err = 'emptyPassword';
      }
      else if (e.target.value !== passwordInput.value) {
        err = 'samePassword';
      }
  }
  return makeMsg(e.target, err);
};