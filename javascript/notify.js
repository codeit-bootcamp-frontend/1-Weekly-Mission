import { emailInput, passwordInput } from './valiable.js';
import { isvalidEmail } from './validateEmail.js';
import { users } from './user.js';
import errMsg from './makemsg.js';



export function checkInput (e) {
  const findUser = users.some((user) => user.email === emailInput.value);

  if (e.target.value.length === 0){
    if (e.target === emailInput){
        makeMsg(e.target, errMsg.emptyEmail);
      } else if (e.target === passwordInput){
        makeMsg(e.target, errMsg.emptyPassword);
      }
    } else if (!isvalidEmail(e.target.value)){
        makeMsg(e.target, errMsg.shapeEmail);
    } else if (!findUser){
        makeMsg(e.target, errMsg.emptyPassword); 
    }
}; 
