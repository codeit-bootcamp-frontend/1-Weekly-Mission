import { $, $all, toggleEye } from "./utils.js";
import { commonInputCheck, clearError } from "./errorHandle.js";
import { loginAuthentication } from "./userAuthentication.js";


$("#email").addEventListener("focusout", ({ target }) => commonInputCheck(target));
$("#password").addEventListener("focusout", ({ target }) => commonInputCheck(target));
$("#email").addEventListener("focusin", ({target}) => clearError(target));
$("#password").addEventListener("focusin", ({target}) => clearError(target));


$("form").addEventListener("submit", loginAuthentication);

$all(".eye-Image")[0].addEventListener("click", toggleEye);
