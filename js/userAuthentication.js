import { displayError, getInputErrors, errorMessages, commonInputCheck, signupInputCheck } from "./errorHandle.js";


const user = {
  email: "test@codeit.com",
  password: "codeit101"
}

function loginAuthentication(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;
  const [$emailError, $passwordError] = getInputErrors();

  if (commonInputCheck($emailInput) || commonInputCheck($passwordInput)) {
    return;
  }

  if ($emailInput.value === user.email && $passwordInput.value === user.password) {
    window.location.href = "/folder";
    return;
  }

  displayError($emailError, errorMessages.loginFailed.email);
  displayError($passwordError, errorMessages.loginFailed.password);
};


function signupAuthentication(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;

  if (signupInputCheck($emailInput) || signupInputCheck($passwordInput)) {
    return;
  }
  window.location.href = "/folder";

};



export { loginAuthentication, user, signupAuthentication };