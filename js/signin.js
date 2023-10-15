import { $, $all, toggleEye, autoRedirect } from "./utils.js";
import { commonInputCheck, clearError } from "./errorHandle.js";
import { loginAuthentication } from "./userAuthentication.js";


$("#email").addEventListener("focusout", ({ target }) => commonInputCheck(target));
$("#password").addEventListener("focusout", ({ target }) => commonInputCheck(target));
$("#email").addEventListener("focusin", clearError);
$("#password").addEventListener("focusin", clearError);

$("form").addEventListener("submit", loginAuthentication);

$all(".eye-Image")[0].addEventListener("click", toggleEye);

document.addEventListener("DOMContentLoaded", autoRedirect);


