function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}


function toggleEye(e) {
  e.stopPropagation();
  const isEyeOn = e.target.src.includes("eye-on");
  e.target.src = `./images/signin/${isEyeOn ? "eye-off" : "eye-on"}.svg`;
  const $passwordInput = e.target.previousElementSibling;
  $passwordInput.type = isEyeOn ? "password" : "text";

}


export { $, $all, toggleEye };