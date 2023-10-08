import { $, $all } from "./utils.js";
import { showErrorMessage, clearError } from "./errorHandle.js";
import { userAuthenticate } from "./userAuthentication.js";

function toggleEye(e) {
  e.stopPropagation();
  const isEyeOn = e.target.src.includes("eye-on");
  e.target.src = `./images/signin/${isEyeOn ? "eye-off" : "eye-on"}.svg`;
  $("#password").type = isEyeOn ? "password" : "text";
}




$("#email").addEventListener("focusout", ({ target }) => showErrorMessage(target));
$("#password").addEventListener("focusout", ({ target }) => showErrorMessage(target));
$("#email").addEventListener("focusin", clearError);
$("#password").addEventListener("focusin", clearError);

$("form").addEventListener("submit", userAuthenticate);
$all(".eye-Image")[0].addEventListener("click", toggleEye);
