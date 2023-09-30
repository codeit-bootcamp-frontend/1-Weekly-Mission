const formInputs = document.querySelectorAll(".form__input-box");
const formEmail = document.querySelector("#form__email");
const formPassword = document.querySelector("#form__password");
const formSubmit = document.querySelector(".form__submit");

// error 종류에 따라 메시지 추가
const errorMsgs = {
  emptyInput: {
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
    text: "비밀번호를 입력해주세요.",
  },
  invalidInput: {
    email: "올바른 이메일 주소가 아닙니다.",
  },
  invalidLogin: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
};

function printErrorMsg(error, type, target) {
  removeErrorMsg(target);
  const errorMsg = document.createElement("p");
  errorMsg.textContent = errorMsgs[error][type];
  errorMsg.classList.add("error-msg");
  target.after(errorMsg);
}

function removeErrorMsg(target) {
  if (
    target.nextElementSibling &&
    target.nextElementSibling.classList.contains("error-msg")
  ) {
    target.nextElementSibling.remove();
  }
}

// input에 값이 존재하는지 확인
function checkEmptyInput(event) {
  if (!event.target.value) {
    event.target.classList.add("form__input-box__error");
    printErrorMsg("emptyInput", event.target.type, event.target);
  } else {
    event.target.classList.remove("form__input-box__error");
    removeErrorMsg(event.target);
  }
}

// input 양식에 맞게 값을 입력했는지 확인
function validateInput(event) {
  if (event.target.type == "email" && event.target.value) {
    const emailTest =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailTest.test(event.target.value)) {
      printErrorMsg("invalidInput", event.target.type, event.target);
    }
  }
}

// 로그인 시도 확인
const account = {
  "test@codeit.com": "codeit101",
};

function auth(event) {
  event.preventDefault();
  if (account[formEmail.value] === formPassword.value) {
    location.href = "/pages/folder.html";
  } else {
    printErrorMsg("invalidLogin", "email", formEmail);
    printErrorMsg("invalidLogin", "password", formPassword);
  }
}

for (let input of formInputs) {
  input.addEventListener("focusout", checkEmptyInput);
  input.addEventListener("focusout", validateInput);
}

formSubmit.addEventListener("click", auth);

// 비밂번호 표시
const togglePasswordButton = document.querySelector(".form__password-toggle");
const togglePasswordImg = document.querySelector(".form__password-toggle img");

function togglePasswordVisibility(event) {
  event.preventDefault();
  if (formPassword.type === "password") {
    formPassword.type = "text";
    togglePasswordImg.src = "/public/icons/eye-on.svg";
  } else {
    formPassword.type = "password";
    togglePasswordImg.src = "/public/icons/eye-off.svg";
  }
}

togglePasswordButton.addEventListener("click", togglePasswordVisibility);
