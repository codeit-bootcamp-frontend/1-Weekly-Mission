import { $dom } from './class/dom.js'
import { signin_email, signin_password, signin_submit } from './functions/checkout/c_mixin_signin.js';
import { common_reset } from './functions/checkout/c_mixin_common.js';
import { passwordOnoff } from './functions/passwordOnoff/passwordOnoff.js';
import { api_signin } from './functions/signFetch/fetch.js';

$dom.inputEm.addEventListener("focusout", signin_email);
$dom.inputEm.addEventListener("focusin", common_reset);

$dom.inputPw.addEventListener("focusout", signin_password);
$dom.inputPw.addEventListener("focusin", common_reset);

$dom.buttonPw.addEventListener("click", passwordOnoff);
$dom.buttonSub.addEventListener("click", signin_submit)
$dom.buttonSub.addEventListener("click", api_signin)