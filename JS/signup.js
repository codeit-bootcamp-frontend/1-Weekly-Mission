//eyeToggle 이벤트
import eyeToggle from "./eyeToggle.js";

const $eyes = document.querySelectorAll('#eye')

$eyes.forEach((eye) => {
  eye.addEventListener('click', (e) => eyeToggle(e));
});