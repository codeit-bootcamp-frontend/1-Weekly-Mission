import { $, $all, toggleEye } from "./utils.js";
import { showErrorMessage, clearError } from "./errorHandle.js";
import { userAuthenticate } from "./userAuthentication.js";




$("#email").addEventListener("focusout", ({ target }) => showErrorMessage(target));
$("#password").addEventListener("focusout", ({ target }) => showErrorMessage(target));
$("#email").addEventListener("change", clearError);
$("#password").addEventListener("change", clearError);

$("form").addEventListener("submit", userAuthenticate);
$all(".eye-Image")[0].addEventListener("click", toggleEye);
