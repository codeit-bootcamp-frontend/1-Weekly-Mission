const $email = document.querySelector(".email-input");
const $password = document.querySelector(".password-input");
const $signButton = document.querySelector(".sign-form");
const $passwordEye = document.querySelector("#password-toggle");
const $emailErrorMessage = document.querySelector(".email-error-message");
const $passwordErrorMessage = document.querySelector(".password-error-message");
const $passwordConfirmErrorMessage = document.querySelector(
  ".passwordCheck-error-message"
);

let eyeOn = false;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const API = "https://bootcamp-api.codeit.kr/api";

// 토큰 존재하는 경우
if (localStorage.getItem("accessToken")) {
  location.href = "/pages/folder.html";
}

const checkEmailValidation = (event) => {
  if (event.target.value === "") {
    $emailErrorMessage.style.display = "block";
    $emailErrorMessage.textContent = "이메일을 입력해주세요";
    $email.classList.add("border-red");
  } else if (!EMAIL_REGEX.test(event.target.value)) {
    $emailErrorMessage.style.display = "block";
    $emailErrorMessage.textContent = "올바른 이메일을 입력해주세요";
    $email.classList.add("border-red");
  } else {
    $emailErrorMessage.style.display = "none";
    $email.classList.remove("border-red");
  }
};

const checkPasswordValidation = (event) => {
  if (event.target.value === "") {
    $passwordErrorMessage.style.display = "block";
    $passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
    $password.classList.add("border-red");
  } else if (!PASSWORD_REGEX.test(event.target.value)) {
    $passwordErrorMessage.style.display = "block";
    $passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    $password.classList.add("border-red");
  } else {
    $passwordErrorMessage.style.display = "none";
    $passwordCheck.classList.remove("border-red");
  }
};

const submitForm = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`${API}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: $email.value,
        password: $password.value,
      }),
    });
    const responseData = await response.json();
    if (response.status === 200) {
      // 토큰 추가
      localStorage.setItem("accessToken", responseData.accessToken);
      window.location.href = "/pages/folder.html";
    } else if (response.status === 400) {
      alert("아이디 혹은 비밀번호를 확인해주세요");
    }
  } catch (err) {
    console.log(err);
  }
};

const togglePassword = (input, toggleButton) => {
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

$email.addEventListener("focusout", checkEmailValidation);
$password.addEventListener("focusout", checkPasswordValidation);
$passwordEye.addEventListener("click", () =>
  togglePassword($password, $passwordEye)
);
$signButton.addEventListener("submit", submitForm);
