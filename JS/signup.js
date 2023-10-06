import * as tags from "./features/tags.js"

// [form input box 유효성 검사]

// 이메일 유효성 검사
import validationEmail from "./features/validationEmail.js";

const $emailValue = tags.$emailInput.value;

tags.$emailWrapper.addEventListener('focusout',(e) => validationEmail(e, $emailValue));

//eyeToggle 이벤트
import eyeToggle from "./features/eyeToggle.js";

tags.$eyes.forEach((eye) => {
  eye.addEventListener('click', (e) => eyeToggle(e));
});