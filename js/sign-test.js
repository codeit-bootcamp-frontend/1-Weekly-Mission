import { Dom } from './class/dom.js'
import { dev } from './constants/account.js'
import { htmlClasses, errClass, activeClass, imgs } from './constants/cssClass.js'
import { email, password, passwordCheck } from './constants/errorMessage.js'
import { reg } from './constants/regExp.js'
import { nextPage, userPw } from './constants/signEtc.js'
import { }

const $dom = new Dom(htmlClasses);


for (const $input of $dom.inputs) {
  $input.addEventListener("focusout", checkout($dom.locator));
  $input.addEventListener("focusin", reset($dom.locator));
}
$dom.buttonSub.addEventListener("click", vaildate($dom.locator))

for (const $button of $dom.buttons) {
  $button.addEventListener("click", pwOnoff($dom.locator));
  $button.addEventListener("keypress", pwOnoff($dom.locator));
}

