const input = document.querySelector(".form__input");
const form = document.querySelector(".form");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// 이메일 input에서 focus out할 때, 이메일 형식에 맞지 않는 값이 있는 경우 에러메세지
const regExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i;

const emailValidation = (value) => {
  if (!regExp.test(value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.style.borderColor = "var(--color-red)";
  } else {
    emailError.textContent = "";
    email.style.borderColor = "var(--color-gray-20)";
  }
};

// 이메일, 비밀번호 input에서 focus out할 때, 값이 없을 경우 에러메세지
const checkEmailValue = () => {
  if (!email.value) {
    emailError.textContent = "이메일을 입력해주세요";
    email.style.borderColor = "var(--color-red)";
  } else {
    emailValidation(email.value);
  }
};

const checkPasswordValue = () => {
  if (!password.value) {
    passwordError.textContent = "비밀번호를 입력해주세요";
    password.style.borderColor = "var(--color-red)";
  }
};

// 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동
const onClickSubmit = (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    checkEmailValue();
    checkPasswordValue();
    return;
  }
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    form.submit();
  } else {
    // 이외의 로그인 시도의 경우, 이메일 input, 비밀번호 input 아래에 해당 에러 메세지
    emailError.textContent = "이메일을 확인해주세요";
    email.style.borderColor = "var(--color-red)";
    passwordError.textContent = "비밀번호를 확인해주세요";
    password.style.borderColor = "var(--color-red)";
  }
  // console.log(e);
};

email.addEventListener("focusout", checkEmailValue);
password.addEventListener("focusout", checkPasswordValue);
form.addEventListener("submit", onClickSubmit);
