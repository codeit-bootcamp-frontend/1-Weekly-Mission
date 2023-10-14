import {
  $email,
  $password,
  $form,
  $pwInvisible,
  $emailErrorMsg,
  $passwordErrorMsg,
  $doubleCheckPw,
  $doubleCheckPwErrorMsg,
  $doubleCheckPwInvisible,
  showEmailError,
  deleteEmailError,
  showPasswordError,
  deletePasswordError,
  togglePwVisibility,
} from "../assets/js/sign_common.js";

// HTML tag를 담는 변수는 앞에 $를 붙임
$emailErrorMsg.classList.add("email-error-msg");
$passwordErrorMsg.classList.add("password-error-msg");
$doubleCheckPwErrorMsg.classList.add("password-error-msg");
$email.after($emailErrorMsg);
$password.after($passwordErrorMsg);
$doubleCheckPw.after($doubleCheckPwErrorMsg);

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
  } else if (!EMAIL_REG_EXP.test(event.target.value)) {
    // 이메일 정규표현식 test시 false값 출력의 경우
    showEmailError("typo");
  } else {
    deleteEmailError();
  }
};

const checkPasswordRule = (event) => {
  const valueArray = event.target.value.split("");
  // 모두 문자열인지
  const isAllString = valueArray.every((el) => Number.isNaN(Number(el)));
  // 모두 숫자인지
  const isAllNumber = valueArray.every((el) => !Number.isNaN(Number(el)));
  if (valueArray.length < 8 || isAllString || isAllNumber) {
    // 8자리 이하이거나 문자열만 있거나 숫자만 있는 경우
    return true;
  }
  return false;
};

const checkPasswordSame = (event) => {
  if (
    $doubleCheckPw.value.length > 0 &&
    event.target.value !== $doubleCheckPw.value
  ) {
    // 비밀번호 확인에 뭐라도 입력이 되어있고, 비밀번호와 비밀번호 확인이 다를 때
    return false;
  } else if (
    $doubleCheckPw.value.length > 0 &&
    event.target.value === $doubleCheckPw.value
  ) {
    // 비밀번호 확인에 뭐라도 입력이 되어있고, 비밀번호와 비밀번호 확인이 같을 때
    return true;
  }
};

const checkPasswordInput = (event) => {
  if (checkPasswordRule(event)) {
    showPasswordError("again");
    if (checkPasswordSame(event)) {
      deleteDoubleCheckPwError();
    }
  } else if (!checkPasswordSame(event) && $doubleCheckPw.value.length > 0) {
    // 비밀번호 확인에 뭐라도 입력이 되어있고, 비밀번호와 비밀번호 확인이 다를 때
    showPasswordError("diff");
  } else if (checkPasswordSame(event)) {
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
      if (checkPasswordRule(event)) {
        showPasswordError("again");
        deleteDoubleCheckPwError();
      }
    }
  }
};

const checkAllInput = async () => {
  if (
    // input 태그가 비어있을 때, 에러 메시지 출력
    $email.value === "" ||
    $password.value === "" ||
    $doubleCheckPw.value === ""
  ) {
    if ($email.value === "") {
      showEmailError("void");
    } else if ($password.value === "") {
      showPasswordError("void");
    } else if ($doubleCheckPw.value === "") {
      showPasswordError("voidDC");
    }
  } else if (
    // 에러 메시지가 없고 모든 input 태그가 비어있지 않을 때
    !$emailErrorMsg.textContent &&
    !$passwordErrorMsg.textContent &&
    !$doubleCheckPwErrorMsg.textContent &&
    $email.value.length > 0 &&
    $password.value.length > 0 &&
    $doubleCheckPw.value.length > 0
  ) {
    const signupEmail = {
      email: $email.value,
    };
    const signupAccount = {
      email: $email.value,
      password: $password.value,
    };

    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupEmail),
      }
    );
    const responseStatus = response.status;
    if (responseStatus === 409) {
      showEmailError("already");
    } else if (responseStatus === 200) {
      // 중복된 이메일이 아닐 때
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupAccount),
        }
      );
      const responseStatus = response.status;
      if (responseStatus === 200) {
        window.location.href = "../folder/index.html";
      }
    }
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
  checkAllInput();
};

const pwInvisibleEventHandler = (event) => {
  togglePwVisibility(event);
};

$email.addEventListener("blur", emailInputEventHandler);
$password.addEventListener("blur", passwordInputEventHandler);
$doubleCheckPw.addEventListener("blur", doubleCheckPwInputEventHandler);
$form.addEventListener("submit", formSubmitEventHandler);
$pwInvisible.addEventListener("click", pwInvisibleEventHandler);
$doubleCheckPwInvisible.addEventListener("click", pwInvisibleEventHandler);
