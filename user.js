const TEST_ID = "test@codeit.com";
const TEST_PW = "codeit101";
const emailInput = document.querySelector("#emailInput");
const emailErrorMsg = document.querySelector("#emailErrorMsg");
const pwInput = document.querySelector("#pwInput");
const pwErrorMsg = document.querySelector("#pwErrorMsg");
const loginBtn = document.querySelector(".loginBtn");

function showError(input, errorMsg, msg) {
  input.classList.add("error");
  errorMsg.innerText = msg;
  errorMsg.style.display = "block";
}

function checkInput(type, input, errorMsg) {
  var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if (input.value === "") {
    if (type === "email") {
      showError(input, errorMsg, "이메일을 입력해주세요.");
    } else {
      showError(input, errorMsg, "비밀번호를 입력해주세요.");
    }
  } else {
    if (type === "email" && !exptext.test(input.value)) {
      showError(input, errorMsg, "올바른 이메일 주소가 아닙니다.");
    } else {
      input.classList.remove("error");
      errorMsg.style.display = "none";
    }
  }
}

emailInput.addEventListener("focusout", function () {
  checkInput("email", emailInput, emailErrorMsg);
});

pwInput.addEventListener("focusout", function () {
  checkInput("pw", pwInput, pwErrorMsg);
});

loginBtn.addEventListener("click", function () {
  if (emailInput.value === TEST_ID && pwInput.value === TEST_PW) {
    location.href = "folder.html";
  } else {
    showError(pwInput, pwErrorMsg, "비밀번호를 확인해주세요");
    showError(emailInput, emailErrorMsg, "이메일을 확인해주세요");
  }
});
