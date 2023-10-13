const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("button");
const eyeBtn = document.querySelector(".eye-button");

function reset(e) {
  e.target.classList.remove("warning");
  const warningText = document.querySelector(".warning-text");
  if (warningText) {
    warningText.remove();
  }
}

function eyeOnOff(e) {
  e.target.classList.toggle("line");
  if (e.target.classList.contains("line") === true) {
    passwordInput.removeAttribute("type");
  } else {
    passwordInput.setAttribute("type", "password");
  }
}

function writeError(e, errorMessage) {
  emailInput.classList.add("warning");
  const text = document.createElement("span");
  text.classList.add("warning-text");
  text.textContent = errorMessage;
  return text
}


function displayError(e, errorMessage) {
    const warningMessage = writeError(e, errorMessage)
    e.target.after(warningMessage);
}







export {reset, eyeOnOff, writeError, displayError};


