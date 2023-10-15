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

document.addEventListener("DOMContentLoaded", autoRedirect);