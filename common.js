export function displayError(inputElement, errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.visibility = message ? "visible" : "hidden";
  if (message) {
    inputElement.classList.add("error");
  } else {
    inputElement.classList.remove("error");
  }
}

export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function togglePasswordVisibility(inputElement, toggleElement) {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    toggleElement.src = "/assets/eye-on.svg";
  } else {
    inputElement.type = "password";
    toggleElement.src = "/assets/eye-off.svg";
  }
}
