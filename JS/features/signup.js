import { inputEmail, errorEmail, inputPassword, errorPassword, inputPassword2, errorPassword2, emailWrapper, submitBtn, eyes} from "../module/Auth/tags.js";
import { removeErrorStyle, errorStyle } from "../module/Auth/errorMessage.js";
import { checkFormEmpty, checkEmailValid, checkErrorMessagesExist, checkPasswordValid,checkStringSame,checkEmailAvailable} from "../module/Auth/validation.js";
import { USER_INPUT_VALUES, requestSettings } from "../module/Auth/requestSettings.js";


const moveToFolderPage = () => {window.location.href = '../folder.html'}
window.addEventListener('load',() => {
  if (Object.keys(window.localStorage).includes('signUpToken')){
    moveToFolderPage()
  }
})

// [form input box 유효성 검사]

// 이메일 유효성 검사


async function emailValidation() {
  const email = inputEmail.value;
  if (!checkFormEmpty(email)) {
    return errorStyle(inputEmail,errorEmail,"아이디를 입력해주세요.");
  } else if (!checkEmailValid(email)) {
    return errorStyle(inputEmail,errorEmail,"올바른 이메일 주소가 아닙니다.");
  } else if (!await checkEmailAvailable()) {
    return errorStyle(inputEmail,errorEmail,"이미 사용중인 이메일입니다.");
  } else {
    removeErrorStyle(inputEmail, errorEmail);
    return true;
  }
}

emailWrapper.addEventListener("focusout", emailValidation);

// 비밀번호 유효성 검사

function passwordValidation() {
  const password = inputPassword.value;
  if (!checkFormEmpty(password)) {
    return errorStyle(inputPassword,errorPassword,"비밀번호를 입력해주세요.");
  }
  if (!checkPasswordValid(password)) {
    return errorStyle(inputPassword,errorPassword,"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
  removeErrorStyle(inputPassword, errorPassword);
  return true;
}

function password2Validation() {
  const password = inputPassword.value;
  const password2 = inputPassword2.value;
  if (!checkFormEmpty(password2)) {
    return errorStyle(inputPassword2,errorPassword2,"비밀번호를 입력해주세요.");
  } else if (!checkStringSame(password, password2)) {
    return errorStyle(inputPassword2,errorPassword2,"비밀번호가 일치하지 않아요."
);
  }
  removeErrorStyle(inputPassword2, errorPassword2);
  return true;
}

inputPassword.addEventListener("focusout", passwordValidation);
inputPassword2.addEventListener("focusout", password2Validation);

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
  emailValidation();
  passwordValidation();
  password2Validation();
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