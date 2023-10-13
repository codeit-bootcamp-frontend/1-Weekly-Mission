import { inputEmail, inputPassword } from "./tags.js";

function USER_INPUT_VALUES () {
  const EMAIL = inputEmail.value;
  const PASSWORD = inputPassword.value; 
  const user = {email : EMAIL, password : PASSWORD}
  return user
}

function USER_INPUT_ID () {
  const EMAIL = inputEmail.value;
  const userId = {email : EMAIL}
  return userId
}

function requestSettings(method,obj){
  const requestContents = {
    method : method,
    headers : {
      'content-type' : 'application/json',
    },
    body : JSON.stringify(obj)
  }
  return requestContents
}

export {USER_INPUT_VALUES,  USER_INPUT_ID, requestSettings}