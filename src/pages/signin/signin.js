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

const checkEmailInput = (event) => {
  // 이메일 정규식
  const EMAIL_REG_EXP =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  event.preventDefault();
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    $emailErrorMsg.textContent = "이메일을 입력해주세요.";
    $email.classList.add("error-border");
  } else if (!EMAIL_REG_EXP.test(event.target.value)) {
    // 이메일 정규표현식 test시 false값 출력의 경우
    $emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    $email.classList.add("error-border");
  } else {
    $emailErrorMsg.textContent = "";
    $email.classList.remove("error-border");
  }
};

const checkPasswordInput = (event) => {
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    $passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
    $password.classList.add("error-border");
  } else {
    $passwordErrorMsg.textContent = "";
    $password.classList.remove("error-border");
  }
};

const adminLogin = (event) => {
  event.preventDefault();
  if ($email.value === "test@codeit.com" && $password.value === "codeit101") {
    // admin 계정으로 로그인 시 'folder/' 로 이동
    window.location.href = "../folder/index.html";
  } else {
    $emailErrorMsg.textContent = "이메일을 확인해주세요.";
    $passwordErrorMsg.textContent = "비밀번호를 확인해주세요.";
    $email.classList.add("error-border");
    $password.classList.add("error-border");
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

$email.addEventListener("blur", checkEmailInput);
$password.addEventListener("blur", checkPasswordInput);
$form.addEventListener("submit", adminLogin);
$pwInvisible.addEventListener("click", togglePwVisibility);
