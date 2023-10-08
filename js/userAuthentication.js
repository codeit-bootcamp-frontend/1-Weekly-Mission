import { displayError, showErrorMessage, getErrors } from "./errorHandle.js";

function userAuthenticate(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;
  const [$emailError, $passwordError] = getErrors();


  if (showErrorMessage($emailInput) || showErrorMessage($passwordInput)) {
    return;
  }

  if ($emailInput.value === "test@codeit.com" && $passwordInput.value === "codeit101") {
    window.location.href = "/folder";
    return;
  }
  displayError($emailError, "이메일을 확인해주세요.");
  displayError($passwordError, "비밀번호를 확인해주세요.");
};


export { userAuthenticate };