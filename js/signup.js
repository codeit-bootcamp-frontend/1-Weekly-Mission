import { $dom } from './class/dom.js'
import { signup_email, signup_password, signup_passwordCheck, signup_sumbit } from './functions/checkout/c_mixin_signup.js';
import { common_reset } from './functions/checkout/c_mixin_common.js';
import { passwordOnoff } from './functions/passwordOnoff/passwordOnoff.js';
import { api_signup } from './functions/signFetch/fetch.js';

$dom.inputEm.addEventListener("focusout", signup_email);
$dom.inputEm.addEventListener("focusin", common_reset);

$dom.inputPw.addEventListener("focusout", signup_password);
$dom.inputPw.addEventListener("focusin", common_reset);

$dom.inputCh.addEventListener("focusout", signup_passwordCheck);
$dom.inputCh.addEventListener("focusin", common_reset);

$dom.buttonPw.addEventListener("click", passwordOnoff);
$dom.buttonCh.addEventListener("click", passwordOnoff);
$dom.buttonSub.addEventListener("click", signup_sumbit);
$dom.buttonSub.addEventListener("click", api_signup);