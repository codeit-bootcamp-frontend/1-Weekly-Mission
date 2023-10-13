import { $, $all, handleEmailError, isLocation, handleToggleEye } from "../utils.js";
import {  handlePasswordError, handleSignIn } from "./signin.js";
import { handleSignUpPasswordError, handleSignUp } from "./signup.js"


$("#email").addEventListener("focusout", ({target}) => handleEmailError(target));

$("#password").addEventListener("focusout", handlePasswordError);

$all(".passwords").forEach((passwordInput) => {
  passwordInput.addEventListener("focusout", handleSignUpPasswordError);
});

$("form").addEventListener("submit", isLocation() ? handleSignUp : handleSignIn);

$all(".eye-off").forEach((eyeButton, index) => {
  const passwordInput = $all(isLocation() ? ".passwords" : "#password")[index]; // 해당 인덱스의 비밀번호 필드 가져오기

  eyeButton.addEventListener("click", () => handleToggleEye(eyeButton, passwordInput));
});
