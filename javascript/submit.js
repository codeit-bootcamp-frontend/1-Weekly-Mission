import { users } from "./user.js";
import { checkInput } from "./notify";
const findUser = users.some((user) => user.email === emailInput.value && user.password === passwordInput.value);

export function login(e){
  if (findUser){
    e.target.setAttribute('href', '/folder')
  } else {
    checkInput()
  }
  e.preventDefault();
}