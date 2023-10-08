const TEST_ID = "test@codeit.com";
const TEST_PW = "codeit101";
const emailInput = document.querySelector("#emailInput");
const emailErrorMsg = document.querySelector("#emailErrorMsg");
const pwInput = document.querySelector("#pwInput");
const pwErrorMsg = document.querySelector("#pwErrorMsg");
const eyeImgBtn = document.querySelector(".eyeOffImg");

const email = {
  input: emailInput,
  errorMsg: emailErrorMsg,
};

const password = {
  input: pwInput,
  errorMsg: pwErrorMsg,
};

function showError(obj, msg) {
  const input = obj.input;
  const errorMsg = obj.errorMsg;

  input.classList.add("error");
  errorMsg.innerText = msg;
  errorMsg.style.display = "block";
}

function removeError(obj) {
  obj.input.classList.remove("error");
  obj.errorMsg.style.display = "none";
}

function checkInput(type, obj) {
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const input = obj.input;

  if (input.value === "") {
    if (type === "email") {
      showError(obj, "이메일을 입력해주세요.");
    } else {
      showError(obj, "비밀번호를 입력해주세요.");
    }
  } else {
    if (type === "email" && !exptext.test(input.value)) {
      showError(obj, "올바른 이메일 주소가 아닙니다.");
    } else {
      removeError(obj);
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
  checkInput("email", email);
});

pwInput.addEventListener("focusout", function () {
  checkInput("pw", password);
});

eyeImgBtn.addEventListener("click", function () {
  changeEyeBtn(password.input, eyeImgBtn);
});

export {
  email,
  password,
  emailInput,
  pwInput,
  TEST_ID,
  TEST_PW,
  showError,
  changeEyeBtn,
  removeError,
};
