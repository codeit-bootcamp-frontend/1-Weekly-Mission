import {USER_DATA} from "./userData.js";
import { $inputEmail , $errorEmail , $inputPassword, $errorPassword } from "./tags.js";
import { errorStyle, removeErrorStyle } from "./errorStyle.js";

const USER_ID = USER_DATA.id1.email;
const USER_PASSWORD = USER_DATA.id1.password;

function isValidAccount(){
  const isValid = $inputEmail.value === USER_ID && $inputPassword.value === USER_PASSWORD;
  if (isValid){
    removeErrorStyle($inputEmail, $errorEmail)
    removeErrorStyle($inputPassword, $errorPassword)
    window.location.href = '../folder.html';
  } else {
    errorStyle($inputEmail, $errorEmail, "이메일을 확인해주세요")
    errorStyle($inputPassword, $errorPassword, "비밀번호를 확인해주세요")
  } 
}

export default isValidAccount