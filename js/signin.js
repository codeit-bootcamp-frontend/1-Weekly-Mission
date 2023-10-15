import { 
  emailInput,
  passwordInput,
  form,
  eyeIcons,
  EMAIL_REGEX,
  editErrorStatus,
  toggleEyeButton,
  checkAccessToken
} from "/js/utils.js";

const checkEmailInput = (e) => {
  if (!e.target.value) {
    editErrorStatus(e.target, "이메일을 입력해주세요.");
  } else if (!EMAIL_REGEX.test(e.target.value)) {
    editErrorStatus(e.target, "올바른 이메일 주소가 아닙니다.");
  } else {
    editErrorStatus(e.target);
  }
};

const checkPasswordInput = (e) => {
  if (!e.target.value) {
    editErrorStatus(e.target, "비밀번호를 입력해주세요.");
  } else {
    editErrorStatus(e.target);
  }
};

const requestSignIn = async () => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    const result = await response.json();

    if (response.status === 200) {
      localStorage.setItem("login-token", result.data.accessToken);
      redirect();
    } else {
      editErrorStatus(emailInput, "이메일을 확인해주세요.");
      editErrorStatus(passwordInput, "비밀번호를 확인해주세요.");
    }
  } catch (error) {
    console.log(error);
  }
};

const trySignIn = (e) => {
  e.preventDefault();
  requestSignIn();
};

checkAccessToken();

emailInput.addEventListener("focusout", checkEmailInput);
passwordInput.addEventListener("focusout", checkPasswordInput);
form.addEventListener("submit", trySignIn);
for (let el of eyeIcons) {
  el.addEventListener("click", toggleEyeButton);
}
