import {inputEmail,inputPassword,errorEmail,errorPassword} from './tags.js'
import { errorStyle, removeErrorStyle } from "./errorMessage.js";
import {USER_INPUT_VALUES,requestSettings} from "./requestSettings.js"
const moveToFolderPage = () => {window.location.href = '../../folder.html'}

async function handleLogin() {
  const userData = USER_INPUT_VALUES()
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',requestSettings('POST',userData));
    const result = await response.json()
    window.localStorage.setItem('signInToken',result.data.accessToken)
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