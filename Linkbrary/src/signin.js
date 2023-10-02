const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

const form = document.querySelector(".form");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const addErrorClass = (el) => el.classList.add("error");
const removeErrorClass = (el) => el.classList.remove("error");

// 이메일 input에서 focus out할 때, 이메일 형식에 맞지 않는 값이 있는 경우 에러메세지
const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i;

const emailValidation = (value) => {
  const isEmailValid = emailRegExp.test(value);
  const context = isEmailValid ? "" : "올바른 이메일 주소가 아닙니다.";

  emailError.textContent = context;
  isEmailValid ? removeErrorClass(email) : addErrorClass(email);
};

// 이메일, 비밀번호 input에서 focus out할 때, 값이 없을 경우 에러메세지
const checkEmailValue = () => {
  if (!email.value) {
    emailError.textContent = "이메일을 입력해주세요";
    addErrorClass(email);
    return;
  }
  emailValidation(email.value);
};

const checkPasswordValue = () => {
  if (!password.value) {
    passwordError.textContent = "비밀번호를 입력해주세요";
    addErrorClass(password);
    return;
  }
  passwordError.textContent = "";
  removeErrorClass(password);
};

// 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동
const onClickSubmit = (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    checkEmailValue();
    checkPasswordValue();
    return;
  }

  // 이외의 로그인 시도의 경우, 이메일 input, 비밀번호 input 아래에 해당 에러 메세지
  if (email.value !== USER_EMAIL || password.value !== USER_PASSWORD) {
    emailError.textContent = "이메일을 확인해주세요";
    passwordError.textContent = "비밀번호를 확인해주세요";
    addErrorClass(email);
    addErrorClass(password);
    return;
  }
  form.submit();
};

email.addEventListener("focusout", checkEmailValue);
password.addEventListener("focusout", checkPasswordValue);
form.addEventListener("submit", onClickSubmit);
