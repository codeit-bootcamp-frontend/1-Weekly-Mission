import { $, $all, toggleEye } from "./utils.js";
import { clearError, signupInputCheck } from "./errorHandle.js";
import { signupAuthentication } from "./userAuthentication.js";


$("#email").addEventListener("focusout", ({ target }) => signupInputCheck(target));
$("#password").addEventListener("focusout", ({ target }) => signupInputCheck(target));
$("#password-check").addEventListener("focusout", ({ target }) => signupInputCheck(target));


$("#email").addEventListener("focusin", clearError);
$("#password").addEventListener("focusin", clearError);
$("#password-check").addEventListener("focusin", clearError);

$("form").addEventListener("submit", signupAuthentication);
$all(".eye-Image").forEach((eye) => { eye.addEventListener("click", toggleEye); });

document.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드될 때 실행되는 코드

  // 로컬 스토리지에서 accessToken을 가져옵니다.
  const accessToken = localStorage.getItem("access-token");

  // 만약 로컬 스토리지에 accessToken이 존재하면, "/folder" 페이지로 리디렉션합니다.
  if (accessToken) {
    window.location.href = "/folder";
  }
});