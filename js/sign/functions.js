function appearError(el, elError, errorText) {
  elError.classList.add("error-appear");
  elError.textContent = errorText;
  el.classList.add("error-border");
}

function disappearError(el, elError) {
  elError.classList.remove("error-appear");
  el.classList.remove("error-border");
}

function eyeCheck(e) {
  if (e.target.tagName === "IMG") {
    const inputElement =
      e.target.parentElement.previousElementSibling.previousElementSibling;
    if (inputElement.type === "password") {
      inputElement.type = "text";
      e.target.src = "./images/eye_unslashed.svg";
    } else {
      inputElement.type = "password";
      e.target.src = "./images/eye_slashed.svg";
    }
  }
}

export { appearError, disappearError, eyeCheck };
