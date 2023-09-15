const $eye = document.getElementById("pw-show");
$eye.addEventListener("click", showpw);

function showpw(event) {
  event.preventDefault();
  const $input = document.getElementById("input-pw");
  $input.classList.toggle("active");
  if ($input.classList.contains("active")) {
    $eye.setAttribute("src", "assets/sign-eye-on.svg");
    $input.setAttribute("type", "text");
  } else {
    $eye.setAttribute("src", "assets/sign-eye-off.svg");
    $input.setAttribute("type", "password");
  }
  $input.setAttribute("autofocus", "on");
}
