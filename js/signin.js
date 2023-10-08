import { $, $all } from "./utils.js";

const REG_EMAIL = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;


function isValidEmail(email) {
  return REG_EMAIL.test(email);
}

function toggleEye(e) {
  e.stopPropagation();
  const isEyeOn = e.target.src.includes("eye-on");
  e.target.src = `./images/signin/${isEyeOn ? "eye-off" : "eye-on"}.svg`;
  $("#password").type = isEyeOn ? "password" : "text";
}



function userAuthenticate(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;


  if (showErrorMessage($emailInput) || showErrorMessage($passwordInput)) {
    return;
  }

  if ($emailInput.value === "test@codeit.com" && $passwordInput.value === "codeit101") {
    window.location.href = "/folder";
    return;
  }
  displayError(emailError, "이메일을 확인해주세요.");
  displayError(passwordError, "비밀번호를 확인해주세요.");
};


$("#email").addEventListener("focusout", ({ target }) => showErrorMessage(target));
$("#password").addEventListener("focusout", ({ target }) => showErrorMessage(target));
$("#email").addEventListener("focusin", clearError);
$("#password").addEventListener("focusin", clearError);

$("form").addEventListener("submit", userAuthenticate);
$all(".eye-Image")[0].addEventListener("click", toggleEye);
