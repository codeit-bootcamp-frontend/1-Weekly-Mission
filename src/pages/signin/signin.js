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
  const repExpKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글 정규표현식
  // 이메일 정규식
  // let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  event.preventDefault();
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    $emailErrorMsg.textContent = "이메일을 입력해주세요.";
    $email.classList.add("error-border");
  } else if (
    event.target.value.indexOf("@") === -1 ||
    event.target.value
      .slice(event.target.value.indexOf("@") + 1)
      .indexOf(".") === -1 ||
    repExpKorean.test(event.target.value)
  ) {
    // '@'가 없거나 '@'뒤에 '.'이 없거나 한글이 포함된 경우
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

$email.addEventListener("focusout", checkEmailInput);
$password.addEventListener("focusout", checkPasswordInput);
$form.addEventListener("submit", adminLogin);
$pwInvisible.addEventListener("click", togglePwVisibility);
