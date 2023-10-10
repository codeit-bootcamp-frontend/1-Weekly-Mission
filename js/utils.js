export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

export const checkEmailError = (event) => {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (event.target.value === "") {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이메일을 입력해주세요";
    email.classList.add("border-red");
  } else if (!EMAIL_REGEX.test(event.target.value)) {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "올바른 이메일을 입력해주세요";
    email.classList.add("border-red");
  } else if (event.target.value === "test@codeit.com") {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다";
    email.classList.add("border-red");
  } else {
    emailErrorMessage.style.display = "none";
    email.classList.remove("border-red");
  }
};

export const checkPasswordError = (event) => {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (event.target.value === "") {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
    password.classList.add("border-red");
  } else if (
    event.target.value.length < 8 ||
    !PASSWORD_REGEX.test(event.target.value)
  ) {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    password.classList.add("border-red");
  } else {
    passwordErrorMessage.style.display = "none";
    passwordCheck.classList.remove("border-red");
  }
};

export const checkPasswordConfirmError = (event) => {
  if (event.target.value === password.value) {
    passwordConfirmErrorMessage.style.display = "none";
    passwordConfirm.classList.remove("border-red");
  } else {
    passwordConfirmErrorMessage.style.display = "block";
    passwordConfirmErrorMessage.textContent = "비밀번호가 일치하지 않아요";
    passwordConfirm.classList.add("border-red");
  }
};

export const checkSignin = (event) => {
  if (
    email.value === TEST_USER.email ||
    password.value === TEST_USER.password
  ) {
    // 로그인 시 폴더 페이지로 이동
    location.href = "/pages/folder.html";
    event.preventDefault();
  } else {
    emailErrorMessage.textContent = "이메일을 확인해주세요.";
    emailErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 확인해주세요";
    passwordErrorMessage.style.display = "block";
    event.preventDefault();
  }
};

export const togglePassword = (input, toggleButton) => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton
      .getElementsByTagName("img")[0]
      .setAttribute("src", "/assets/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton
    .getElementsByTagName("img")[0]
    .setAttribute("src", "/assets/eye-off.svg");
};
