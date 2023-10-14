import { inputEmail, errorEmail, inputPassword, errorPassword, inputPassword2, errorPassword2, emailWrapper, submitBtn, eyes} from "../module/Auth/variables.js";
import { removeErrorStyle} from "../module/Auth/errorStyle.js";
import { USER_INPUT_VALUES, requestSettings } from "../module/Auth/requestSettings.js";
import { emailValidationSignUp, passwordValidationSignUp, password2ValidationSignUp} from "../module/Auth/validation.js";
import { checkErrorMessagesExist } from "../module/Auth/conditions.js";

// 로컬 스토리지에 이미 accessToken이 있다면 자동으로 folder로 이동
const moveToFolderPage = () => {window.location.href = '../folder.html'}
window.addEventListener('load',() => {
  if (Object.keys(window.localStorage).includes('signUpToken')){
    moveToFolderPage()
  }
})

// [form input box 유효성 검사]
// 이메일 유효성 검사

emailWrapper.addEventListener("focusout", emailValidationSignUp);

// 비밀번호 유효성 검사

inputPassword.addEventListener("focusout", passwordValidationSignUp);
inputPassword2.addEventListener("focusout", password2ValidationSignUp);

//focusin일 때 입력창 에러 스타일 제거
inputEmail.addEventListener("focusin", () =>
  removeErrorStyle(inputEmail, errorEmail)
);
inputPassword.addEventListener("focusin", () =>
  removeErrorStyle(inputPassword, errorPassword)
);
inputPassword2.addEventListener("focusin", () =>
  removeErrorStyle(inputPassword2, errorPassword2)
);

// submit 클릭시 이벤트
async function submitAccepted() {
  await emailValidationSignUp();
  passwordValidationSignUp();
  password2ValidationSignUp();
  const isAllValid = checkErrorMessagesExist();
  if (isAllValid) {
    const inputValues = USER_INPUT_VALUES()
    try{
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up',requestSettings('POST',inputValues));
      const result = await response.json()
      window.localStorage.setItem('signUpToken',result.data.accessToken)
      if (response.status === 200){
        removeErrorStyle(inputEmail,errorEmail)
        removeErrorStyle(inputPassword,errorPassword)
        removeErrorStyle(inputPassword2,errorPassword2)
        moveToFolderPage()
      } 
    }
    catch(error) {
      console.log(error)
    }

  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitAccepted();
});

//엔터키 눌러도 submit 기능 수행
function submitByEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    submitAccepted();
  }
}

window.addEventListener("keypress", submitByEnter);

// [eyeToggle 모듈]
import handleEyeClick from "../module/Auth/handleEye.js";

eyes.forEach((eye) => {
  eye.addEventListener("click", (e) => handleEyeClick(e));
});