import { commonInputCheck, signupInputCheck, displayLoginFailedError } from "./errorHandle.js";
import { user } from "./db/users.js";


function loginAuthentication(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;
  //console.log($emailInput, $passwordInput);

  if (commonInputCheck($emailInput) || commonInputCheck($passwordInput)) {
    
    return;
  }

  if ($emailInput.value === user.email && $passwordInput.value === user.password) {
    window.location.href = "/folder";
    return;
  }


  displayLoginFailedError();
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



export { loginAuthentication, signupAuthentication };
