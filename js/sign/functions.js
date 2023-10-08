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

function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
  return pattern.test(email);
}

function isValidPassword(password) {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return pattern.test(password);
}

export { appearError, disappearError, eyeCheck, isValidEmail, isValidPassword };
