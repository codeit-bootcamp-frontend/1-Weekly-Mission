import {
  emailInput,
  emailErrorMsg,
  pwInput,
  pwErrorMsg,
  TEST_ID,
  TEST_PW,
  showError,
} from "./user.js";

const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (emailInput.value === TEST_ID && pwInput.value === TEST_PW) {
    location.href = "folder.html";
  } else {
    showError(pwInput, pwErrorMsg, "비밀번호를 확인해주세요");
    showError(emailInput, emailErrorMsg, "이메일을 확인해주세요");
  }
});
