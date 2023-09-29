import * as nodeUtils from "../../utils/nodeUtils.js";
const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");

function validationForm(e) {
  let node = e.target;
  let nodeInfo = {
    type: node.type,
    className: node.className,
    value: node.value,
  };
  let msg = "";
  //value check
  if (nodeInfo.value === "") {
    msg = "입력해주세요.";
    let errMsg = setErrorMsg(nodeInfo, msg);
    let toggleGb = node.classList.toggle("errorInput"); //error class 추가 및 삭제
    let errTag = nodeUtils.createNode("span", "error_msg", errMsg);
    toggleGb ? node.after(errTag) : node.nextElementSibling.remove();
  } else {
    //정규표현식 체크
    node.nextElementSibling.remove();
  }
}

function setErrorMsg(nodeInfo, msg) {
  let type = nodeInfo.type;
  let className = nodeInfo.className;

  let errorMsg = { type: "", msg: msg };

  if (type === "email") {
    errorMsg.type = "이메일";
  } else if (
    type === "password" ||
    className === "pwd_input" ||
    className === "pwd_check"
  ) {
    errorMsg.type = "비밀번호";
  }

  return `${errorMsg.type}을 ${errorMsg.msg}`;
}

inputEmail.addEventListener("focusout", (e) => {
  validationForm(e);
});
inputPwd.addEventListener("focusout", (e) => {
  validationForm(e);
});
inputPwdCheck.addEventListener("focusout", (e) => {
  validationForm(e);
});

/**
 "이메일을 입력해주세요."
"비밀번호를 입력해주세요."

“이메일을 확인해주세요.”,
 “비밀번호를 확인해주세요.”

올바른 이메일 주소가 아닙니다.
 */
