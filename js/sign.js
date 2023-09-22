const $eyes = document.getElementsByClassName("form__pw-reveal-click");
for (let i = 0; i < $eyes.length; i++) {
  $eyes[i].addEventListener("click", (event) => {
    showpw(event, i);
  });
}

function showpw(event, i) {
  event.preventDefault();
  const $input = event.target.parentNode.previousSibling.previousSibling;
  $input.classList.toggle("active");
  if ($input.classList.contains("active")) {
    $eyes[i].setAttribute("src", "assets/sign-eye-on.svg");
    $input.setAttribute("type", "text");
  } else {
    $eyes[i].setAttribute("src", "assets/sign-eye-off.svg");
    $input.setAttribute("type", "password");
  }
  $input.focus();
}

