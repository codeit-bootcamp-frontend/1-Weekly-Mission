import { commonInputCheck, signupInputCheck, displayLoginFailedError } from "./errorHandle.js";


async function loginAuthentication(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;

  if (commonInputCheck($emailInput) || commonInputCheck($passwordInput)) {
    return;
  }

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: $emailInput.value, password: $passwordInput.value })
    });

    if (response.ok) {
      window.location.href = "/folder";
    }

  }
  catch (error) {
    displayLoginFailedError();
  }

};





async function signupAuthentication(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;

  if (signupInputCheck($emailInput) || signupInputCheck($passwordInput)) {
    return;
  }

  console.log($emailInput.value);
  console.log($passwordInput.value);
  try {

    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: $emailInput.value, password: $passwordInput.value })
    });

    console.log(response);
    if (response.ok) {
      window.location.href = "/folder";
    }
  } catch (error) {
    console.log(error);
  }


};



export { loginAuthentication, signupAuthentication };
