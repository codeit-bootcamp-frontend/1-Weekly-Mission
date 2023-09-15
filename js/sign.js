const $eye = document.getElementsByClassName("pw-show");
for (let i = 0; i < $eye.length; i++) {
  $eye[i].addEventListener("click", (event) => {
    showpw(event, i);
  });
}

function showpw(event, i) {
  event.preventDefault();
  const $input = event.target.previousSibling.previousSibling;
  $input.classList.toggle("active");
  if ($input.classList.contains("active")) {
    $eye[i].setAttribute("src", "assets/sign-eye-on.svg");
    $input.setAttribute("type", "text");
  } else {
    $eye[i].setAttribute("src", "assets/sign-eye-off.svg");
    $input.setAttribute("type", "password");
  }
  $input.focus();
}
