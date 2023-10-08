import { $, $all, toggleEye } from "./utils.js";
import { clearError, signupInputCheck } from "./errorHandle.js";
import { signupAuthentication } from "./userAuthentication.js";


$("#email").addEventListener("focusout", ({ target }) => signupInputCheck(target));
$("#password").addEventListener("focusout", ({ target }) => signupInputCheck(target));
$("#password-check").addEventListener("focusout", ({ target }) => signupInputCheck(target));


$("#email").addEventListener("focusin", ({ target }) => clearError(target));
$("#password").addEventListener("focusin", ({ target }) => clearError(target));
$("#password-check").addEventListener("focusin", ({ target }) => clearError(target));

$("form").addEventListener("submit", signupAuthentication);
$all(".eye-Image").forEach((eye) => { eye.addEventListener("click", toggleEye); });