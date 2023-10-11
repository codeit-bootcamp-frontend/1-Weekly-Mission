import { users } from "../user.js";
// import { checkInput } from "./checkinput.js";
import { emailInput , passwordInput} from "../valiable.js";
const findUser = users.some((user) => user.email === emailInput.value && user.password === passwordInput.value);

function login(e){
  if (findUser){
    location.href = '/index.html';
  } 
  // else {
  //   checkInput()
  // }
  e.preventDefault();
};

function loginEnter(e){
  if (findUser && e.key === 'Enter'){
    login()
  } 
};

export {login, loginEnter};