const $eyes = document.getElementsByClassName("form__input-btn");
const $input = document.querySelectorAll("input");
console.log($input);
for (let i = 0; i < $eyes.length; i++) {
  $eyes[i].addEventListener("click", (event) => {
    showpw(event, i);
  });
  $eyes[i].addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === "Space") {
    showpw(event, i);
    }
  });
}
for (let i=0; i < $input.length; i++) {
  $input[i].addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  })
}

function showpw(event, i) {
  event.preventDefault();
  const $input = event.currentTarget.previousSibling.previousSibling;
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

