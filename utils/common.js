export function resetErrorMessage(inputElement, errorElement) {
  errorElement.textContent = "";
  errorElement.style.visibility = "hidden";
  inputElement.classList.remove("error");
}

export function displayError(inputElement, errorElement, message) {
  if (!message) {
    resetErrorMessage(inputElement, errorElement);
    return;
  }

  errorElement.textContent = message;
  errorElement.style.visibility = "visible";
  inputElement.classList.add("error");
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

export function redirectToFolderIfAuthenticated() {
  if (localStorage.getItem("accessToken")) {
    window.location.href = "/folder";
  }
}
