import * as nodeUtils from "../../utils/nodeUtils.js";
import { EXP_EMAIL, EXP_PASSWORD } from "../../constants/regex.js";
import { VALIDATE_ERRORS } from "../../constants/errorMsg.js";
import { LOGIN_PATH, CHECK_EMAIL_PATH } from "../../constants/path.js";
/**유효성 검사 함수
 *
 * 1.Null check\
 * 2.타입에 맞게 양식을 제대로 작성했는지 정규표현식 검사\
 * 3.조건에 맞지 않을 시 에러 메시지 생성
 * @param {object} e 유효성 검사 진행할 요소
 */
const validateInput = (e) => {
  let node = e.target;
  let nodeInfo = {
    type: node.type,
    className: node.className,
    value: node.value,
    path: node.baseURI.slice(-7),
  };
  let errorGb = false; //Error 구분값
  let errType = 0;

  resetErrorEvent(node);

  if (nodeInfo.value.trim() === "") {
    errorGb = true;
    errType = 1;
  } else {
    if (nodeInfo.type === "email") {
      //정규표현식 체크
      if (!EXP_EMAIL.test(nodeInfo.value)) errType = 2;

      //회원가입 페이지 전용
      if (nodeInfo.path === "signup/") {
        // 중복 체크
        if (errType !== 2) {
          //수정이 필요한 부분
          checkEmail(nodeInfo.value).then((result) => {
            errType = result ? 0 : 3;
          });
          if (nodeInfo.value === "test@codeit.com") errType = 3;
        }
      }
    } else if (
      nodeInfo.type === "password" ||
      nodeInfo.className === "pwd_input" ||
      nodeInfo.className === "pwd_check"
    ) {
      //회원가입 페이지 전용
      if (nodeInfo.path === "signup/") {
        //정규표현식 체크
        if (!EXP_PASSWORD.test(nodeInfo.value)) errType = 2;
        //비밀번호와 비밀번호체크의 값이 일치 하지 않을 경우
        if (node.classList.contains("pwd_check")) {
          let inputPwdValue = document.querySelector(".pwd_input").value;
          if (inputPwdValue !== nodeInfo.value) errType = 4;
        }
      }
    }
  }
  errorGb = errType > 0;

  //Error 이벤트 동작
  if (errorGb) {
    let errMsg = setErrorMsg(nodeInfo, errType); //error 메세지 생성
    let errTag = nodeUtils.createNode("span", "error_msg", errMsg); //tag 생성
    node.classList.add("errorInput"); //error class 추가
    node.after(errTag);
  }
  return errorGb;
};

/**에러 메세지 생성 함수
 *
 * errType =\
 *    1 : value 없음\
 *    2 : 유효성 검사 실패\
 *    3 : 중복 검사 실패\
 *    4 : 비밀번호 체크 일치 하지않음 (회원가입)
 * @param {object} nodeInfo
 * @param {number} errType
 * @returns {string} result
 */
const setErrorMsg = (nodeInfo, errType) => {
  const { type, className } = nodeInfo;
  let errorMsg = { type: "", errType: errType };
  let message = "";
  if (type === "email") {
    errorMsg.type = "이메일";
  } else if (
    type === "password" ||
    className === "pwd_input" ||
    className === "pwd_check"
  ) {
    errorMsg.type = "비밀번호";
  }

  if (errType === 1) {
    message =
      errorMsg.type === "이메일"
        ? VALIDATE_ERRORS.EMPTY_EMAIL
        : VALIDATE_ERRORS.EMPTY_PWD;
  }

  if (errType === 2) {
    message =
      errorMsg.type === "이메일"
        ? VALIDATE_ERRORS.INVALID_EMAIL
        : VALIDATE_ERRORS.INVALID_PWD;
  }

  if (errType === 3) {
    message = VALIDATE_ERRORS.INUSE_EMAIL;
  }

  if (errType === 4) {
    message = VALIDATE_ERRORS.MISMATCH_PWD;
  }

  return message;
};
/**비밀번호 보이기/가리기 함수
 *
 *비밀번호 Input Type변경
 * @param {object} e passwordInput 요소
 */
const togglePasswordVisibility = (e) => {
  const { target } = e;
  const { parentElement } = target;
  if (parentElement.firstElementChild.type === "password") {
    parentElement.firstElementChild.type = "text";
    target.src = "/src/assets/img/open_eyes.png";
  } else {
    parentElement.firstElementChild.type = "password";
    target.src = "/src/assets/img/close_eyes.png";
  }
};
/**에러이벤트 초기화 함수
 *
 *기존 설정되어있는 error node 가 있다면 삭제
 * @param {object} node
 */
const resetErrorEvent = (node) => {
  if (node.classList.contains("errorInput")) {
    node.classList.remove("errorInput");
  }
  if (
    node.nextElementSibling !== null &&
    node.nextElementSibling.className === "error_msg"
  ) {
    node.nextElementSibling.remove("error_msg");
  }
};

/**로그인 요청 함수
 *
 * 계정 정보를 보내 로그인 요청
 * @param {object} param {
  "email": "string",
  "password": "string"
}
 */
const login = async (param) => {
  let loginGb = false;
  try {
    const response = await fetch(LOGIN_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });
    const result = await response.json();
    console.log(result);

    //로그인 성공
    if (response.status === 200) {
      console.log("로그인 성공 ", result.data);
      loginGb = true;
      return loginGb;
    } else if (response.status === 400) {
      throw new Error(`로그인 오류 \n ${result.error.message}`);
    } else {
      throw new Error(`Login Fail \n ${result.error.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};
/**이메일 중복 체크 함수
 *
 * @param {string} email value
 * @returns
 */
const checkEmail = async (val) => {
  let checkGb = false;
  let param = {
    email: val,
  };
  try {
    const response = await fetch(CHECK_EMAIL_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });
    const result = await response.json();
    console.log(result);
    console.log(response.status);
    if (response.status === 200) {
      checkGb = result.data.isUsableNickname;
      return checkGb;
    } else if (response.status === 409) {
      console.log("사용 할 수 없는 이메일 입니다.");
      return checkGb;
    } else {
      throw new Error(`checkEmail Fail \n ${result.error.message}`);
    }
  } catch (error) {
    alert(error);
    // console.log(error);
  }
};
export { validateInput, togglePasswordVisibility, login };
