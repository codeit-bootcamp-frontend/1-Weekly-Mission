import {inputEmail,inputPassword,errorEmail,errorPassword} from './tags.js'
import { errorStyle, removeErrorStyle } from "./errorMessage.js";

const moveToFolderPage = () => {window.location.href = '../../folder.html'}

function USER_INPUT_VALUES () {
  const EMAIL = inputEmail.value;
  const PASSWORD = inputPassword.value; 
  const user = {email : EMAIL, password : PASSWORD}
  return user
}

function requestSettings(obj){
  const requestContents = {
    method : 'POST',
    headers : {
      'content-type' : 'application/json',
    },
    body : JSON.stringify(obj)
  }
  return requestContents
}


async function handleLogin() {
  const userData = USER_INPUT_VALUES()
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',requestSettings(userData));
    const accessToken = await response.json()
    if (response.status === 200){
      removeErrorStyle(inputEmail, errorEmail)
      removeErrorStyle(inputPassword, errorPassword)
      return moveToFolderPage()
    } 
    errorStyle(inputEmail, errorEmail, "이메일을 확인해주세요")
    errorStyle(inputPassword, errorPassword, "비밀번호를 확인해주세요")
    
  } catch(err){
    console.log(err)
  }
}

export default handleLogin