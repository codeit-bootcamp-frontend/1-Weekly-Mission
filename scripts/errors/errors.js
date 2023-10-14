//<입력하는 동안에는 에러메시지 안 보이게 하기 >
import { emailErrorMessage } from "../constants.js";

function errorMessageStop() {
  emailErrorMessage.style.display = "none";
}
//<에러가 발생한 경우 CSS속성 정리>>
function addErrorStyle(inputElement, errorMessageElement, errorMessage) {
  inputElement.style.border = "1px solid red";
  errorMessageElement.style.display = "block";
  errorMessageElement.textContent = errorMessage;
}
function removeErrorStyle(inputElement, errorMessageElement, errorMessage) {
  inputElement.style.border = "1px solid #ccd5e3";
  errorMessageElement.style.display = "none";
  errorMessageElement.textContent = errorMessage;
}

export { errorMessageStop, addErrorStyle, removeErrorStyle };
