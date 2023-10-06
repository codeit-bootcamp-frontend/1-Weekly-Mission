// HTML tag를 담는 변수는 앞에 $를 붙임
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");
const $doubleCheckPw = document.querySelector("#doublecheck-pw");
const $form = document.querySelector("form");
const $pwInvisible = document.querySelector(".password-invisible");
const $doubleCheckPwInvisible = document.querySelector(
  ".doublecheck-pw-invisible"
);

const $emailErrorMsg = document.createElement("div");
const $passwordErrorMsg = document.createElement("div");
const $doubleCheckPwErrorMsg = document.createElement("div");
$emailErrorMsg.classList.add("email-error-msg");
$passwordErrorMsg.classList.add("password-error-msg");
$doubleCheckPwErrorMsg.classList.add("password-error-msg");
$email.after($emailErrorMsg);
$password.after($passwordErrorMsg);
$doubleCheckPw.after($doubleCheckPwErrorMsg);

// togglePwVisibility() 에서 쓰임
let togglePwVisible = false;
// toggleDoubleCheckPwVisibility() 에서 쓰임
let toggleDoubleCheckPwVisible = false;

const showEmailError = (type) => {
  if (type === "void") {
    $emailErrorMsg.textContent = "이메일을 입력해주세요.";
  } else if (type === "typo") {
    $emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (type === "already") {
    $emailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
  }
  $email.classList.add("error-border");
};

const deleteEmailError = () => {
  $emailErrorMsg.textContent = "";
  $email.classList.remove("error-border");
};

const showPasswordError = (type) => {
  if (type === "again") {
    $passwordErrorMsg.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (type === "diff") {
    $passwordErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
    $doubleCheckPwErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
    $doubleCheckPw.classList.add("error-border");
  }
  $password.classList.add("error-border");
};

const deletePasswordError = () => {
  $passwordErrorMsg.textContent = "";
  $password.classList.remove("error-border");
};

const deleteDoubleCheckPwError = () => {
  $doubleCheckPwErrorMsg.textContent = "";
  $doubleCheckPw.classList.remove("error-border");
};

const checkEmailInput = (event) => {
  // 이메일 validation 정규표현식
  const EMAIL_REG_EXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  event.preventDefault();
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    showEmailError("void");
  } else if (event.target.value === "test@codeit.com") {
    // 입력된 값이 "test@codeit.com"일 때
    showEmailError("already");
  } else if (!EMAIL_REG_EXP.test(event.target.value)) {
    // 이메일 정규표현식 test시 false값 출력의 경우
    showEmailError("typo");
  } else {
    deleteEmailError();
  }
};

const checkPasswordInput = (event) => {
  const valueArray = event.target.value.split("");
  // 모두 문자열인지
  const isAllString = valueArray.every((el) => isNaN(+el));
  // 모두 숫자인지
  const isAllNumber = valueArray.every((el) => !isNaN(+el));
  if (valueArray.length < 8 || isAllString || isAllNumber) {
    // 8자리 이하이거나 문자열만 있거나 숫자만 있는 경우
    showPasswordError("again");
  } else if (
    $doubleCheckPw.value.length > 0 &&
    event.target.value !== $doubleCheckPw.value
  ) {
    // 비밀번호 확인에 뭐라도 입력이 되어있고, 비밀번호와 비밀번호 확인이 다를 때
    showPasswordError("diff");
  } else if (
    $doubleCheckPw.value.length > 0 &&
    event.target.value === $doubleCheckPw.value
  ) {
    // 비밀번호 확인에 뭐라도 입력이 되어있고, 비밀번호와 비밀번호 확인이 같을 때
    deletePasswordError();
    deleteDoubleCheckPwError();
  } else {
    deletePasswordError();
  }
};

const checkDoubleCheckPwInput = (event) => {
  if (event.target.value !== $password.value) {
    // 비밀번호와 비밀번호 확인이 다를 때
    showPasswordError("diff");
  } else if (event.target.value === $password.value) {
    // 비밀번호와 비밀번호 확인이 같을 때
    if ($passwordErrorMsg.textContent !== "비밀번호가 일치하지 않아요.") {
      // 비밀번호 에러 텍스트에 '비밀번호가 일치하지 않아요.'가 써져있지 않을 때
      deleteDoubleCheckPwError();
    } else {
      // 비밀번호 에러 텍스트에 '비밀번호가 일치하지 않아요.'가 써져있을 때
      deletePasswordError();
      deleteDoubleCheckPwError();
    }
  }
};

const checkAllInput = () => {
  if ($email.value === "test@codeit.com" && $password.value === "codeit101") {
    // admin 계정으로 로그인 시 'folder/' 로 이동
    window.location.href = "../folder/index.html";
  } else {
    showEmailError("wrong");
    showPasswordError("wrong");
  }
};

// 비밀번호란의 비번 보이기 토글버튼
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

// 비밀번호 확인란의 비번 보이기 토글버튼
const toggleDoubleCheckPwVisibility = () => {
  if (!toggleDoubleCheckPwVisible) {
    // 비밀번호 보이게 하기
    $doubleCheckPwInvisible.setAttribute(
      "src",
      "/Weekly_mission/1-Weekly-Mission/src/assets/images/svg/eye-on.svg"
    );
    $doubleCheckPw.setAttribute("type", "text");
    toggleDoubleCheckPwVisible = true;
  } else {
    // 비밀번호 가리기
    $doubleCheckPwInvisible.setAttribute(
      "src",
      "/Weekly_mission/1-Weekly-Mission/src/assets/images/svg/eye-off.svg"
    );
    $doubleCheckPw.setAttribute("type", "password");
    toggleDoubleCheckPwVisible = false;
  }
};

const emailInputEventHandler = (event) => {
  event.preventDefault();
  checkEmailInput(event);
};

const passwordInputEventHandler = (event) => {
  checkPasswordInput(event);
};

const doubleCheckPwInputEventHandler = (event) => {
  checkDoubleCheckPwInput(event);
};

const formSubmitEventHandler = (event) => {
  event.preventDefault();
};

const pwInvisibleEventHandler = () => {
  togglePwVisibility();
};

const doubleCheckPwInvisibleEventHandler = () => {
  toggleDoubleCheckPwVisibility();
};

$email.addEventListener("blur", emailInputEventHandler);
$password.addEventListener("blur", passwordInputEventHandler);
$doubleCheckPw.addEventListener("blur", doubleCheckPwInputEventHandler);
$form.addEventListener("submit", formSubmitEventHandler);
$pwInvisible.addEventListener("click", pwInvisibleEventHandler);
$doubleCheckPwInvisible.addEventListener(
  "click",
  doubleCheckPwInvisibleEventHandler
);
