import { displayError, showErrorMessage, getInputErrors } from "./errorHandle.js";



const user = {
  email: "test@codeit.com",
  password: "codeit101"
}

function userAuthenticate(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;
  const [$emailError, $passwordError] = getInputErrors();


  if (showErrorMessage($emailInput) || showErrorMessage($passwordInput)) {
    return;
  }

  if ($emailInput.value === user.email && $passwordInput.value === user.password) {
    window.location.href = "/folder";
    return;
  }

  displayError($emailError, "이메일을 확인해주세요.");
  displayError($passwordError, "비밀번호를 확인해주세요.");
};


export { userAuthenticate, user};