const TEST_ID = "test@codeit.com";
const TEST_PW = "codeit101";
const emailInput = document.querySelector("#emailInput");
const emailErrorMsg = document.querySelector("#emailErrorMsg");
const pwInput = document.querySelector("#pwInput");
const pwErrorMsg = document.querySelector("#pwErrorMsg");
const eyeImgBtn = document.querySelector(".eyeOffImg");

function showError(input, errorMsg, msg) {
  input.classList.add("error");
  errorMsg.innerText = msg;
  errorMsg.style.display = "block";
}

function removeError(input, errorMsg) {
  input.classList.remove("error");
  errorMsg.style.display = "none";
}

function checkInput(type, input, errorMsg) {
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

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
      removeError(input, errorMsg);
    }
  }
}

function changeEyeBtn(input, btn) {
  const eyeOnSrc = "../assets/user/img_eyeOn.png";
  const eyeOffSrc = "../assets/user/img_eyeOff.png";

  input.classList.toggle("on");

  if (input.classList.contains("on")) {
    input.type = "text";
    btn.src = eyeOnSrc;
  } else {
    input.type = "password";
    btn.src = eyeOffSrc;
  }
}

emailInput.addEventListener("focusout", function () {
  checkInput("email", emailInput, emailErrorMsg);
});

pwInput.addEventListener("focusout", function () {
  checkInput("pw", pwInput, pwErrorMsg);
});

eyeImgBtn.addEventListener("click", function () {
  changeEyeBtn(pwInput, eyeImgBtn);
});

export {
  emailInput,
  emailErrorMsg,
  pwInput,
  pwErrorMsg,
  TEST_ID,
  TEST_PW,
  showError,
  changeEyeBtn,
  removeError,
};
