// HTML tag를 담는 변수는 앞에 $를 붙임
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");
const $form = document.querySelector("form");
const $pwInvisible = document.querySelector(".password-invisible");

const $emailErrorMsg = document.createElement("div");
const $passwordErrorMsg = document.createElement("div");
$emailErrorMsg.classList.add("email-error-msg");
$passwordErrorMsg.classList.add("password-error-msg");
$email.after($emailErrorMsg);
$password.after($passwordErrorMsg);

// togglePwVisibility() 에서 쓰임
let togglePwVisible = false;

const showEmailError = (type) => {
  if (type === "void") {
    $emailErrorMsg.textContent = "이메일을 입력해주세요.";
  } else if (type === "typo") {
    $emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (type === "wrong") {
    $emailErrorMsg.textContent = "이메일을 확인해주세요.";
  }
  $email.classList.add("error-border");
};

const deleteEmailError = () => {
  $emailErrorMsg.textContent = "";
  $email.classList.remove("error-border");
};

const showPasswordError = (type) => {
  if (type === "void") {
    $passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
  } else if (type === "wrong") {
    $passwordErrorMsg.textContent = "비밀번호를 확인해주세요.";
  }
  $password.classList.add("error-border");
};

const deletePasswordError = () => {
  $passwordErrorMsg.textContent = "";
  $password.classList.remove("error-border");
};

const checkEmailInput = (event) => {
  // 이메일 validation 정규표현식
  const EMAIL_REG_EXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  event.preventDefault();
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    showEmailError("void");
  } else if (!EMAIL_REG_EXP.test(event.target.value)) {
    // 이메일 정규표현식 test시 false값 출력의 경우
    showEmailError("typo");
  } else {
    deleteEmailError();
  }
};

const checkPasswordInput = (event) => {
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    showPasswordError("void");
  } else {
    deletePasswordError();
  }
};

const checkAdminAccount = () => {
  if ($email.value === "test@codeit.com" && $password.value === "codeit101") {
    // admin 계정으로 로그인 시 'folder/' 로 이동
    window.location.href = "../folder/index.html";
  } else {
    showEmailError("wrong");
    showPasswordError("wrong");
  }
};

const togglePwVisibility = () => {
  if (!togglePwVisible) {
    // 비밀번호 보이게 하기
    $pwInvisible.setAttribute("src", "../../assets/images/svg/eye-on.svg");
    $password.setAttribute("type", "text");
    togglePwVisible = true;
  } else {
    // 비밀번호 가리기
    $pwInvisible.setAttribute("src", "../../assets/images/svg/eye-off.svg");
    $password.setAttribute("type", "password");
    togglePwVisible = false;
  }
};

const emailInputEventHandler = (event) => {
  event.preventDefault();
  checkEmailInput(event);
};

const passwordInputEventHandler = (event) => {
  checkPasswordInput(event);
};

const formSubmitEventHandler = (event) => {
  event.preventDefault();
  checkAdminAccount();
};

const pwInvisibleEventHandler = () => {
  togglePwVisibility();
};

$email.addEventListener("blur", emailInputEventHandler);
$password.addEventListener("blur", passwordInputEventHandler);
$form.addEventListener("submit", formSubmitEventHandler);
$pwInvisible.addEventListener("click", pwInvisibleEventHandler);
